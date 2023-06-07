Highcharts.chart('daily_dashboard_TD_chart_4', {
  chart: {
    renderTo: 'container',
    type: 'column',
    marginLeft:30,
    height: 400
  },
  credits: {
    enabled: false
  },
  exporting : {
    enabled: false
  },
  legend: {
    enabled: false
},
  title: {
    text: 'Quy mô theo nhóm KH',
    style: {
      color: '#0772ba',
    }
  },
  tooltip: {
    shared: true
  },
  xAxis: {
    lineWidth: 0,
    categories: ['KHDN','Core','Upper','KHDNL','THN'],
    crosshair: true,
    labels: {
    },
  },
  yAxis: [{
    minPadding: 0,

    gridLineWidth: 0,
    plotLines:[{
      color: '#000000',
      width: 0.5,
      value: 0,
      zIndex: 5
    }] ,
    title: {
      text: ''
    },
    labels: {
      enabled: false,
    }
  }, {
    title: {
      text: ''
    },
  }],
  series: [{
    dataLabels : {
      enabled: true,
      format: '{point.y:.2f}'
    },
    color: '#336B87',
    pointWidth: 25,
    name: 'Tỷ đồng',
    type: 'column',
    zIndex: 2,
    data: [10000,10000,10000,20000,30000]
  }]
});