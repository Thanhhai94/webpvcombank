Highcharts.chart('Dashboard_Count_Job', {
  colors: ['rgb(190,45,45)', 'rgb(147,19,93)', 'rgb(102,141,120)'],
  chart: {
    height: 200,
    backgroundColor: '#F4CC70',
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
  tooltip: {
    outside: true
  },
  title :{
    text: ''
  },
  legend: {
    enabled: false
  },
  pane: {
    size: '95%',
    innerSize: '50%',
    endAngle: 360
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
      step: 1,
      y: 3,
      style: {
        fontSize: '13px'
      }
    },
    lineWidth: 0,
    categories: [
      ''
    ]
  },
  yAxis: {
    labels: {
      enabled: false
    },
    crosshair: {
      enabled: true,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 0,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0
    },
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.y:,.0f}%',
        style: {
          fontSize: 10
        }
      }
    }
  },
  series: [{
    name: 'Chưa thực hiện',
    data: [TyleStatusJob.TL_Chuathuchien]
  }, {
    name: 'Đang thực hiện',
    data: [TyleStatusJob.TL_thuchien]
  }, {
    name: 'Hoàn thành',
    data: [TyleStatusJob.TL_hoanthanh]
  }]
});