const handleLSHDDHL12M = (array, KHOI_QL, Rptdate) => {
    let KQ = 0
    array.map(value => {
        if(value.KHOI_QL == KHOI_QL && Rptdate <= value.To_Date && Rptdate >= value.From_Date){
            KQ = value.Amt_L_12M
        }
    })
    return KQ
}

const handleLSHDDHG12M = (array, KHOI_QL, Rptdate) => {
    let KQ = 0
    array.map(value => {
        if(value.KHOI_QL == KHOI_QL && Rptdate <= value.To_Date && Rptdate >= value.From_Date){
            KQ = value.Amt_G_12M
        }
    })
    return KQ
}

const handlerResult = (array,KHOI_QL,Rptdate) => {
    let KQ1 = (handleLSHDDHL12M(array,KHOI_QL,Rptdate)*100).toFixed(2)
    let KQ2 = (handleLSHDDHG12M(array,KHOI_QL,Rptdate)*100).toFixed(2)

    let KQ = `<p style="margin:0;background-color: white">[&le;12M] ${KQ1}% <br> [&ge; 12M] ${KQ2}%</p>`
    return KQ

}

module.exports = {
    handleLSHDDHL12M: handleLSHDDHL12M,
    handlerResult:handlerResult
}

