Highcharts.chart('LS_HD_Daily_KKH', {
  chart: {
    type: 'spline',
    backgroundColor: '#DDDDDD',
    marginLeft:30,
    height: 250
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
    text: 'Lãi suất hợp đồng KKH',
    style: {
      color: '#0772ba',
    }
  },
  xAxis: {
    categories: arrayInputDateLSKKH
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
    data: data_LAI_SUAT_HD_KKH,
    dashStyle: 'shortdot'
  }]
});