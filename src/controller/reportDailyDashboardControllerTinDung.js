import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService";
import getFromToDate from "../utils/getfromtodate"

const reportDailyDashboardTDSelect = async(req,res) => {
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let select = req.params.select
    let Rptdate = date.replaceAll('-','')
    let dateFormat = dayjs(date).format("DD/MM/YYYY")
    let arrayDate = getFromToDate.generateDateArray(date,14)
    let arrayInputDate = getFromToDate.arrayInputDate(arrayDate)
    
    let formatDate = getFromToDate.formatDate(arrayDate)

    let NHOM_KH = ''
    if(select == "TOAN_HANG" || select == "") {
         NHOM_KH = "TOAN_HANG"
    } else {
         NHOM_KH = "TONG_KHOI"
    }

    let KY_HAN_LS = ''
    if(select == "TOAN_HANG" || select == "") {
        KY_HAN_LS = "TOAN_HANG"
   } else {
        KY_HAN_LS = "TONG_KHOI"
   }    


    let TT_TD_TN_NH = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'NH',NHOM_KH,'QUY_MO_TIN_DUNG')    //tăng trưởng tt ngắn hạn theo ngày
    let TT_TD_TN_TDH = await dailyServices.getDataFromToDateTD(arrayInputDate,select,'TDH',NHOM_KH,'QUY_MO_TIN_DUNG')    //tăng trưởng tt trung dìa hạn theo ngày
    
    let LAI_SUAT_HD = await dailyServices.getDataFromToDateTD(arrayInputDate,select,KY_HAN_LS,NHOM_KH,'LAI_SUAT_TIN_DUNG')
    let customerUp = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let customerDown = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)

    let arrayData_QUY_MO_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'QUY_MO_TIN_DUNG')

    // GIAI NGAN TAT TOAN
    let DU_NO_GIAI_NGAN_NH = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'NH',NHOM_KH,'DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_TDH = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'TDH',NHOM_KH,'DU_NO_GIAI_NGAN')

    let DU_NO_GIAI_NGAN_NH_UU_DAI = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'NH',NHOM_KH,'DU_NO_GIAI_NGAN_UU_DAI')
    let DU_NO_GIAI_NGAN_TDH_UU_DAI = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'TDH',NHOM_KH,'DU_NO_GIAI_NGAN_UU_DAI')

    let DU_NO_TAT_TOAN_NH = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'NH',NHOM_KH,'DU_NO_TAT_TOAN')
    let DU_NO_TAT_TOAN_TDH = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'TDH',NHOM_KH,'DU_NO_TAT_TOAN')

    let DU_NO_TAT_TOAN_NH_TRUOC_HAN = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'NH',NHOM_KH,'DU_NO_TAT_TOAN_TRUOC_HAN')
    let DU_NO_TAT_TOAN_TDH_TRUOC_HAN = await dailyServices.getDataFromToDateTTGN(arrayInputDate,select,'TDH',NHOM_KH,'DU_NO_TAT_TOAN_TRUOC_HAN')
    //

    // let test = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_GIAI_NGAN_NH,'Mtd')
    


    let LAI_SUAT_HD_select = await dailyServices.getDataTDDaily(Rptdate,select,KY_HAN_LS,NHOM_KH,'LAI_SUAT_TIN_DUNG')

    let data_TD_NHOMKH = getFromToDate.getArrayTT_TD_NKH(arrayData_QUY_MO_TIN_DUNG, select)
    let data_TD_NHOMKH_TOANHANG = getFromToDate.getArrayTT_TD_NKH(arrayData_QUY_MO_TIN_DUNG, 'TOAN_HANG')
    

    let data_TT_TD_TN_NH = getFromToDate.getContinuousData(arrayInputDate,TT_TD_TN_NH)
    let data_TT_TD_TN_TDH = getFromToDate.getContinuousData(arrayInputDate,TT_TD_TN_TDH)

    let data_LAI_SUAT_HD = getFromToDate.getContinuousDataLS(arrayInputDate,LAI_SUAT_HD)
    
    let data_DU_NO_GIAI_NGAN_NH = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_NH)
    let data_DU_NO_GIAI_NGAN_TDH = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_TDH)
    let data_DU_NO_GIAI_NGAN_NH_UU_DAI = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_NH_UU_DAI)
    let data_DU_NO_GIAI_NGAN_TDH_UU_DAI = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_GIAI_NGAN_TDH_UU_DAI)

    let data_DU_NO_GIAI_NGAN_NH_Mtd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_GIAI_NGAN_NH,'Mtd')
    let data_DU_NO_GIAI_NGAN_TDH_Mtd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_GIAI_NGAN_TDH,'Mtd')

    let data_DU_NO_GIAI_NGAN_NH_Ytd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_GIAI_NGAN_NH,'Ytd')
    let data_DU_NO_GIAI_NGAN_TDH_Ytd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_GIAI_NGAN_TDH,'Ytd')

    let total_TT_TD_TN = getFromToDate.sumArray(data_TT_TD_TN_NH,data_TT_TD_TN_TDH)
    let total_DU_NO_GIAI_NGAN = getFromToDate.sumArray(data_DU_NO_GIAI_NGAN_NH, data_DU_NO_GIAI_NGAN_TDH)
    let total_DU_NO_GIAI_NGAN_UU_DAI = getFromToDate.sumArray(data_DU_NO_GIAI_NGAN_NH_UU_DAI, data_DU_NO_GIAI_NGAN_TDH_UU_DAI)
    let total_DU_NO_GIAI_NGAN_Mtd = getFromToDate.sumArray(data_DU_NO_GIAI_NGAN_NH_Mtd, data_DU_NO_GIAI_NGAN_TDH_Mtd)
    let total_DU_NO_GIAI_NGAN_Ytd = getFromToDate.sumArray(data_DU_NO_GIAI_NGAN_NH_Ytd, data_DU_NO_GIAI_NGAN_TDH_Ytd)
    


    let ti_le_giai_ngan_uu_dai = getFromToDate.getTilegiaingan(total_DU_NO_GIAI_NGAN,total_DU_NO_GIAI_NGAN_UU_DAI)

    let data_DU_NO_TAT_TOAN_NH = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_TAT_TOAN_NH)
    let data_DU_NO_TAT_TOAN_TDH = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_TAT_TOAN_TDH)

    let data_DU_NO_TAT_TOAN_NH_Mtd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_TAT_TOAN_NH,'Mtd')
    let data_DU_NO_TAT_TOAN_TDH_Mtd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_TAT_TOAN_TDH,'Mtd')

    let data_DU_NO_TAT_TOAN_NH_Ytd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_TAT_TOAN_NH,'Ytd')
    let data_DU_NO_TAT_TOAN_TDH_Ytd = getFromToDate.getContinuousDataCore(arrayInputDate,DU_NO_TAT_TOAN_TDH,'Ytd')

    let total_DU_NO_TAT_TOAN_Mtd = getFromToDate.sumArray(data_DU_NO_TAT_TOAN_NH_Mtd, data_DU_NO_TAT_TOAN_TDH_Mtd)
    let total_DU_NO_TAT_TOAN_Ytd = getFromToDate.sumArray(data_DU_NO_TAT_TOAN_NH_Ytd, data_DU_NO_TAT_TOAN_TDH_Ytd)

    let data_DU_NO_TAT_TOAN_NH_TRUOC_HAN = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_TAT_TOAN_NH_TRUOC_HAN)
    let data_DU_NO_TAT_TOAN_TDH_TRUOC_HAN = getFromToDate.getContinuousDataAmt(arrayInputDate,DU_NO_TAT_TOAN_TDH_TRUOC_HAN)

    let total_DU_NO_TAT_TOAN = getFromToDate.sumArray(data_DU_NO_TAT_TOAN_NH, data_DU_NO_TAT_TOAN_TDH)
    let total_DU_NO_TAT_TOAN_TRUOC_HAN = getFromToDate.sumArray(data_DU_NO_TAT_TOAN_NH_TRUOC_HAN, data_DU_NO_TAT_TOAN_TDH_TRUOC_HAN)
    let ti_le_tat_toan_truoc_han = getFromToDate.getTilegiaingan(total_DU_NO_TAT_TOAN,total_DU_NO_TAT_TOAN_TRUOC_HAN)

    
    return res.render('report_daily_dashboard_TD', {
        pageTitle: 'Dashboard tín dụng',
        staff:staff,
        date:date,
        active: select,
        dateFormat: dateFormat,
        arrayInputDate: JSON.stringify(formatDate),
        total_TT_TD_TN: JSON.stringify(total_TT_TD_TN),
        customerUp: customerUp,
        customerDown: customerDown,
        data_TD_NHOMKH: JSON.stringify(data_TD_NHOMKH_TOANHANG),
        total_DU_NO_GIAI_NGAN: JSON.stringify(total_DU_NO_GIAI_NGAN),
        Tong_giai_ngan : total_DU_NO_GIAI_NGAN[total_DU_NO_GIAI_NGAN.length-1],
        Tong_giai_ngan_Mtd: total_DU_NO_GIAI_NGAN_Mtd[total_DU_NO_GIAI_NGAN_Mtd.length-1],
        Tong_giai_ngan_Ytd: total_DU_NO_GIAI_NGAN_Ytd[total_DU_NO_GIAI_NGAN_Ytd.length-1],
        Tong_giai_ngan_uu_dai : total_DU_NO_GIAI_NGAN_UU_DAI[total_DU_NO_GIAI_NGAN_UU_DAI.length-1],
        ti_le_giai_ngan_uu_dai: JSON.stringify(ti_le_giai_ngan_uu_dai),
        total_DU_NO_TAT_TOAN: JSON.stringify(total_DU_NO_TAT_TOAN),
        Tong_du_no_tat_toan : total_DU_NO_TAT_TOAN[total_DU_NO_TAT_TOAN.length-1],
        Tong_du_no_tat_toan_uu_dai : total_DU_NO_TAT_TOAN_TRUOC_HAN[total_DU_NO_TAT_TOAN_TRUOC_HAN.length-1],
        Tong_du_no_tat_toan_Mtd : total_DU_NO_TAT_TOAN_Mtd[total_DU_NO_TAT_TOAN_Mtd.length-1],
        Tong_du_no_tat_toan_Ytd : total_DU_NO_TAT_TOAN_Ytd[total_DU_NO_TAT_TOAN_Ytd.length-1],
        ti_le_tat_toan_truoc_han: JSON.stringify(ti_le_tat_toan_truoc_han),
        QMTD_Amt: getFromToDate.sumItemArray(data_TD_NHOMKH,'Amt'),
        QMTD_Dtd: getFromToDate.sumItemArray(data_TD_NHOMKH,'Dtd'),
        QMTD_Mtd: getFromToDate.sumItemArray(data_TD_NHOMKH,'Mtd'),
        QMTD_Ytd: getFromToDate.sumItemArray(data_TD_NHOMKH,'Ytd'),
        data_LAI_SUAT_HD: JSON.stringify(data_LAI_SUAT_HD),
        LAI_SUAT_HD_select : LAI_SUAT_HD_select
    })
}

module.exports = {
    // reportDailyDashboardTD: reportDailyDashboardTD,
    reportDailyDashboardTDSelect: reportDailyDashboardTDSelect
}