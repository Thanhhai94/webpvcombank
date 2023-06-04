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

  module.exports = {
    generateDateArray : generateDateArray,
    arrayInputDate: arrayInputDate,
    getDataOfDtd: getDataOfDtd,
    getDateOfDtd: getDateOfDtd
  }

