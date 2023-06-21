const getListCustomerIncrease = (array,KY_HAN,KHOI_QL) => {
    let values = []
    array.map(value => {
        if(value.KY_HAN == KY_HAN && value.KHOI_QL == KHOI_QL && value.DIFF > 0 ) {
            values.push(value)
        }
    })
    return values
}

const getListCustomerDecrease = (array,KY_HAN,KHOI_QL) => {
    let values = []
    array.map(value => {
        if(value.KY_HAN == KY_HAN && value.KHOI_QL == KHOI_QL && value.DIFF < 0 ) {
            values.push(value)
        }
    })
    return values
}

const getListCustomerIncreaseTD = (array) => {
    let values = []
    array.map(value => {
        if(value.DIFF > 0 ) {
            values.push(value)
        }
    })
    return values
}

const getListCustomerDecreaseTD = (array) => {
    let values = []
    array.map(value => {
        if(value.DIFF < 0 ) {
            values.push(value)
        }
    })
    return values
}


module.exports = {
    getListCustomerIncrease: getListCustomerIncrease,
    getListCustomerDecrease: getListCustomerDecrease,
    getListCustomerIncreaseTD: getListCustomerIncreaseTD,
    getListCustomerDecreaseTD: getListCustomerDecreaseTD
}