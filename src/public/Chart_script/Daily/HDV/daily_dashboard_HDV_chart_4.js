Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});
Highcharts.chart('TT_HDV_CKH_Daily', {
  chart: {
    backgroundColor: '#DDDDDD',
    type: 'column',
    
  },
  exporting : {
    enabled: false
  },
  title: {
    text: 'Tăng trưởng HĐV CKH'
  },
  xAxis: {
    lineWidth:0,
    categories: ['CN', 'Core', 'Upper', 'Non-PVN', 'PVN']
  },
  yAxis: {
    gridLineWidth: 0,
    title: {
      text:''
    },
    labels: {
      enabled: false
    },
    plotLines:[{
      color: '#000000',
      width: 0.5,
      value: 0,
      zIndex: 5
    }] ,
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    column: {
    },
    series: {
      groupPadding: 0.08
    }
  },
  series: [{
    dataLabels: {
      enabled:true,
      format: '{point.y:,.0f}'
    },
    color: '#003B46',
    pointWidth: 30,
    name: 'DTD',
    data: data_TT_HDV_CKH_DTD
  }, {
    dataLabels: {
      enabled:true,
      format: '{point.y:,.0f}'
    },
    color: '#07575B',
    pointWidth: 30,
    name: 'MTD',
    data: data_TT_HDV_CKH_MTD
  }, {
    dataLabels: {
      enabled:true,
      format: '{point.y:,.0f}'
    },
    color: '#66A5AD',
    pointWidth: 30,
    name: 'PVN',
    data: data_TT_HDV_CKH_YTD
  }]
});