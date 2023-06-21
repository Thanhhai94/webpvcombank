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

const getRowDataTDDaily = (array,KHOI_QL,KY_HAN,NHOM_KH) => { 
    let value = {KHOI_QL: KHOI_QL, KY_HAN: KY_HAN, NHOM_KH: NHOM_KH, Amt: 0,Dtd: 0, Ytd:0, Mtd: 0,Ty_trong: 0}
    array.map(row => {
        if(row.KHOI_QL == KHOI_QL && row.NHOM_KH == NHOM_KH && row.KY_HAN == KY_HAN ){
            value.Amt = row.Amt;
            value.Dtd = row.Dtd
            value.Ytd = row.Ytd
            value.Mtd = row.Mtd
            value.Ty_trong = row.Ty_trong
               
    }}) 
    return value
}
const getRowDataHDVPSMOIDAILY = (array,KHOI_QL,NHOM_KH,PRODUCT,KY_HAN) => {
    let value = {Amt: 0,Lai_suat: 0, Lai_suat_max: 0, Amt_bien_do_cong: 0, Lai_suat_bien_do_cong:0,Lai_suat_max_bien_do_cong:0}
    array.map(row => {
        if(row.KHOI_QL == KHOI_QL && row.NHOM_KH == NHOM_KH && row.PRODUCT == PRODUCT && row.KY_HAN == KY_HAN) {
        value.Amt = row.Amt
        value.Lai_suat = row.Lai_suat
        value.Lai_suat_max = row.Lai_suat_max
        value.Amt_bien_do_cong = row.Amt_bien_do_cong
        value.Lai_suat_bien_do_cong = row.Lai_suat_bien_do_cong
        value.Lai_suat_max_bien_do_cong = row.Lai_suat_max_bien_do_cong
}})
    return value
}

const getRowDataHDVPSMOIDAILYSPECIAL = (array) => {
    let value = {Amt: 0,Lai_suat: 0, Lai_suat_max: 0, Amt_bien_do_cong: 0, Lai_suat_bien_do_cong:0,Lai_suat_max_bien_do_cong:0}
    array.map(row => {
        if(array.length>0) {
        value.Amt = row.Amt
        value.Lai_suat = row.Lai_suat
        value.Lai_suat_max = row.Lai_suat_max
        value.Amt_bien_do_cong = row.Amt_bien_do_cong
        value.Lai_suat_bien_do_cong = row.Lai_suat_bien_do_cong
        value.Lai_suat_max_bien_do_cong = row.Lai_suat_max_bien_do_cong
}})

    return value
}

module.exports = {
    getRowDataHDVDaily: getRowDataHDVDaily,
    getRowDataHDVDailyBiendo:getRowDataHDVDailyBiendo,
    getRowDataTDDaily:getRowDataTDDaily,
    getRowDataHDVPSMOIDAILY: getRowDataHDVPSMOIDAILY,
    getRowDataHDVPSMOIDAILYSPECIAL: getRowDataHDVPSMOIDAILYSPECIAL
}