import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService";
import getFromToDate from "../utils/getfromtodate"


// const reportDailyDashboardTD = async(req,res) => {
//     let CIF = req.session.CIF
//     let staff = await staffServices.getStaffInfo(CIF)
//     let date = dayjs(new Date()).format("YYYY-MM-DD")
//     let Rptdate = date.replaceAll('-','')
//     let dateFormat = dayjs(date).format("DD/MM/YYYY")
//     let arrayDate = getFromToDate.generateDateArray(date,14)
//     let arrayInputDate = getFromToDate.arrayInputDate(arrayDate)

//     return res.render('report_daily_dashboard_TD', {
//         active: 'TOAN_HANG',
//         pageTitle: 'Dashboard tín dụng',
//         titles: titles,
//         staff:staff,
//         date:date,
//         dateFormat: dateFormat,
//     })
// }

const reportDailyDashboardTDSelect = async(req,res) => {
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let select = req.params.select
    let Rptdate = date.replaceAll('-','')
    let dateFormat = dayjs(date).format("DD/MM/YYYY")
    let arrayDate = getFromToDate.generateDateArray(date,14)
    let arrayInputDate = getFromToDate.arrayInputDate(arrayDate)
   
    let NHOM_KH = ''
    if(select == "TOAN_HANG" || select == "") {
         NHOM_KH = "TOAN_HANG"
    } else {
         NHOM_KH = "TONG_KHOI"
    }

    let TT_TD_TN_NH = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'NH',NHOM_KH,'QUY_MO_TIN_DUNG')    //tăng trưởng tt ngắn hạn theo ngày
    let TT_TD_TN_TDH = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'TDH',NHOM_KH,'QUY_MO_TIN_DUNG')    //tăng trưởng tt trung dìa hạn theo ngày
    
    let customerUp = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let customerDown = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)

    let arrayData_QUY_MO_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'QUY_MO_TIN_DUNG')

    let DU_NO_GIAI_NGAN_NH = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'NH',NHOM_KH,'DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_TDH = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'TDH',NHOM_KH,'DU_NO_GIAI_NGAN')

    let DU_NO_GIAI_NGAN_NH_UU_DAI = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'NH',NHOM_KH,'DU_NO_GIAI_NGAN_UU_DAI')
    let DU_NO_GIAI_NGAN_TDH_UU_DAI = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'TDH',NHOM_KH,'DU_NO_GIAI_NGAN_UU_DAI')

    let data_TD_NHOMKH = getFromToDate.getArrayTT_TD_NKH(arrayData_QUY_MO_TIN_DUNG)

    let data_TT_TD_TN_NH = getFromToDate.getContinuousData(arrayInputDate,TT_TD_TN_NH)
    let data_TT_TD_TN_TDH = getFromToDate.getContinuousData(arrayInputDate,TT_TD_TN_TDH)
    
    let data_DU_NO_GIAI_NGAN_NH = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_NH)
    let data_DU_NO_GIAI_NGAN_TDH = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_TDH)

    let data_DU_NO_GIAI_NGAN_NH_UU_DAI = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_NH_UU_DAI)
    let data_DU_NO_GIAI_NGAN_TDH_UU_DAI = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_TDH_UU_DAI)

    let total_TT_TD_TN = getFromToDate.sumArray(data_TT_TD_TN_NH,data_TT_TD_TN_TDH)
    let total_DU_NO_GIAI_NGAN = getFromToDate.sumArray(data_DU_NO_GIAI_NGAN_NH, data_DU_NO_GIAI_NGAN_TDH)
    let total_DU_NO_GIAI_NGAN_UU_DAI = getFromToDate.sumArray(data_DU_NO_GIAI_NGAN_NH_UU_DAI, data_DU_NO_GIAI_NGAN_TDH_UU_DAI)

    let ti_le_giai_ngan_uu_dai = getFromToDate.getTilegiaingan(total_DU_NO_GIAI_NGAN,total_DU_NO_GIAI_NGAN_UU_DAI)



    return res.render('report_daily_dashboard_TD', {
        pageTitle: 'Dashboard tín dụng',
        staff:staff,
        date:date,
        active: select,
        dateFormat: dateFormat,
        arrayInputDate: JSON.stringify(arrayInputDate),
        total_TT_TD_TN: JSON.stringify(total_TT_TD_TN),
        customerUp: customerUp,
        customerDown: customerDown,
        data_TD_NHOMKH: JSON.stringify(data_TD_NHOMKH),
        total_DU_NO_GIAI_NGAN: JSON.stringify(total_DU_NO_GIAI_NGAN),
        Tong_giai_ngan : total_DU_NO_GIAI_NGAN[total_DU_NO_GIAI_NGAN.length-1],
        Tong_giai_ngan_uu_dai : total_DU_NO_GIAI_NGAN_UU_DAI[total_DU_NO_GIAI_NGAN_UU_DAI.length-1],
        ti_le_giai_ngan_uu_dai: JSON.stringify(ti_le_giai_ngan_uu_dai),
        QMTD_Amt: getFromToDate.sumItemArray(data_TD_NHOMKH,'Amt'),
        QMTD_Dtd: getFromToDate.sumItemArray(data_TD_NHOMKH,'Dtd'),
        QMTD_Mtd: getFromToDate.sumItemArray(data_TD_NHOMKH,'Mtd'),
        QMTD_Ytd: getFromToDate.sumItemArray(data_TD_NHOMKH,'Ytd')
    })
}

module.exports = {
    // reportDailyDashboardTD: reportDailyDashboardTD,
    reportDailyDashboardTDSelect: reportDailyDashboardTDSelect
}