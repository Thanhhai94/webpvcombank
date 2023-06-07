Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });
  Highcharts.chart('daily_dashboard_TD_chart_3', {
    chart: {
      height: 400,
      type: 'column',
      
    },
    exporting : {
      enabled: false
    },
    title: {
      text: 'Tăng trưởng tín dụng theo nhóm KH'
    },
    xAxis: {
      lineWidth:0,
      categories: ['KHCN', 'Core', 'Upper', 'KHDNL', 'THN']
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
      name: 'DTD',
      data: [1,1,1,1,1]
    }, {
      dataLabels: {
        enabled:true,
        format: '{point.y:,.0f}'
      },
      color: '#07575B',
      name: 'MTD',
      data: [2,2,-2,2,2]
    }, {
      dataLabels: {
        enabled:true,
        format: '{point.y:,.0f}'
      },
      color: '#66A5AD',
      name: 'PVN',
      data: [3,3,3,3,3]
    }]
  });