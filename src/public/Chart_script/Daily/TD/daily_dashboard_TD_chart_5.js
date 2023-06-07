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
    text: 'Tỷ trọng dư nợ khách hàng doanh nghiệp',
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
    data: [{ name: 'Tín dụng thông thường', y: 49, color: 'rgb(1,104,134)' },
      { name: 'Trái phiếu', y: 35,color: 'rgb(1,51,65)' },
      { name: 'Các khoản bán nợ', y: 16, color: 'rgb(172,236,254)' },]
  }]
});