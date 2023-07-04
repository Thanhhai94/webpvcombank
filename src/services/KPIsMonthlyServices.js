import db from "../models/index"
import Sequelize from "sequelize"
const { Op } = require("sequelize")

const getAllListKPI = async(KHOI_QL,NHOM_KH,arrayMonth) => {
    try {
        const KQ = await db.KPIs_MONTHLY.findAll({
            where: {
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                Rptdate: {
                    [Op.in]: arrayMonth
                  } 
            },
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

const getListKPI = async(KHOI_QL,NHOM_KH,Rptdate) => {
    try {
        const KQ = await db.KPIs_MONTHLY.findAll({
            where: {
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                Rptdate: Rptdate  
            },
            order: [
                ['CODE_MAP', 'ASC'],
            ],
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

const getListKPI_MTD = async(KHOI_QL,NHOM_KH,Rptdate) => {
    try {
        const KQ = await db.KPIs_MONTHLY_MTD.findAll({
            where: {
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                Rptdate: Rptdate  
            },
            order: [
                ['CODE_MAP', 'ASC'],
            ],
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

const getDistinctNhomChiTieu = async(KHOI_QL,NHOM_KH,Rptdate) => {
    try {
        const KQ = await db.KPIs_MONTHLY.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('NHOM_CHI_TIEU')) ,'NHOM_CHI_TIEU'],
            ],
            where: {
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                Rptdate: Rptdate ,
                NHOM_CHI_TIEU : {
                    [Op.ne]: null
                }
            },
            order: [
                ['NHOM_CHI_TIEU', 'DESC'],
            ],
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

const getDistinctLoai = async(KHOI_QL,NHOM_KH,Rptdate,NHOM_CHI_TIEU) => {
    try {
        const KQ = await db.KPIs_MONTHLY.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('CODE_LOAI_CHI_TIEU')) ,'CODE_LOAI_CHI_TIEU'],
            ],
            where: {
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                Rptdate: Rptdate,
                NHOM_CHI_TIEU: NHOM_CHI_TIEU  
            },
            order: [
                ['CODE_LOAI_CHI_TIEU', 'ASC'],
            ],
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
    getAllListKPI:getAllListKPI,
    getDistinctNhomChiTieu: getDistinctNhomChiTieu,
    getDistinctLoai: getDistinctLoai,
    getListKPI:getListKPI,
    getListKPI_MTD:getListKPI_MTD
}




























      