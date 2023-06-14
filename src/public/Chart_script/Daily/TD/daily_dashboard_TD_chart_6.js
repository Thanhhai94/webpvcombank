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
      formatter: function () {
          return this.points.reduce(function (s, point) {
              if(point.series.name == 'Gốc vay hợp đồng tất toán'){
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                Number((point.y).toFixed(2)).toLocaleString("en-US") + ' tỉ đồng </b>' ;
              } else {
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                  point.y.toFixed(2) + '% </b>' ;
              }
          }, '<b>' + this.x + '</b>');
      },
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
      data: total_DU_NO_TAT_TOAN,
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
      name: 'Tỉ lệ tất toán trước hạn',
      type: 'spline',
      color: 'rgb(153,0,255)',
      lineWidth: 2,
      data: ti_le_tat_toan_truoc_han,
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