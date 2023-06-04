import { syncTimeout } from "highcharts"
import db from "../models/index"
const { Op } = require("sequelize")

const getDataHDVDaily = async(Rptdate,KHOI_QL,NHOM_KH,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT.findAll({
            where: {
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
                
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU,
                Amt: '',
                Dtd: '',
                Mtd: '',
                Ytd: '',
                Ty_trong:''
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getDataFromToDate = async(Rptdate,KHOI_QL,NHOM_KH,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT.findAll({
            where: {
                Rptdate: {
                    [Op.in]: Rptdate
                  },
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU
            },
            order: [['Rptdate', 'ASC']]
        })
        if(KQ) {
            return KQ
        } else {
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

const getDataTDDaily = async(Rptdate,KHOI_QL,KY_HAN,NHOM_KH,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                KY_HAN: KY_HAN,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                KY_HAN: KY_HAN,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU,
                Amt: '',
                Dtd: '',
                Mtd: '',
                Ytd: '',
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getCustomerTDDailyCNTang = async(Rptdate) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where: {
                Rptdate: Rptdate,
                NOTE: {
                    [Op.in]: ['PS_TANG','PS_MOI']
                  },
                KHOI_QL: 'KHCN',
            },
            order: [['DIFF', 'DESC']]
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}


const getCustomerTDDailyCNGiam = async(Rptdate) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where: {
                Rptdate: Rptdate,
                NOTE: 'PS_GIAM',
                KHOI_QL: 'KHCN',
            },
            order: [['DIFF', 'ASC']]
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getCustomerTDDailyTCDNTang = async(Rptdate) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where: {
                Rptdate: Rptdate,
                NOTE: {
                    [Op.in]: ['PS_TANG','PS_MOI']
                  },
                KHOI_QL: {
                    [Op.in]: ['KHDN','KHDNL']
                  }
            },
            order: [['DIFF', 'DESC']]
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getCustomerTDDailyTCDNGiam = async(Rptdate) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where: {
                Rptdate: Rptdate,
                NOTE: 'PS_GIAM',
                KHOI_QL: {
                    [Op.in]: ['KHDN','KHDNL']
                  }
            },
            order: [['DIFF', 'ASC']]
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}

const getCostumerAsc = async (Rptdate, KY_HAN, KHOI_QL) => {
    try {
        const KQ = await db.Report_HDV_Customer_Daily.findAll({
            where : {
                Rptdate: Rptdate,
                KY_HAN: KY_HAN,
                KHOI_QL: KHOI_QL
            },
            order: [['DIFF', 'ASC']]
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
            }]
        }
        
    } catch (error) {
       console.log(error) 
    }
}

const getCostumerDesc = async (Rptdate, KY_HAN, KHOI_QL) => {
    try {
        const KQ = await db.Report_HDV_Customer_Daily.findAll({
            where : {
                Rptdate: Rptdate,
                KY_HAN: KY_HAN,
                KHOI_QL: KHOI_QL
            },
            order: [['DIFF', 'DESC']]
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
            }]
        }
        
    } catch (error) {
       console.log(error) 
    }
}





module.exports = {
    getDataHDVDaily: getDataHDVDaily,
    getDataTDDaily: getDataTDDaily,
    getCustomerTDDailyCNTang: getCustomerTDDailyCNTang,
    getCustomerTDDailyCNGiam: getCustomerTDDailyCNGiam,
    getCustomerTDDailyTCDNTang: getCustomerTDDailyTCDNTang,
    getCustomerTDDailyTCDNGiam:getCustomerTDDailyTCDNGiam,
    getCostumerAsc: getCostumerAsc,
    getCostumerDesc : getCostumerDesc,
    getDataFromToDate: getDataFromToDate
}