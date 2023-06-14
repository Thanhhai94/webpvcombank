
Highcharts.chart('LS_HD_Daily_CKH', {
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
    text: 'Lãi suất hợp đồng CKH',
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
  tooltip: {
    formatter: function () {
        return this.points.reduce(function (s, point) {
              return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                (point.y).toFixed(4) + ' % </b>' 
        }, '<b>' + this.x + '</b>');
    },
    shared: true
},
  series: [{
    dataLabels: {
      enabled:true,
      format: '{point.y:.2f}%'
    },
    name: 'HDV_CKH',
    color: 'rgba(0,112,192)',
    data: data_LAI_SUAT_HD_CKH,
    dashStyle: 'Solid'
  }]
});