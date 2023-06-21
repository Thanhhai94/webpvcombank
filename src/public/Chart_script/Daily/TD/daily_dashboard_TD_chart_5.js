// Data retrieved from https://netmarketshare.com/
// Build the chart
// Highcharts.chart('daily_dashboard_TD_chart_5', {
//   chart: {
//     height: 400,
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     plotShadow: false,
//     type: 'pie'
//   },
//   credits: {
//     enabled: false
//   },
//   exporting : {
//     enabled: false
//   },
//   title: {
//     text: 'Tỷ trọng dư nợ tín dụng KHDN',
//     align: 'center'
//   },
//   tooltip: {
//     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//   },
//   accessibility: {
//     point: {
//       valueSuffix: '%'
//     }
//   },
//   plotOptions: {
//     pie: {
//       allowPointSelect: true,
//       cursor: 'pointer',
//       dataLabels: {
//                 enabled: true,
//                 format: '{point.percentage:.1f} %',
//                 distance: -50,
//                 filter: {
//                     property: 'percentage',
//                     operator: '>',
//                     value: 4
//                 }
//             },
//       showInLegend: true
//     }
//   },
//   series: [{
//     name: 'Tỷ trọng',
//     colorByPoint: true,
//     data: [{ name: 'Tín dụng thông thường', y: data_TT_DU_NO_TIN_DUNG_KHDN.a, color: 'rgb(1,104,134)' },
//       { name: 'Trái phiếu', y: data_TT_DU_NO_TIN_DUNG_KHDN.b,color: 'rgb(1,51,65)' },
//       { name: 'Các khoản bán nợ', y: data_TT_DU_NO_TIN_DUNG_KHDN.c, color: 'rgb(172,236,254)' },]
//   }]
// });

Highcharts.chart('daily_dashboard_TD_chart_5', {
  colors: ['rgb(1,104,134)', 'rgb(1,51,65)', 'rgb(172,236,254)'],
  chart: {
    height: 350,
    type: 'column',
    inverted: true,
    polar: true
  },
   exporting : {
    enabled: false
  },
  credits: {
    enabled: false
  },
  title: {
    text: 'Tỷ trọng dư nợ tín dụng KHDN',
    align: 'center',
    style: {
      color: '#0772ba',
    }
  },
  tooltip: {
    formatter: function () {
      return `<b style="color:${this.point.series.color}">${this.point.series.name} : ${this.point.y}%</b>`;
  
  },
  },
  pane: {
    size: '95%',
    innerSize: '50%',
    endAngle: 360
  },
  xAxis: {
    gridLineWidth: 0,
    labels: {
      enabled: true
    },
    tickInterval: 0,
    labels: {
      align: 'right',
      useHTML: true,
      allowOverlap: true,
      step: 1,
      y: 3,
      style: {
        fontSize: '13px'
      }
    },
    lineWidth: 0,
    categories: [
      ''
    ]
  },
  yAxis: {
    labels: {
      enabled: false
    },
    crosshair: {
      enabled: true,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 0,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0
    },
    series: {
      dataLabels: {
        y: -10,
        enabled: true,
        format: '{point.y:,.0f}%',
        style: {
          fontSize: 13
        }
      }
    }
  },
  series: [{
    name: 'Tín dụng thông thường',
    data: [data_TT_DU_NO_TIN_DUNG_KHDN.a]
  }, {
    name: 'Trái phiếu',
    data: [data_TT_DU_NO_TIN_DUNG_KHDN.b]
  }, {
    name: 'Các khoản bán nợ',
    data: [data_TT_DU_NO_TIN_DUNG_KHDN.c]
  }]
});