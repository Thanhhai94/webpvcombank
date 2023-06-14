Highcharts.chart('daily_dashboard_TD_chart_2', {
  chart: {
    type: 'spline',
    marginLeft:30,
    height: 220
  },
  credits: {
    enabled: false
  },
  exporting : {
    enabled: false
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.x +
          '</b> : <b>' + (this.y).toFixed(2) +'</b><b> % </b>';
  },
    shared: true
  },
  legend: {
    enabled: false
  },
  title: {
    text: 'Lãi suất hợp đồng theo ngày',
    style: {
      color: '#0772ba',
    }
  },
  xAxis: {
    categories: arrayInputDate
  },
  yAxis: {
    gridLineWidth: 0,
    title: {
      text:''
    },
    labels: {
      enabled: false
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    dataLabels: {
      enabled:true,
      format: '{point.y:.2f}%'
    },
    name: 'HDV_CKH',
    color: 'rgba(0,112,192)',
    data: data_LAI_SUAT_HD
  }]
});