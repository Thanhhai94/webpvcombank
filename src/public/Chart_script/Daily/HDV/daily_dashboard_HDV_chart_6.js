
var data = [13,21,2]

Highcharts.chart('TT_Casa', {
  colors: ['#345DA7', '#3B8AC4', '#4BB4DE'],
  chart: {
    backgroundColor: '#DDDDDD',
    type: 'column',
    inverted: true,
    polar: true
  },
   exporting : {
    enabled: false
  },
  credits: {
    enabled: false
  },
  title: {
    text: 'Tỷ trọng Casa',
    align: 'center'
  },
  tooltip: {
    outside: true
  },
  pane: {
    size: '100%',
    innerSize: '0%',
    endAngle: 70
  },
  xAxis: {
    gridLineWidth: 0,
    labels: {
      enabled: false
    },
    tickInterval: 0,
    labels: {
      align: 'right',
      useHTML: true,
      allowOverlap: true,
      step: 0,
      y: 0,
      style: {
        fontSize: '15px',
        fontWeight: '700'
      }
    },
    lineWidth: 0,
    categories: TT_CASA_categories
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    x: 0,
    y: 80
},
  yAxis: {
    labels: {
      enabled: false
    },
    crosshair: {
      enabled: false,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 25,
    reversedStacks: false,
    endOnTick: false,
    showLastLabel: false
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [{
    name: 'KHDNL',
    data: [TT_CASA_Value[0],0, 0]
  }, {
    name: 'KHDN',
    data: [0,TT_CASA_Value[1],0]
  }, {
    name: 'KHCN',
    data: [0,0,TT_CASA_Value[2]]
  }]
});