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

const getYesterday = () => {
  var today = new Date()
  var yesterday = today.setDate(today.getDate()-1)
  var value = new Date(yesterday)
  return value
}

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

const getContinuousDataAmt = (arrayDate,arrayData) => {
  const result = []
    for(let i = 0; i<arrayDate.length; i++){
        let input = 0
        for(let j=0; j<arrayData.length; j++){
            if(arrayDate[i]==arrayData[j].Rptdate.trim()){
                input = arrayData[j].Amt
            }
        }
        result.push(input)
    }
  return result
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
function getArray_KHOIQL_NHOMKH(array,KHOI_QL,NHOM_KH) {
  let results = []
  array.map(result => {
    if(result.KHOI_QL == KHOI_QL && result.NHOM_KH == NHOM_KH){
      results.push(result)
    }})
  return results
}
function getObject_KHOIQL_NHOMKH(array,KHOI_QL,NHOM_KH) {
  function sum(array,core){
    let sum = 0;
    array.map(result=> sum = sum + result[core])
    return sum
  }
  let object = {
    KHOI_QL: KHOI_QL,
    NHOM_KH: NHOM_KH,
    Amt: sum(array,'Amt'),
    Dtd: sum(array,'Dtd'),
    Mtd: sum(array,'Mtd'),
    Ytd: sum(array,'Ytd')
  }
  return object
}
const getTilegiaingan = (array_1,array_2) => {
  var result = [];
  for(let i = 0; i< array_1.length; i++) {
    if(array_1[i] === 0) {
      result.push(array_1[i])
    } else {
      result = [...result,100*array_2[i]/array_1[i]]
    }
  }
  return result
}

const getArrayTT_TD_NKH = (array) => {
  let array_KHCN_TONGKHOI = getArray_KHOIQL_NHOMKH(array,'KHCN','TONG_KHOI')
  let array_KHDN_Core = getArray_KHOIQL_NHOMKH(array,'KHDN','Core')
  let array_KHDN_Upper = getArray_KHOIQL_NHOMKH(array,'KHDN','Upper')
  let array_KHDNL_TONGKHOI = getArray_KHOIQL_NHOMKH(array,'KHDNL','TONG_KHOI')
  let data_KHCN_TONGKHOI = getObject_KHOIQL_NHOMKH(array_KHCN_TONGKHOI,'KHCN','TONG_KHOI')
  let data_KHDN_Core = getObject_KHOIQL_NHOMKH(array_KHDN_Core,'KHDN','Core')
  let data_KHDN_Upper = getObject_KHOIQL_NHOMKH(array_KHDN_Upper,'KHDN','Upper')
  let data_KHDNL_TONGKHOI = getObject_KHOIQL_NHOMKH(array_KHDNL_TONGKHOI,'KHDNL','TONG_KHOI')
  let data = [
    data_KHCN_TONGKHOI,data_KHDN_Core,data_KHDN_Upper,data_KHDNL_TONGKHOI
  ]
  let arrayAmtResult = []
  data.map(result=> {arrayAmtResult.push(result.Amt)})
  let arrayDtdResult = []
  data.map(result=> {arrayDtdResult.push(result.Dtd)})
  let arrayMtdResult = []
  data.map(result=> {arrayMtdResult.push(result.Mtd)})
  let arrayYtdResult = []
  data.map(result=> {arrayYtdResult.push(result.Ytd)})
  let object = {
    Amt: arrayAmtResult,
    Dtd: arrayDtdResult,
    Mtd: arrayMtdResult,
    Ytd: arrayYtdResult
   }
  return object 
}

const sumItemArray = (object, core) => {
  var KQ = 0
  for(let i=0; i< object[core].length; i++) {
    KQ+=object[core][i]
  }
  return KQ
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
    sumArray: sumArray,
    getYesterday: getYesterday,
    getArrayTT_TD_NKH:getArrayTT_TD_NKH,
    getContinuousDataAmt:getContinuousDataAmt,
    getTilegiaingan:getTilegiaingan,
    sumItemArray:sumItemArray
  }



  