Highcharts.chart('daily_dashboard_HDV_chart_1', {
  chart: {
    renderTo: 'container',
    type: 'column'
  },
  credits: {
    enabled: false
  },
  legend: {
    enabled: false
},
  title: {
    text: 'Tăng trưởng HĐV CKH theo ngày',
    style: {
      color: '#0772ba',
    }
  },
  tooltip: {
    shared: true
  },
  xAxis: {
    lineWidth: 0,
    categories: date_HUY_DONG_VON_CKH,
    crosshair: true,
    labels: {
      rotation: -90,
    },
  },
  yAxis: [{
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
    name: 'Nghìn tỷ',
    type: 'column',
    zIndex: 2,
    data: data_HUY_DONG_VON_CKH
  }]
});