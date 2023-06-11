Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

Highcharts.chart('QM_HDV_NKH_Daily', {
  chart: {
    backgroundColor: '#DDDDDD',
    type: 'column',
  },
  credits: {
    enabled: false
  },
  exporting : {
    enabled: false
  },
  title: {
    text: 'Quy mô HDV theo nhóm KH'
  },
  xAxis: {
    gridLineWidth: 0,
    categories: [
      'CN',
      'Core',
      'Upper',
      'Non-PVN',
      'PVN'
    ]
  },
  yAxis: [{
    gridLineWidth: 0,
    labels: {
      enabled: false
    },
    min: 0,
    title: {
      text: ''
    }
  }, {
    title: {
      text: ''
    },
    opposite: true
  }],
  legend: {
    shadow: false
  },
  tooltip: {
    shared: true
  },
  plotOptions: {
    column: {
      grouping: false,
      shadow: false,
      borderWidth: 0
    },
    series: {
      groupPadding: 0
    }
  },
  series: [{
    dataLabels: {
      y: -15,
      enabled:true,
      format: '{point.y:,.0f}',
    },
    pointWidth: 35,
    name: 'Quy mô CKH',
    color: '#375E97',
    data: data_QM_CKH,
  }, {
    dataLabels: {
      enabled:true,
      format: '{point.y:,.0f}',
    },
    pointWidth: 60,
    name: 'Quy mô KKH',
    color: 'rgba(165,170,217,0.7)',
    data: data_QM_KKH,
    colors: '#66A54D'
  }, ]
});