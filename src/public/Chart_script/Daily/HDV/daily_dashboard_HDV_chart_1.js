Highcharts.chart('daily_dashboard_HDV_chart_1', {
  chart: {
    backgroundColor: '#DDDDDD',
    renderTo: 'container',
    type: 'column',
    marginLeft:30,
    height: 350
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
    text: 'Tăng trưởng HĐV CKH theo ngày',
    style: {
      color: '#0772ba',
    }
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.x +
          '</b> : <b>' + (this.y).toFixed(2) + ' tỉ đồng</b>';
  },
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
      format: '{point.y:.0f}'
    },
    color: '#336B87',
    pointWidth: 25,
    name: 'Tỷ đồng',
    type: 'column',
    zIndex: 2,
    data: data_HUY_DONG_VON_CKH
  }]
});