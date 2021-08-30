google.charts.load('current');
var viz = {
  db: new alasql.Database(),
  loadTable: function (link, tab) {
    return new Promise((resolve, reject) => {
      var self = this;
      Papa.parse(link, {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (results) {
          console.log(results.data)
          self.db.exec(`CREATE TABLE ${tab}`);
          self.db.tables[tab].data = results.data;
          resolve();
        }
      })
    });
  },
  loadExampleTables: function () {
    return new Promise((resolve, reject) => {
      var link = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUwF7K2lCH8CxQPJW-X7NqENwuwUM4eAeNUKw3j6yppO0tipC6yUB2hQPtRBZf19mmVbM5TdkkengZ/pub?output=csv';
      this.loadTable(link, "Degrees").then(resolve);
    });
  },
  query: function (q) {
    var alaResult = this.db.exec(q);
    var cnames = Object.keys(alaResult[0]);
    var data = new google.visualization.DataTable();
    cnames.forEach(cname => {
      data.addColumn(typeof alaResult[0][cname], cname);
    });
    alaResult.forEach(row => {
      var valid = true;
      Object.values(row).forEach((e, i) => {
        valid = valid && (typeof e == data.getColumnType(i));
      })
      if (valid) data.addRow(Object.values(row));
    });
    return data;
  },
  chart: function (o) {
    var chartObject = {
      chartType: o.chartType,
      dataTable: this.query(o.sql),
      containerId: o.containerId,
      options: {
        backgroundColor: 'white',
        fontSize: 12,
        width: '100%',
        legend: { position: "none" }
      }
    };
    var defaultOptions = {
      BarChart: {
        height: chartObject.dataTable.getNumberOfRows() * 50 + 100,
        chartArea: {
          height: chartObject.dataTable.getNumberOfRows() * 50,
        },
        hAxis: {
          viewWindow: {
            min: 0
          }
        }
      },
      Histogram: {
      },
      ColumnChart: {
        vAxis: {
          viewWindow: {
            min: 0
          }
        }
      }
    };
    Object.assign(chartObject.options, defaultOptions[chartObject.chartType]);
    Object.assign(chartObject.options, o.options);
    var wrapper = new google.visualization.ChartWrapper(chartObject);
    wrapper.draw();
  }
};
