const getRowDataHDVDaily = (array,KHOI_QL,NHOM_KH) => { 
    let value = {KHOI_QL: KHOI_QL, NHOM_KH: NHOM_KH, Amt: 0,Dtd: 0, Ytd:0, Mtd: 0,Ty_trong: 0}
    array.map(row => {
        if(row.KHOI_QL == KHOI_QL && row.NHOM_KH == NHOM_KH ){
            value.Amt = row.Amt;
            value.Dtd = row.Dtd
            value.Ytd = row.Ytd
            value.Mtd = row.Mtd
            value.Ty_trong = row.Ty_trong
               
    }}) 
    return value
}

const getRowDataHDVDailyBiendo = (array,KHOI_QL,NHOM_KH,NHOM_KH_LV1) => { 
    let value = {KHOI_QL: KHOI_QL, NHOM_KH: NHOM_KH, NHOM_KH_LV1:NHOM_KH_LV1,  Amt: 0,Dtd: 0, Ytd:0, Mtd: 0,Ty_trong: 0}
    array.map(row => {
        if(row.KHOI_QL == KHOI_QL && row.NHOM_KH == NHOM_KH && row.NHOM_KH_LV1 == NHOM_KH_LV1 ){
            value.Amt = row.Amt;
            value.Dtd = row.Dtd
            value.Ytd = row.Ytd
            value.Mtd = row.Mtd
            value.Ty_trong = row.Ty_trong         
    }}) 
    return value
}

module.exports = {
    getRowDataHDVDaily: getRowDataHDVDaily,
    getRowDataHDVDailyBiendo:getRowDataHDVDailyBiendo
}