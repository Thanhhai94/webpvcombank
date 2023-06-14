// Data retrieved from https://netmarketshare.com/
// Build the chart
Highcharts.chart('daily_dashboard_TD_chart_5', {
  chart: {
    height: 400,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  credits: {
    enabled: false
  },
  exporting : {
    enabled: false
  },
  title: {
    text: 'Tỷ trọng dư nợ tín dụng KHDN',
    align: 'center'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
      showInLegend: true
    }
  },
  series: [{
    name: 'Tỷ trọng',
    colorByPoint: true,
    data: [{ name: 'Tín dụng thông thường', y: data_TT_DU_NO_TIN_DUNG_KHDN.a, color: 'rgb(1,104,134)' },
      { name: 'Trái phiếu', y: data_TT_DU_NO_TIN_DUNG_KHDN.b,color: 'rgb(1,51,65)' },
      { name: 'Các khoản bán nợ', y: data_TT_DU_NO_TIN_DUNG_KHDN.c, color: 'rgb(172,236,254)' },]
  }]
});