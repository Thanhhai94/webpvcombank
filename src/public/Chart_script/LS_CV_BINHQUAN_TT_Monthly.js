// var input_month = ["20221231","20230131","20230128","20230331","20230430"]

// var input_month = inputMonth.map(value => value.toString())

// console.log("input_month",input_month)

Highcharts.chart('chart_2', {
    chart: {
      marginTop:90,
      zoomType: 'xy'
    },
    title: {
      text: 'Lãi suất cho vay bình quân thực tế',
      align: 'center'
    },
    subtitle: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: [{
      categories: input_month,
      crosshair: true,
      // 
    }],
    yAxis: [
    {
      gridLineWidth: 0, 
      labels: {
        enabled: false,
        format: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }
    , { // Secondary yAxis
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      align: 'center',
      x: 0,
      verticalAlign: 'top',
      y: 50,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
    },
    series: [{
      dataLabels: {
        enabled:true  ,
        format: '{point.y:.2f}%',
        position: "center",
        y: 120,
        borderWidth:1,
        backgroundColor: 'white'
        },
      color: '#243665',
      name: 'ALL',
      type: 'column',
      data: data_LS_CV_BQ_TT,
      tooltip: {
        valueSuffix: ' %'
      }
  
    }, {
      dataLabels: {
        borderRadius:5,
        enabled:true ,
        format: '{point.y:.2f}%',
      backgroundColor: 'RGB(0,176,80)',
      colors: 'white',
      padding: 6 
        },
        color: 'RGB(0,176,80)',
      name: 'KHCN',
      type: 'spline',
      data: data_LS_CV_BQ_TT_KHCN,
      tooltip: {
        valueSuffix: '%'
      }
    },
      {
      dataLabels: {
        borderRadius:5,
      enabled:true ,
      format: '{point.y:.2f}%',
      backgroundColor: 'RGB(255,192,0)',
      padding: 6
      },
      color: 'RGB(255,192,0)',
      name: 'KHDN',
      type: 'spline',
      data: data_LS_CV_BQ_TT_KHDN,
      tooltip: {
        valueSuffix: '%'
      }
    },
    {
      dataLabels: {
        borderRadius:5,
        enabled:true ,
        format: '{point.y:.2f}%',
      backgroundColor: 'RGB(237,125,49)',
      padding: 6 
        },
        color: 'RGB(237,125,49)',
        name: 'KHDNL',
        type: 'spline',
        data: data_LS_CV_BQ_TT_KHDNL,
        tooltip: {
          valueSuffix: '%'
        }
      }]
  });