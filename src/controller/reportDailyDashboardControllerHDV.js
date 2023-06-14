import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService";
import getFromToDate from "../utils/getfromtodate"
import getTKTT from "../utils/TKTT"

const reportDailyDashboardHDVSelect = async(req,res) => {
    let ruleReportDaily = req.session.ruleReportDaily
    let titles = ['QUY MÔ CKH','QUY MÔ KKH','TỶ TRỌNG CASA','LÃI SUẤT HĐ CKH', 'HDV ONLINE']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let select = req.params.select
    let Rptdate = date.replaceAll('-','')
    let dateFormat = dayjs(date).format("DD/MM/YYYY")
    let arrayDate = getFromToDate.generateDateArray(date,14)
    let arrayInputDate = getFromToDate.arrayInputDate(arrayDate)

    let formatDate = getFromToDate.formatDate(arrayDate)

    let selectTKTT =[]
    if(select != 'TOAN_HANG') {
        selectTKTT.push(select)
    } else {
        selectTKTT = ['KHCN','KHDN','KHDNL']
    }

    let NHOM_KH = ''

    if(select == "TOAN_HANG" || select == "") {
         NHOM_KH = "TOAN_HANG"
    } else {
         NHOM_KH = "TONG_KHOI"
    }

    let QUY_MO_CKH = await dailyServices.getDataHDVDaily(Rptdate,select,NHOM_KH,'QUY_MO_CKH')
    let QUY_MO_KKH = await dailyServices.getDataHDVDaily(Rptdate,select,NHOM_KH,'QUY_MO_KKH')
    let TY_TRONG_CASA = await dailyServices.getDataHDVDaily(Rptdate,select,NHOM_KH,'TY_TRONG_CASA')
    let LAI_SUAT_CKH = await dailyServices.getDataHDVDaily(Rptdate,select,NHOM_KH,'LAI_SUAT_CKH')
    let HDV_ONLINE = await dailyServices.getDataHDVDaily(Rptdate,select,NHOM_KH,'HDV_ONLINE')

    let HUY_DONG_VON_CKH = await dailyServices.getDataFromToDate(arrayInputDate,select,NHOM_KH,'QUY_MO_CKH')
    let HUY_DONG_VON_KKH = await dailyServices.getDataFromToDate(arrayInputDate,select,NHOM_KH,'QUY_MO_KKH')
    let LAI_SUAT_HD_CKH = await dailyServices.getDataFromToDate(arrayInputDate,select,NHOM_KH,'LAI_SUAT_CKH')
    let LAI_SUAT_HD_KKH = await dailyServices.getDataFromToDate(arrayInputDate,select,NHOM_KH,'LAI_SUAT_KKH')    
    
    let TT_HDV_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_CKH')
    let TT_HDV_CKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_CKH')
    let TT_HDV_CKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_CKH')
    let TT_HDV_CKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    let TT_HDV_CKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_CKH')
    
    let TT_HDV_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_KKH')
    let TT_HDV_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_KKH')
    let TT_HDV_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_KKH')
    let TT_HDV_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_KKH')
    let TT_HDV_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_KKH')
    
    let TT_CASA_KHDNL = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','TY_TRONG_CASA')
    let TT_CASA_KHDN = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','TY_TRONG_CASA')
    let TT_CASA_KHCN = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','TY_TRONG_CASA')

    let TOP_CKH_KHCN_ASC = await dailyServices.getCustomerAsc(Rptdate,'CKH','CN')
    let TOP_CKH_KHCN_DESC = await dailyServices.getCustomerDesc(Rptdate,'CKH','CN')
    let TOP_CKH_KHDN_ASC = await dailyServices.getCustomerAsc(Rptdate,'CKH','DN')
    let TOP_CKH_KHDN_DESC = await dailyServices.getCustomerDesc(Rptdate,'CKH','DN')
    let TOP_KKH_KHCN_ASC = await dailyServices.getCustomerAsc(Rptdate,'KKH','CN')
    let TOP_KKH_KHCN_DESC = await dailyServices.getCustomerDesc(Rptdate,'KKH','CN')
    let TOP_KKH_KHDN_ASC = await dailyServices.getCustomerAsc(Rptdate,'KKH','DN')
    let TOP_KKH_KHDN_DESC = await dailyServices.getCustomerDesc(Rptdate,'KKH','DN')

    let TKTT = await dailyServices.getTTTK(Rptdate,selectTKTT)
    let getDataTKTT = getTKTT.getTotalTKTT(TKTT)

    let data_HUY_DONG_VON_CKH = getFromToDate.getContinuousData(arrayInputDate,HUY_DONG_VON_CKH)
    let data_HUY_DONG_VON_KKH = getFromToDate.getContinuousData(arrayInputDate,HUY_DONG_VON_KKH)
    let data_LAI_SUAT_HD_CKH = getFromToDate.getContinuousDataLS(arrayInputDate,LAI_SUAT_HD_CKH)
    let data_LAI_SUAT_HD_KKH = getFromToDate.getContinuousDataLS(arrayInputDate,LAI_SUAT_HD_KKH)

    let data_QM_CKH = getFromToDate.getDataHDVAMT(TT_HDV_CKH_KHCN_TONGKHOI,TT_HDV_CKH_KHDN_Core,TT_HDV_CKH_KHDN_Upper,TT_HDV_CKH_KHDNL_Non_PVN,TT_HDV_CKH_KHDNL_PVN)
    let data_QM_KKH = getFromToDate.getDataHDVAMT(TT_HDV_KKH_KHCN_TONGKHOI,TT_HDV_KKH_KHDN_Core,TT_HDV_KKH_KHDN_Upper,TT_HDV_KKH_KHDNL_Non_PVN,TT_HDV_KKH_KHDNL_PVN)

    let data_TT_HDV_CKH_DTD = getFromToDate.getDataHDVCKHDTD(TT_HDV_CKH_KHCN_TONGKHOI,TT_HDV_CKH_KHDN_Core,TT_HDV_CKH_KHDN_Upper,TT_HDV_CKH_KHDNL_Non_PVN,TT_HDV_CKH_KHDNL_PVN)
    let data_TT_HDV_CKH_MTD = getFromToDate.getDataHDVCKHMTD(TT_HDV_CKH_KHCN_TONGKHOI,TT_HDV_CKH_KHDN_Core,TT_HDV_CKH_KHDN_Upper,TT_HDV_CKH_KHDNL_Non_PVN,TT_HDV_CKH_KHDNL_PVN)
    let data_TT_HDV_CKH_YTD = getFromToDate.getDataHDVCKHYTD(TT_HDV_CKH_KHCN_TONGKHOI,TT_HDV_CKH_KHDN_Core,TT_HDV_CKH_KHDN_Upper,TT_HDV_CKH_KHDNL_Non_PVN,TT_HDV_CKH_KHDNL_PVN)

    let data_TT_HDV_KKH_DTD = getFromToDate.getDataHDVCKHDTD(TT_HDV_KKH_KHCN_TONGKHOI,TT_HDV_KKH_KHDN_Core,TT_HDV_KKH_KHDN_Upper,TT_HDV_KKH_KHDNL_Non_PVN,TT_HDV_KKH_KHDNL_PVN)
    let data_TT_HDV_KKH_MTD = getFromToDate.getDataHDVCKHMTD(TT_HDV_KKH_KHCN_TONGKHOI,TT_HDV_KKH_KHDN_Core,TT_HDV_KKH_KHDN_Upper,TT_HDV_KKH_KHDNL_Non_PVN,TT_HDV_KKH_KHDNL_PVN)
    let data_TT_HDV_KKH_YTD = getFromToDate.getDataHDVCKHYTD(TT_HDV_KKH_KHCN_TONGKHOI,TT_HDV_KKH_KHDN_Core,TT_HDV_KKH_KHDN_Upper,TT_HDV_KKH_KHDNL_Non_PVN,TT_HDV_KKH_KHDNL_PVN)

    let TT_CASA_categories = getFromToDate.getCasaDaily(TT_CASA_KHDNL,TT_CASA_KHDN,TT_CASA_KHCN)
    let TT_CASA_Value = getFromToDate.getCasaDailyValue(TT_CASA_KHDNL,TT_CASA_KHDN,TT_CASA_KHCN)
    

    return res.render('report_daily_dashboard_HDV', {
        ruleReportDaily: ruleReportDaily,
        active_menu_left: 'HDV',
        pageTitle: 'Dashboard HDV',
        titles: titles,
        staff:staff,
        date:date,
        active: select,
        dateFormat: dateFormat,
        QUY_MO_CKH : QUY_MO_CKH, 
        QUY_MO_KKH : QUY_MO_KKH,
        TY_TRONG_CASA : TY_TRONG_CASA,
        LAI_SUAT_CKH : LAI_SUAT_CKH,
        HDV_ONLINE: HDV_ONLINE,
        data_HUY_DONG_VON_CKH : JSON.stringify(data_HUY_DONG_VON_CKH),
        data_HUY_DONG_VON_KKH : JSON.stringify(data_HUY_DONG_VON_KKH),
        arrayInputDate : JSON.stringify(formatDate),
        data_TT_HDV_CKH_DTD: JSON.stringify(data_TT_HDV_CKH_DTD),
        data_TT_HDV_CKH_MTD: JSON.stringify(data_TT_HDV_CKH_MTD),
        data_TT_HDV_CKH_YTD: JSON.stringify(data_TT_HDV_CKH_YTD),
        data_TT_HDV_KKH_DTD: JSON.stringify(data_TT_HDV_KKH_DTD),
        data_TT_HDV_KKH_MTD: JSON.stringify(data_TT_HDV_KKH_MTD),
        data_TT_HDV_KKH_YTD: JSON.stringify(data_TT_HDV_KKH_YTD),
        data_QM_CKH: JSON.stringify(data_QM_CKH),
        data_QM_KKH: JSON.stringify(data_QM_KKH),
        TT_CASA_categories : JSON.stringify(TT_CASA_categories),
        TT_CASA_Value : JSON.stringify(TT_CASA_Value),
        data_LAI_SUAT_HD_CKH: JSON.stringify(data_LAI_SUAT_HD_CKH),
        data_LAI_SUAT_HD_KKH: JSON.stringify(data_LAI_SUAT_HD_KKH),
        TOP_CKH_KHCN_ASC : TOP_CKH_KHCN_ASC,
        TOP_CKH_KHCN_DESC : TOP_CKH_KHCN_DESC,
        TOP_CKH_KHDN_ASC : TOP_CKH_KHDN_ASC,
        TOP_CKH_KHDN_DESC : TOP_CKH_KHDN_DESC,
        TOP_KKH_KHCN_ASC : TOP_KKH_KHCN_ASC,
        TOP_KKH_KHCN_DESC : TOP_KKH_KHCN_DESC,
        TOP_KKH_KHDN_ASC : TOP_KKH_KHDN_ASC,
        TOP_KKH_KHDN_DESC : TOP_KKH_KHDN_DESC,
        getDataTKTT: getDataTKTT
    })
}

module.exports = {
    // reportDailyDashboardHDV: reportDailyDashboardHDV,
    reportDailyDashboardHDVSelect: reportDailyDashboardHDVSelect
}