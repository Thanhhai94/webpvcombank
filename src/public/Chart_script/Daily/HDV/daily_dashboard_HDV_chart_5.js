Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});
Highcharts.chart('TT_HDV_KKH_Daily', {
  chart: {
    backgroundColor: '#DDDDDD',
    type: 'column',
    
  },
  tooltip: {
    formatter: function () {
        return this.points.reduce(function (s, point) {
              return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                Number((point.y).toFixed(2)).toLocaleString("en-US") + ' tỉ đồng </b>' 
        }, '<b>' + this.x + '</b>');
    },
    shared: true
},
  exporting : {
    enabled: false
  },
  title: {
    text: 'Tăng trưởng HĐV KKH'
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
    data: data_TT_HDV_KKH_DTD
  }, {
    dataLabels: {
      enabled:true,
      format: '{point.y:,.0f}'
    },
    color: '#07575B',
    pointWidth: 30,
    name: 'MTD',
    data: data_TT_HDV_KKH_MTD
  }, {
    dataLabels: {
      enabled:true,
      format: '{point.y:,.0f}'
    },
    color: '#66A5AD',
    pointWidth: 30,
    name: 'YTD',
    data: data_TT_HDV_KKH_YTD
  }]
});