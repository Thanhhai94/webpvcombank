const generateDateArray= (dateString, daysBefore) => {
    var date = new Date(dateString);
    date.setDate(date.getDate() - daysBefore);
  
    var dateArray = [];
    for (var i = 0; i <= daysBefore; i++) {
      dateArray.push(date.toISOString().split('T')[0]);
      date.setDate(date.getDate() + 1);
    }
  
    return dateArray;
  };

const arrayInputDate = (dateArray) => {
  let kq = dateArray.map(date => date.replaceAll('-',''))
  return kq
  };

const getDataOfDtd = (data, type) => {
  let dataArray = []
  data.map(value => {
    dataArray.push(value.Dtd)
  })
  return dataArray
}
const getDateOfDtd = (data, type) => {
  let dataArray = []
  data.map(value => {
    dataArray.push(value.Rptdate)
  })
  return dataArray
}

const getObjectdata = (data) => {
  let dataArray = [];
  data.map(value => {
    dataArray.push({Rptdate: value.Rptdate, Dtd: value.Dtd})
  })
  return dataArray
}

const getContinuousData = (arrayDate,arrayData) => {
  const result = []
    for(let i = 0; i<arrayDate.length; i++){
        let input = 0
        for(let j=0; j<arrayData.length; j++){
            if(arrayDate[i]==arrayData[j].Rptdate.trim()){
                input = arrayData[j].Dtd
            }
        }
        result.push(input)
    }
  return result
}

const getContinuousDataLS = (arrayDate,arrayData) => {
  var result = []
    for(let i = 0; i<arrayDate.length; i++){
        let input = 0
        for(let j=0; j<arrayData.length; j++){
            if(arrayDate[i]==arrayData[j].Rptdate){
                input = arrayData[j].Amt*100
            }
        }
        result.push(input)
    }
  return result
}

const getDataHDVCKHDTD = (array_1,array_2,array_3,array_4,array_5) => {
  const result = []
  result.push(array_1[0].Dtd ? array_1[0].Dtd : 0 )
  result.push(array_2[0].Dtd ? array_2[0].Dtd : 0 )
  result.push(array_3[0].Dtd ? array_3[0].Dtd : 0 )
  result.push(array_4[0].Dtd ? array_4[0].Dtd : 0 )
  result.push(array_5[0].Dtd ? array_5[0].Dtd : 0 )
  return result
}

const getDataHDVAMT = (array_1,array_2,array_3,array_4,array_5) => {
  const result = []
  result.push(array_1[0].Amt ? array_1[0].Amt : 0 )
  result.push(array_2[0].Amt ? array_2[0].Amt : 0 )
  result.push(array_3[0].Amt ? array_3[0].Amt : 0 )
  result.push(array_4[0].Amt ? array_4[0].Amt : 0 )
  result.push(array_5[0].Amt ? array_5[0].Amt : 0 )
  return result
}
const getDataHDVCKHMTD = (array_1,array_2,array_3,array_4,array_5) => {
  const result = []
  result.push(array_1[0].Mtd ? array_1[0].Mtd : 0 )
  result.push(array_2[0].Mtd ? array_2[0].Mtd : 0 )
  result.push(array_3[0].Mtd ? array_3[0].Mtd : 0 )
  result.push(array_4[0].Mtd ? array_4[0].Mtd : 0 )
  result.push(array_5[0].Mtd ? array_5[0].Mtd : 0 )
  return result
}
const getDataHDVCKHYTD = (array_1,array_2,array_3,array_4,array_5) => {
  const result = []
  result.push(array_1[0].Ytd ? array_1[0].Ytd : 0 )
  result.push(array_2[0].Ytd ? array_2[0].Ytd : 0 )
  result.push(array_3[0].Ytd ? array_3[0].Ytd : 0 )
  result.push(array_4[0].Ytd ? array_4[0].Ytd : 0 )
  result.push(array_5[0].Ytd ? array_5[0].Ytd : 0 )
  return result
}

const getCasaDaily = (array_1,array_2,array_3) => {
    const result = []
    result.push(array_1[0].Amt ? `${(array_1[0].Amt*100).toFixed(2)} %` : 0)
    result.push(array_1[0].Amt ? `${(array_2[0].Amt*100).toFixed(2)} %` : 0)
    result.push(array_1[0].Amt ? `${(array_3[0].Amt*100).toFixed(2)} %` : 0)
    return result
}
const getCasaDailyValue = (array_1,array_2,array_3) => {
  const result = []
  result.push(array_1[0].Amt ? (array_1[0].Amt*100) : 0)
  result.push(array_1[0].Amt ? (array_2[0].Amt*100) : 0)
  result.push(array_1[0].Amt ? (array_3[0].Amt*100) : 0)
  return result
}

const sumArray = (array_1,array_2) => {
  var result = [];
  for(let i = 0; i< array_1.length; i++) {
    result = [...result,array_1[i]+array_2[i]]
  }
  return result
}

  module.exports = {
    generateDateArray : generateDateArray,
    arrayInputDate: arrayInputDate,
    getDataOfDtd: getDataOfDtd,
    getDateOfDtd: getDateOfDtd,
    getContinuousData: getContinuousData,
    getObjectdata: getObjectdata,
    getDataHDVAMT: getDataHDVAMT,
    getDataHDVCKHDTD:getDataHDVCKHDTD,
    getDataHDVCKHMTD: getDataHDVCKHMTD,
    getDataHDVCKHYTD: getDataHDVCKHYTD,
    getCasaDaily:getCasaDaily,
    getCasaDailyValue: getCasaDailyValue,
    getContinuousDataLS:getContinuousDataLS,
    sumArray: sumArray
  }

