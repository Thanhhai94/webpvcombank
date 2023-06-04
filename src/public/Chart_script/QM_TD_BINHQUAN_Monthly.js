
input_data_ky_bao_cao = data_ky_bao_cao.map(value => value.toFixed(0))
input_data_ky_so_sanh = data_ky_so_sanh.map(value => value.toFixed(0))
console.log("input_data_ky_bao_cao",input_data_ky_bao_cao)

Highcharts.chart('CHART_1', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Quy mô tín dụng bình quân'
    },
    xAxis: {
      categories: ['KHCN-CN', 'KHDN-Core', 'KHDN-Upper', 'KHDNL - Non-PVN', 'Toàn hàng'],
    },
    yAxis: {
      gridLineWidth: 0,
      title: {
        text: ''
      },
      labels: {
        enabled: false
      }
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      
      series: {
        groupPadding: 0.12
   },
      column: {
        borderRadius: '0%',
        pointPadding: 0.2
      }
    },
    series: [{
      dataLabels: {
        enabled:true,
        style: {
          fontSize: 9,
          textOutline: '1px 1px contrast'
        }
      },
      
      color: 'rgba(0,74,85)',
      pointWidth: 40,
      name: ky_bao_cao,
      data: data_ky_bao_cao
    }, {
      dataLabels: {
        enabled:true,
        style: {
          fontSize: 9,
          textOutline: '1px 1px contrast'
        }
      },
      color: 'rgba(167,228,230)',
      pointWidth: 40,
      name: ky_so_sanh,
      data: data_ky_so_sanh
    }]
  });