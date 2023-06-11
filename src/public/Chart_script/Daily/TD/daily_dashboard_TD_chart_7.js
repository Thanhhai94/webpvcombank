Highcharts.chart('daily_dashboard_TD_chart_7', {
  chart: {
  marginLeft: 30,
  height: 300,
  zoomType: 'xy'
  },
  title: {
    text: 'Tỉ lệ giải ngân ưu đãi/tổng giải ngân lũy kế tháng',
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
    name: 'Số dư hợp đồng giải ngân',
    type: 'column',
    borderWidth: 2,
    borderColor: 'rgb(31, 78, 120)',
    color: 'rgba(221,235,247,0.8)',
    pointWidth: 30,
    yAxis: 1,
    data: total_DU_NO_GIAI_NGAN,
    tooltip: {
      valueSuffix: 'tỷ '
    },
    dataLabels: {
      verticalAlign: 'bottom',
      enabled: true,
      style: {
        color: 'rgb(31, 78, 120)'
      },
      format: '{point.y:,.0f}'
    }

  }, {
    name: 'Tỉ lệ giải ngân ưu đãi',
    type: 'spline',
    color: '#EE8980',
    lineWidth: 2,
    data: ti_le_giai_ngan_uu_dai,
    tooltip: {
      valueSuffix: ' %'
    },
    dataLabels: {
      
      style : {
          color: '#EE8980',
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