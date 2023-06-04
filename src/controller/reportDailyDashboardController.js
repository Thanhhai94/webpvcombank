import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService";
import getFromToDate from "../utils/getfromtodate"


const reportDailyDashboardHDV = async(req,res) => {
    let titles = ['QUY MÔ CKH','QUY MÔ KKH','TỶ TRỌNG CASA','LÃI SUẤT HĐ CKH', 'HDV ONLINE']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = dayjs(new Date()).format("YYYY-MM-DD")
    let Rptdate = date.replaceAll('-','')
    let dateFormat = dayjs(date).format("DD/MM/YYYY")
    let arrayDate = getFromToDate.generateDateArray(date,15)
    let arrayInputDate = getFromToDate.arrayInputDate(arrayDate)

    let QUY_MO_CKH  = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_CKH')
    let QUY_MO_KKH  = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_KKH')
    let TY_TRONG_CASA  = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TY_TRONG_CASA')
    let LAI_SUAT_CKH  = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_CKH')
    let HUY_DONG_VON_CKH = await dailyServices.getDataFromToDate(arrayInputDate,'TOAN_HANG','TOAN_HANG','QUY_MO_CKH')
  
    console.log(getFromToDate.getDataOfDtd(HUY_DONG_VON_CKH))
    console.log(getFromToDate.getDateOfDtd(HUY_DONG_VON_CKH))
    
    


    return res.render('report_daily_dashboard_HDV', {
        active: 'TOAN_HANG',
        pageTitle: 'Dashboard HDV',
        titles: titles,
        staff:staff,
        date:date,
        dateFormat: dateFormat,
        QUY_MO_CKH :QUY_MO_CKH ,
        QUY_MO_KKH :QUY_MO_KKH ,
        TY_TRONG_CASA :TY_TRONG_CASA ,
        LAI_SUAT_CKH :LAI_SUAT_CKH,
        data_HUY_DONG_VON_CKH : JSON.stringify(getFromToDate.getDataOfDtd(HUY_DONG_VON_CKH)),
        date_HUY_DONG_VON_CKH : JSON.stringify(getFromToDate.getDateOfDtd(HUY_DONG_VON_CKH))
    })
}

const reportDailyDashboardHDVSelect = async(req,res) => {
    let titles = ['QUY MÔ CKH','QUY MÔ KKH','TỶ TRỌNG CASA','LÃI SUẤT HĐ CKH', 'HDV ONLINE']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let select = req.params.select
    console.log('test',select, date)
    let Rptdate = date.replaceAll('-','')
    let dateFormat = dayjs(date).format("DD/MM/YYYY")
    req.session.date = date

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

    return res.render('report_daily_dashboard_HDV', {
        pageTitle: 'Dashboard HDV',
        titles: titles,
        staff:staff,
        date:date,
        active: select,
        dateFormat: dateFormat,
        QUY_MO_CKH : QUY_MO_CKH, 
        QUY_MO_KKH : QUY_MO_KKH,
        TY_TRONG_CASA : TY_TRONG_CASA,
        LAI_SUAT_CKH : LAI_SUAT_CKH
    })
}

module.exports = {
    reportDailyDashboardHDV: reportDailyDashboardHDV,
    reportDailyDashboardHDVSelect: reportDailyDashboardHDVSelect
}