Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });
  Highcharts.chart('daily_dashboard_TD_chart_3', {
    chart: {
      height: 350,
      type: 'column',
      
    },
    tooltip: {
      formatter: function () {
          return this.points.reduce(function (s, point) {
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                  Number((point.y).toFixed(2)).toLocaleString("en-US") + ' tỉ đồng </b>' 
          }, '<b>' + this.x + '</b>');
      },
      shared: true
  },
    exporting : {
      enabled: false
    },
    title: {
      text: 'Tăng trưởng tín dụng theo nhóm KH',
      style: {
        color: '#0772ba',
      }
    },
    xAxis: {
      lineWidth:0,
      categories: ['KHCN', 'Core', 'Upper', 'KHDNL']
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        text:''
      },
      labels: {
        enabled: false
      },
      plotLines:[{
        color: '#000000',
        width: 0.5,
        value: 0,
        zIndex: 5
      }] ,
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
      },
      series: {
        groupPadding: 0.08
      }
    },
    series: [{
      dataLabels: {
        enabled:true,
        format: '{point.y:,.0f}'
      },
      color: '#003B46',
      name: 'DTD',
      data: data_TD_NHOMKH.Dtd
    }, {
      dataLabels: {
        x: -5,
        enabled:true,
        format: '{point.y:,.0f}'
      },
      color: '#07575B',
      name: 'MTD',
      data: data_TD_NHOMKH.Mtd
    }, {
      dataLabels: {
        enabled:true,
        format: '{point.y:,.0f}'
      },
      color: '#66A5AD',
      name: 'YTD',
      data: data_TD_NHOMKH.Ytd
    }]
  });