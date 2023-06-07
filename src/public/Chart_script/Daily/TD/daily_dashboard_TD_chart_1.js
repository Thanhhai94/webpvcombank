Highcharts.chart('daily_dashboard_TD_chart_1', {
    chart: {
      renderTo: 'container',
      type: 'column',
      marginLeft:30,
      height: 220
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
      text: 'Tăng trưởng tín dụng theo ngày',
      style: {
        color: '#0772ba',
      }
    },
    tooltip: {
      shared: true
    },
    xAxis: {
      lineWidth: 0,
      categories: arrayInputDate,
      crosshair: true,
      labels: {
        rotation: -45,
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
      color: 'rgb(31, 78, 120)',
      pointWidth: 25,
      name: 'Tỷ đồng',
      type: 'column',
      zIndex: 2,
      data: total_TT_TD_TN
    }]
  });