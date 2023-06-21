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


module.exports = {
    handleCountStatusJob:handleCountStatusJob,
    handleTyleStatusJob:handleTyleStatusJob
}