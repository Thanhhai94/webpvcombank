import { syncTimeout } from "highcharts"
import db from "../models/index"
const { Op } = require("sequelize")

const getArrayDataHDVDaily = async(Rptdate,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT.findAll({
            where: {
                Rptdate: Rptdate,
                CHI_TIEU: CHI_TIEU  
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

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

const getDataFromToDateKH = async(Rptdate,KHOI_QL,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: {
                    [Op.in]: Rptdate
                  },
                KHOI_QL: KHOI_QL,
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

const getArrayDataTDDaily = async(Rptdate,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: Rptdate,
                CHI_TIEU: CHI_TIEU  
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{}]
        }
    } catch (error) {
        console.log(error)
    }
}

const getArrayDataTDCPBNDaily = async(Rptdate,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: Rptdate,
                CHI_TIEU: CHI_TIEU  
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{Amt: 0, Dtd:0, Mtd: 0, Ytd:0}]
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

const getDataTDByDaily = async(Rptdate,KHOI_QL,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                CHI_TIEU: CHI_TIEU
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                KY_HAN: '',
                NHOM_KH: '',
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

const getDataTDByDailySelect = async(Rptdate,KHOI_QL,CHI_TIEU,NHOM_KH) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                CHI_TIEU: CHI_TIEU,
                NHOM_KH: NHOM_KH
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                KY_HAN: '',
                NHOM_KH: '',
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

const getDataFromToDateTD = async(Rptdate,KHOI_QL,KY_HAN,NHOM_KH,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TD.findAll({
            where: {
                Rptdate: {
                    [Op.in]: Rptdate
                  },
                  KHOI_QL: KHOI_QL,
                  KY_HAN: KY_HAN,
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

const getDataSLHD = async(Rptdate,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TT_GN.findAll({
            where: {
                Rptdate: Rptdate,
                CHI_TIEU: CHI_TIEU
            }
        })
        if(KQ) {
            return KQ
        } else {
            return []
        }
    } catch (error) {
        
    }
}

const getDataFromToDateTTGNTable = async(Rptdate,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TT_GN.findAll({
            where: {
                Rptdate: Rptdate,
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

const getDataFromToDateTTGN = async(Rptdate,KHOI_QL,KY_HAN,NHOM_KH,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT_TT_GN.findAll({
            where: {
                Rptdate: {
                    [Op.in]: Rptdate
                  },
                  KHOI_QL: KHOI_QL,
                  KY_HAN: KY_HAN,
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

const getCustomerTDDailyCNTang = async(Rptdate) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where: {
                Rptdate: Rptdate,
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

const getCustomerAsc = async (Rptdate, KY_HAN, KHOI_QL) => {
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

const getCustomerDesc = async (Rptdate, KY_HAN, KHOI_QL) => {
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

const getTTTK = async(Rptdate,KHOI_QL) => {
    try {
        const KQ = await db.TKTT_Daily.findAll({
            where: {
                Rptdate : Rptdate,
                KHOI_QL: {
                    [Op.in]: KHOI_QL
                  }
            }
        })
        if(KQ) {
            return KQ
        } else {
            return [{}]
        }
    } catch (error) {
        console.log(error)
    }
}

const getDataFromHDVPSMOIDAILY = async(Rptdate) => {
    try {
        const KQ = await db.HDV_PS_MOI_DAILY.findAll({
            where: {
                Rptdate: Rptdate
            }
        })
        if(KQ) {
            return KQ
        }
        else {
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

const getDataFromHDVPSMOIDAILYSPECIAL = async(Rptdate,KHOI_QL,KY_HAN) => {
    try {
        const KQ = await db.HDV_PS_MOI_DAILY.findAll({
            where: {
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                KY_HAN: KY_HAN
            }
        })
        if(KQ) {
            return KQ
        }
        else {
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

const getCustomerTDDashboardDesc = async (Rptdate, KHOI_QL) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where : {
                Rptdate: Rptdate,
                KHOI_QL: {
                    [Op.in]: KHOI_QL
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

const getCustomerTDDashboardAsc = async (Rptdate, KHOI_QL) => {
    try {
        const KQ = await db.Report_TD_Customer_Daily.findAll({
            where : {
                Rptdate: Rptdate,
                KHOI_QL: {
                    [Op.in]: KHOI_QL
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

const getCustomerHDVDesc = async(Rptdate) => {
    try {
        const KQ = await db.Report_HDV_Customer_Daily.findAll({
            where : {
                Rptdate: Rptdate,
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

const getCustomerHDVAsc = async(Rptdate) => {
    try {
        const KQ = await db.Report_HDV_Customer_Daily.findAll({
            where : {
                Rptdate: Rptdate,
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

const getLSHDDH = async() => {
    try {
        const KQ = await db.LSHD_DINH_HUONG.findAll({
        })
        if(KQ.length) {
            return KQ
        } else {
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getArrayDataHDVDaily:getArrayDataHDVDaily,
    getDataHDVDaily: getDataHDVDaily,
    getDataTDDaily: getDataTDDaily,
    getCustomerTDDailyCNTang: getCustomerTDDailyCNTang,
    getCustomerTDDailyCNGiam: getCustomerTDDailyCNGiam,
    getCustomerTDDailyTCDNTang: getCustomerTDDailyTCDNTang,
    getCustomerTDDailyTCDNGiam:getCustomerTDDailyTCDNGiam,
    getCustomerAsc: getCustomerAsc,
    getCustomerDesc : getCustomerDesc,
    getDataFromToDate: getDataFromToDate,
    getDataFromToDateTD:getDataFromToDateTD,
    getArrayDataTDDaily:getArrayDataTDDaily,
    getTTTK: getTTTK,
    getDataFromToDateTTGN:getDataFromToDateTTGN,
    getDataFromHDVPSMOIDAILY:getDataFromHDVPSMOIDAILY,
    getDataFromHDVPSMOIDAILYSPECIAL:getDataFromHDVPSMOIDAILYSPECIAL,
    getDataFromToDateTTGNTable:getDataFromToDateTTGNTable,
    getDataFromToDateKH:getDataFromToDateKH,
    getDataTDByDaily: getDataTDByDaily,
    getDataSLHD:getDataSLHD,
    getCustomerTDDashboardDesc:getCustomerTDDashboardDesc,
    getCustomerTDDashboardAsc: getCustomerTDDashboardAsc,
    getDataTDByDailySelect:getDataTDByDailySelect,
    getArrayDataTDCPBNDaily:getArrayDataTDCPBNDaily,
    getCustomerHDVDesc:getCustomerHDVDesc,
    getCustomerHDVAsc:getCustomerHDVAsc,
    getLSHDDH:getLSHDDH
}




























      