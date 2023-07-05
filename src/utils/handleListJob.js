function countJob(array, statusJob) {
    let count = 0;
    let arrayCount = []
    array.map(value => {
        if(value.statusJob == statusJob){
            arrayCount.push(value)
        }
    })
    return count = arrayCount.length
    
}
const handleCountStatusJob = (array) => {
    let KQ = {
        total: array.length,
        chuathuchien: countJob(array,'0'),
        thuchien: countJob(array,'1'),
        hoanthanh: countJob(array,'2')
    }
    return KQ
}

const handleTyleStatusJob = (array) => {
    let KQ = {TL_Chuathuchien: 0, TL_thuchien: 0, TL_hoanthanh:0}
    if(array.length > 0) {
        KQ.TL_Chuathuchien = 100*countJob(array,'0')/(array.length)
        KQ.TL_thuchien = 100*countJob(array,'1')/(array.length)
        KQ.TL_hoanthanh = 100*countJob(array,'2')/(array.length)
    }
    return KQ
}

const handleGetListCIF = (array) => {
    let results = []
    array.map(result => {
        results.push(result.CIF_QUANLY)
    })
    return results
}

const getListJobbyCIF = (arrayCIF, arrayJob) => {
    let results = []
    arrayCIF.map(CIF => {
        let result = {}
        result.CIF = CIF
        let array = []
        arrayJob.map(job => {
            if(job.CIF == CIF){
                array.push(job)
            }
        })
        result.chuathuchien = countJob(array,'0'),
        result.thuchien = countJob(array,'1'),
        result.hoanthanh = countJob(array,'2')
        results.push(result)
    }) 
    return results
}


module.exports = {
    handleCountStatusJob:handleCountStatusJob,
    handleTyleStatusJob:handleTyleStatusJob,
    handleGetListCIF:handleGetListCIF,
    getListJobbyCIF:getListJobbyCIF
}