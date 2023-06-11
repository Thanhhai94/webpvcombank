Highcharts.chart('daily_dashboard_TD_chart_6', {
    chart: {
    marginLeft: 30,
    height: 300,
    zoomType: 'xy'
    },
    title: {
      text: 'Tỉ lệ tất toán trước hạn lũy kế tháng',
      align: 'center'
    },
   credits: {
      enabled: false
    },

    exporting : {
      enabled: false
    },
    xAxis: [{
      categories: arrayInputDate,
      crosshair: true
    }],
    yAxis: [
        {
     // Primary yAxis
      labels: {
        enabled: false,
        format: '',
      },
      title: {
        text: '',
      },
      gridLineWidth: 0,
    }, { // Secondary yAxis
      title: {
        text: '',
      },
      labels: {
        enabled: false,
        format: '',
      },
      opposite: true,
      gridLineWidth: 0,
    }],
    tooltip: {
      shared: true
    },
    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        
    },
    series: [{
      name: 'Gốc vay hợp đồng tất toán',
      type: 'column',
      color: 'rgba(31, 78, 120,0.6)',
      pointWidth: 30,
      yAxis: 1,
      data: [5000,5000,5000,5000,5000,5000,5000,500,500,500,500,500,500,500,500],
      tooltip: {
        valueSuffix: 'tỷ '
      },
      dataLabels: {
        verticalAlign: 'bottom',
        enabled: true
      }
  
    }, {
      name: 'Tỉ lệ tất toán trước hạn',
      type: 'spline',
      color: 'rgb(153,0,255)',
      lineWidth: 2,
      data: [13.6, 14.9, 9.8, 10.7, 9.1, 13.0, 14.5, 10.8, 5.8,
        10.7, 11.0, 16.4,20,25,21],
      tooltip: {
        valueSuffix: ' %'
      },
      dataLabels: {
        
        style : {
            color: 'rgb(153,0,255)',
            fontSize : 10,
            fontWeight: 600,
            fontFamily: '',
            textOutline: 0,
    
        },
        y: -5,
        enabled: true,
        format: '{point.y:,.1f}%'
      }
    }]
  });