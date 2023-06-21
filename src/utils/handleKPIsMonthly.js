const getArrayNHOMCHITIEU = (array) => {
    const KQ = []
    array.map(value => KQ.push(value.NHOM_CHI_TIEU))
    return KQ
}

const getArrayLOAI = (array) => {
    const KQ = []
    array.map(value => KQ.push(value.LOAI))
    return KQ
}

module.exports = {
    getArrayNHOMCHITIEU : getArrayNHOMCHITIEU,
    getArrayLOAI:getArrayLOAI
}