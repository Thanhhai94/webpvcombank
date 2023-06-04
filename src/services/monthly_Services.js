import db from "../models/index";
import dayjs from 'dayjs';
const { Op } = require("sequelize")



const getAll_QM_TD_BINHQUAN = async () => {
    try {
        const All_QM_TD_BINHQUAN = await db.QM_TD_BQ.findAll({
            raw: true
        });
        if(All_QM_TD_BINHQUAN) {
            return All_QM_TD_BINHQUAN
        } else {
            console.log('fail')
        }
    } catch (error) {
        console.log(error)
    }
}

const get_KY_QM_TD_BINHQUAN = async (dateSelected) => {
    try {
        const KY_QM_TD_BINHQUAN = await db.QM_TD_BQ.findAll({
            where: {RPT_DATE: dateSelected},
            raw: true
        });
        if(KY_QM_TD_BINHQUAN) {
            return KY_QM_TD_BINHQUAN
        } else {
            console.log('fail')
        }
    } catch (error) {
        console.log(error)
    }
}



const get_LS_CV_BINHQUAN_TT  = async (array, KHOIQL) => {
    try {
        const KQ = await db.LS_CV_BINHQUAN_TT_MONTHLY.findAll({
            where: {
                NHOM_KH: 'ALL',
                KHOI_QL: KHOIQL ,
                RPT_DATE: {
                  [Op.in]: array
                }
              },
              order: [['RPT_DATE', 'ASC']]
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

module.exports = {
    getAll_QM_TD_BINHQUAN: getAll_QM_TD_BINHQUAN,
    get_KY_QM_TD_BINHQUAN: get_KY_QM_TD_BINHQUAN,
    get_LS_CV_BINHQUAN_TT: get_LS_CV_BINHQUAN_TT
}