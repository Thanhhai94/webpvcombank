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

    console.log(customerUp)

    let data_TT_TD_TN_NH = getFromToDate.getContinuousData(arrayInputDate,TT_TD_TN_NH)
    let data_TT_TD_TN_TDH = getFromToDate.getContinuousData(arrayInputDate,TT_TD_TN_TDH)
    
    let total_TT_TD_TN = getFromToDate.sumArray(data_TT_TD_TN_NH,data_TT_TD_TN_TDH)
    

    return res.render('report_daily_dashboard_TD', {
        pageTitle: 'Dashboard tín dụng',
        staff:staff,
        date:date,
        active: select,
        dateFormat: dateFormat,
        arrayInputDate: JSON.stringify(arrayInputDate),
        total_TT_TD_TN: JSON.stringify(total_TT_TD_TN),
        customerUp: customerUp,
        customerDown: customerDown
    })
}

module.exports = {
    // reportDailyDashboardTD: reportDailyDashboardTD,
    reportDailyDashboardTDSelect: reportDailyDashboardTDSelect
}