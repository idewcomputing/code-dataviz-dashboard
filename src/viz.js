google.charts.load('current');
var viz = {
  db: new alasql.Database(),
  loadTables: function (link) {
    return new Promise((resolve, reject) => {
      // this.db = new alasql.Database();
      Tabletop.init({
        key: link,
        parseNumbers: true,
        callback: (data, tabletop) => {
          for (var tname in data) {
            // console.log(data[tname].elements)
            this.db.exec(`CREATE TABLE ${tname}`);
            this.db.tables[tname].data = data[tname].elements;
            resolve();
          }
        }
      });
    });
  },
  loadExampleTables: function () {
    return new Promise((resolve, reject) => {
      var link = 'https://docs.google.com/spreadsheets/d/1o60fGIa1USsQTXyYc-Qh-eYQ2TlHaaEC_iSdzJ7WbD4/edit?usp=sharing';
      this.loadTables(link).then(resolve);;
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

