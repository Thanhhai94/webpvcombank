function loopArrayGetValueTKTT(array,core) {
    let sum = 0
    array.map(value=> sum = sum + value[core])
    return sum
}

const getTotalTKTT = (array) => {
    let SLTKTT_ytd = loopArrayGetValueTKTT(array,'SLTKTT_ytd')
    let SLTK_EKYC_ytd = loopArrayGetValueTKTT(array,'SLTK_EKYC_ytd')
    let SLTKTT_mtd = loopArrayGetValueTKTT(array,'SLTKTT_mtd')
    let SLTK_EKYC_mtd = loopArrayGetValueTKTT(array,'SLTK_EKYC_mtd')
    let SLTKTT_dtd = loopArrayGetValueTKTT(array,'SLTKTT_dtd')
    let SLTK_EKYC_dtd = loopArrayGetValueTKTT(array,'SLTK_EKYC_dtd')
    const object = {
        SLTKTT_ytd : SLTKTT_ytd,
        SLTK_EKYC_ytd : SLTK_EKYC_ytd,
        SLTKTT_mtd : SLTKTT_mtd,
        SLTK_EKYC_mtd : SLTK_EKYC_mtd,
        SLTKTT_dtd : SLTKTT_dtd,
        SLTK_EKYC_dtd : SLTK_EKYC_dtd,
    }
    return object
    
}

module.exports = {
    getTotalTKTT: getTotalTKTT
}