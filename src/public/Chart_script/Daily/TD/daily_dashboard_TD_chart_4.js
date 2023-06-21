Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});
Highcharts.chart('daily_dashboard_TD_chart_4', {
  chart: {
    renderTo: 'container',
    type: 'column',
    marginLeft:30,
    height: 350
  },
  credits: {
    enabled: false
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
  legend: {
    enabled: false
},
  title: {
    text: 'Quy mô theo nhóm KH',
    style: {
      color: '#0772ba',
    }
  },
  xAxis: {
    lineWidth: 0,
    categories: ['KHCN', 'Core', 'Upper', 'KHDNL'],
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
      format: '{point.y:,.0f}'
    },
    color: '#336B87',
    pointWidth: 35,
    name: 'Tỷ đồng',
    type: 'column',
    zIndex: 2,
    data: data_TD_NHOMKH.Amt
  }]
});