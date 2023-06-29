const getArrayNHOMCHITIEU = (array) => {
    const KQ = []
    array.map(value => KQ.push(value.NHOM_CHI_TIEU))
    return KQ
}

const getArrayLOAI = (array) => {
    const KQ = []
    array.map(value => KQ.push(value.CODE_LOAI_CHI_TIEU))
    return KQ
}

module.exports = {
    getArrayNHOMCHITIEU : getArrayNHOMCHITIEU,
    getArrayLOAI:getArrayLOAI
}