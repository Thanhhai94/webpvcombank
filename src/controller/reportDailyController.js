import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService";
import getfromtodate from "../utils/getfromtodate";
import tableFunc from "../utils/tabelFunc";
import getCustomer from "../utils/getCustomer";

const reportDailyTable = async (req,res) => {
    let yesterday = getfromtodate.getYesterday()
    let titles = ['QUY MÔ HĐV','LÃI SUẤT HĐV','BIÊN ĐỘ CỘNG','%CASA', 'QUY MÔ TD', 'LÃI SUẤT TD']
    let CIF = req.session.CIF
    let ruleReportDaily = req.session.ruleReportDaily
    let staff = await staffServices.getStaffInfo(CIF)
    let date = dayjs(yesterday).format("YYYY-MM-DD")
    let Rptdate = date.replaceAll('-','')
    let dateFormat = dayjs(date).format("DD/MM/YYYY")

    //Data Quy mô KKH
    let data_Quy_Mo_KKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'QUY_MO_KKH')
    // QUY_MO_CKH
    let data_Quy_Mo_CKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'QUY_MO_CKH')
    // LAI_SUAT_KHD
    let data_LAI_SUAT_KKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'LAI_SUAT_KKH')
    // LAI_SUAT_CKH
    let data_LAI_SUAT_CKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'LAI_SUAT_CKH')
    //BIEN_DO_CONG
    let data_BIEN_DO_CONG = await dailyServices.getArrayDataHDVDaily(Rptdate,'BIEN_DO_CONG')
    //SO DU BIEN DO CONG
    let data_SO_DU_BIEN_DO_CONG = await dailyServices.getArrayDataHDVDaily(Rptdate,'SO_DU_BIEN_DO_CONG')

    //TY_TRONG_CASA
    let data_TY_TRONG_CASA = await dailyServices.getArrayDataHDVDaily(Rptdate,'TY_TRONG_CASA')

    //QUY_MO_TIN_DUNG
    let data_QUY_MO_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'QUY_MO_TIN_DUNG_ALM')

    //LAI_SUAT_TIN_DUNG
    let data_LAI_SUAT_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'LAI_SUAT_TIN_DUNG_ALM')

    //GIAI_NGAN
    let data_DU_NO_GIAI_NGAN = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'DU_NO_GIAI_NGAN')
    let data_TY_LE_GIAI_NGAN_UU_DAI = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'TY_LE_GIAI_NGAN_UU_DAI')

    //TAT_TOAN
    let data_DU_NO_TAT_TOAN = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'DU_NO_TAT_TOAN')
    let data_TY_LE_TAT_TOAN_TRUOC_HAN = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'TY_LE_TAT_TOAN_TRUOC_HAN')
    
    //Customer_TD
    let TOP_CANHAN_TANG = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let TOP_CANHAN_GIAM = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)
    let TOP_DOANHNGHIEP_TANG = await dailyServices.getCustomerTDDailyTCDNTang(Rptdate)
    let TOP_DOANHNGHIEP_GIAM = await dailyServices.getCustomerTDDailyTCDNGiam(Rptdate)

    //Customer_HDV
    let KH_HDV_DESC = await dailyServices.getCustomerHDVDesc(Rptdate)
    let KH_HDV_ASC = await dailyServices.getCustomerHDVAsc(Rptdate)
    
    //PS_MOI
    let data_HDV_PS_MOI_DAILY = await dailyServices.getDataFromHDVPSMOIDAILY(Rptdate)
    let HDV_PS_MOI_DAILY_KHDN_6M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDN','1. <6M')
    let HDV_PS_MOI_DAILY_KHDN_612M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDN','2. 6-12M')
    let HDV_PS_MOI_DAILY_KHDN_12M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDN','3. >12M')
    let HDV_PS_MOI_DAILY_KHDNL_6M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDNL','1. <6M')
    let HDV_PS_MOI_DAILY_KHDNL_612M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDNL','2. 6-12M')
    let HDV_PS_MOI_DAILY_KHDNL_12M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDNL','3. >12M')
    

    //TRAI_PHIEU
    let data_TRAI_PHIEU = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','TRAI_PHIEU')
    let data_BAN_NO = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','BAN_NO')
    
    //Cam co
    let CAM_CO_STK_TP = await dailyServices.getArrayDataTDCPBNDaily(Rptdate,'CAM_CO_STK_TP')
    let LS_CAM_CO_STK_TP = await dailyServices.getArrayDataTDCPBNDaily(Rptdate,'LS_CAM_CO_STK_TP')
    
    return res.render('report_daily_table',{
        ruleReportDaily: ruleReportDaily,
        active_menu_left: 'BTH',
        pageTitle: 'Báo cáo ngày',
        titles: titles,
        staff:staff,
        date: date,
        selectedDate: JSON.stringify(date),
        dateFormat: dateFormat,

        //Quy mô
        QUY_MO_KKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'TOAN_HANG','TOAN_HANG'),    
        QUY_MO_KKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHCN','TONG_KHOI'),
        QUY_MO_KKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','TONG_KHOI'),
        QUY_MO_KKH_KHDN_Core : tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Core'),
        QUY_MO_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Upper'),
        QUY_MO_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','TONG_KHOI'),
        QUY_MO_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','Non-PVN'),
        QUY_MO_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','PVN'),
        QUY_MO_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'TOAN_HANG','TOAN_HANG'),
        QUY_MO_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','TONG_KHOI'),
        QUY_MO_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','1. <6M'),
        QUY_MO_CKH_KHCN_612M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','2. 6-12M'),
        QUY_MO_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','3. >12M'),
        QUY_MO_CKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDN','TONG_KHOI'),
        QUY_MO_CKH_KHDN_Core :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDN','Core'),
        QUY_MO_CKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDN','Upper'),
        QUY_MO_CKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDNL','TONG_KHOI'),
        QUY_MO_CKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDNL','PVN'),
        QUY_MO_CKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDNL','Non-PVN'),

        //Lãi suất
        LAI_SUAT_KKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'TOAN_HANG','TOAN_HANG'),    
        LAI_SUAT_KKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHCN','TONG_KHOI'),
        LAI_SUAT_KKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','TONG_KHOI'),
        LAI_SUAT_KKH_KHDN_Core : tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','Core'),
        LAI_SUAT_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','Upper'),
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','TONG_KHOI'),
        LAI_SUAT_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','Non-PVN'),
        LAI_SUAT_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','PVN'),
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'TOAN_HANG','TOAN_HANG'),
        LAI_SUAT_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','TONG_KHOI'),
        LAI_SUAT_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','1. <6M'),
        LAI_SUAT_CKH_KHCN_612M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','2. 6-12M'),
        LAI_SUAT_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','3. >12M'),
        LAI_SUAT_CKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDN','TONG_KHOI'),
        LAI_SUAT_CKH_KHDN_Core :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDN','Core'),
        LAI_SUAT_CKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDN','Upper'),
        LAI_SUAT_CKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDNL','TONG_KHOI'),
        LAI_SUAT_CKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDNL','PVN'),
        LAI_SUAT_CKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDNL','Non-PVN'),

        //Bien do cong
        BIEN_DO_CONG_TOANHANG_TOANHANG:  tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'TOAN_HANG' ,'TOAN_HANG' ,'TOAN_HANG' ),
        BIEN_DO_CONG_KHCN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'TONG_KHOI' ,'TONG_KHOI' ),
        BIEN_DO_CONG_KHCN_Canhan: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN' ,'TONG_NHOM' ),
        BIEN_DO_CONG_KHCN_6M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','1. <6M'  ),
        BIEN_DO_CONG_KHCN_612M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-12M'  ),
        BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','3. >12M' ),
        BIEN_DO_CONG_KHCN_Msme: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TONG_NHOM' ),
        BIEN_DO_CONG_KHCN_Msme_HKD: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'HKD' ),
        BIEN_DO_CONG_KHCN_Msme_TCKT: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TCKT' ),
        BIEN_DO_CONG_KHDN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDN' ,'TONG_KHOI' ,'TONG_KHOI' ),
        BIEN_DO_CONG_KHDN_Core: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDN' ,'Core' ,'TONG_NHOM' ),
        BIEN_DO_CONG_KHDN_Upper: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDN' ,'Upper' ,'TONG_NHOM' ),
        BIEN_DO_CONG_KHDNL_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDNL' ,'TONG_KHOI' ,'TONG_KHOI' ),
        BIEN_DO_CONG_KHDNL_PVN: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDNL' ,'PVN' ,'TONG_NHOM' ),
        BIEN_DO_CONG_KHDNL_Non_PVN: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDNL' ,'Non-PVN' ,'TONG_NHOM' ),

        //So du bien do cong
        SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG:  tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'TOAN_HANG' ,'TOAN_HANG' ,'TOAN_HANG' ),
        SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'TONG_KHOI' ,'TONG_KHOI' ),
        SO_DU_BIEN_DO_CONG_KHCN_Canhan: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN' ,'TONG_NHOM' ),
        SO_DU_BIEN_DO_CONG_KHCN_6M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','1. <6M'  ),
        SO_DU_BIEN_DO_CONG_KHCN_612M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-12M'  ),
        SO_DU_BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','3. >12M' ),
        SO_DU_BIEN_DO_CONG_KHCN_Msme: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TONG_NHOM' ),
        SO_DU_BIEN_DO_CONG_KHCN_Msme_HKD: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'HKD' ),
        SO_DU_BIEN_DO_CONG_KHCN_Msme_TCKT: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TCKT' ),
        SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDN' ,'TONG_KHOI' ,'TONG_KHOI' ),
        SO_DU_BIEN_DO_CONG_KHDN_Core: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDN' ,'Core' ,'TONG_NHOM' ),
        SO_DU_BIEN_DO_CONG_KHDN_Upper: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDN' ,'Upper' ,'TONG_NHOM' ),
        SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDNL' ,'TONG_KHOI' ,'TONG_KHOI' ),
        SO_DU_BIEN_DO_CONG_KHDNL_PVN: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDNL' ,'PVN' ,'TONG_NHOM' ),
        SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDNL' ,'Non-PVN' ,'TONG_NHOM' ),

        //Ty_TRONG_CASA

        TY_TRONG_CASA_TOANHANG_TOANHANG : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'TOAN_HANG','TOAN_HANG'),
        TY_TRONG_CASA_KHCN_TONGKHOI : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'KHCN','TONG_KHOI') ,
        TY_TRONG_CASA_KHDN_TONGKHOI : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'KHDN','TONG_KHOI') ,
        TY_TRONG_CASA_KHDNL_TONGKHOI : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'KHDNL','TONG_KHOI') ,
        
        //QUy_MO_TD
        QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'TOAN_HANG' ,'NH','TOAN_HANG'),
        QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHCN' ,'NH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'NH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'NH' ,'Core'),
        QUY_MO_TIN_DUNG_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'NH' ,'Upper'),
        QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDNL' ,'NH' ,'TONG_KHOI'),

        QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHCN' ,'TDH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'TDH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'TDH' ,'Core'),
        QUY_MO_TIN_DUNG_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'TDH' ,'Upper'),
        QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDNL' ,'TDH' ,'TONG_KHOI'),

        //LS_TD
        LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'TOAN_HANG' ,'NH','TOAN_HANG'),
        LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHCN' ,'NH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'NH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'NH' ,'Core'),
        LAI_SUAT_TIN_DUNG_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'NH' ,'Upper'),
        LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDNL' ,'NH' ,'TONG_KHOI'),

        LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHCN' ,'TDH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'TDH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'TDH' ,'Core'),
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'TDH' ,'Upper'),
        LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDNL' ,'TDH' ,'TONG_KHOI'),
        
        
        //Customer
        TOP_CANHAN_TANG: getCustomer.getListCustomerIncreaseTD(TOP_CANHAN_TANG),
        TOP_CANHAN_GIAM: getCustomer.getListCustomerDecreaseTD(TOP_CANHAN_GIAM),
        TOP_DOANHNGHIEP_TANG : getCustomer.getListCustomerIncreaseTD(TOP_DOANHNGHIEP_TANG),
        TOP_DOANHNGHIEP_GIAM : getCustomer.getListCustomerDecreaseTD(TOP_DOANHNGHIEP_GIAM),

        TOP_CKH_KHCN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'CKH','CN'),
        TOP_CKH_KHCN_DESC : getCustomer.getListCustomerIncrease(KH_HDV_DESC,'CKH','CN'),
        TOP_CKH_KHDN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'CKH','DN'),
        TOP_CKH_KHDN_DESC :getCustomer.getListCustomerIncrease(KH_HDV_DESC,'CKH','DN'),
        TOP_KKH_KHCN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'KKH','CN'),
        TOP_KKH_KHCN_DESC : getCustomer.getListCustomerIncrease(KH_HDV_DESC,'KKH','CN'),
        TOP_KKH_KHDN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'KKH','DN'),
        TOP_KKH_KHDN_DESC : getCustomer.getListCustomerIncrease(KH_HDV_DESC,'KKH','DN'),

        //GIAI NGAN
        DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'TOAN_HANG' ,'NH','TOAN_HANG'),
        DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHCN' ,'NH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'NH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'NH' ,'Core'),
        DU_NO_GIAI_NGAN_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'NH' ,'Upper'),
        DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDNL' ,'NH' ,'TONG_KHOI'),

        DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHCN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'TDH' ,'Core'),
        DU_NO_GIAI_NGAN_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'TDH' ,'Upper'),
        DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDNL' ,'TDH' ,'TONG_KHOI'),

        
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'TOAN_HANG' ,'NH','TOAN_HANG'),
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHCN' ,'NH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'NH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'NH' ,'Core'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'NH' ,'Upper'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDNL' ,'NH' ,'TONG_KHOI'),

        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHCN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'TDH' ,'Core'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'TDH' ,'Upper'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDNL' ,'TDH' ,'TONG_KHOI'),
        
        //Tat toan
        DU_NO_TAT_TOAN_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        DU_NO_TAT_TOAN_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'TOAN_HANG' ,'NH','TOAN_HANG'),
        DU_NO_TAT_TOAN_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHCN' ,'NH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'NH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'NH' ,'Core'),
        DU_NO_TAT_TOAN_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'NH' ,'Upper'),
        DU_NO_TAT_TOAN_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDNL' ,'NH' ,'TONG_KHOI'),

        DU_NO_TAT_TOAN_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        DU_NO_TAT_TOAN_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHCN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'TDH' ,'Core'),
        DU_NO_TAT_TOAN_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'TDH' ,'Upper'),
        DU_NO_TAT_TOAN_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDNL' ,'TDH' ,'TONG_KHOI'),

        
        TY_LE_TAT_TOAN_TRUOC_HAN_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        TY_LE_TAT_TOAN_TRUOC_HAN_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'TOAN_HANG' ,'NH','TOAN_HANG'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHCN' ,'NH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'NH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'NH' ,'Core'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'NH' ,'Upper'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDNL' ,'NH' ,'TONG_KHOI'),

        TY_LE_TAT_TOAN_TRUOC_HAN_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHCN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'TDH' ,'Core'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'TDH' ,'Upper'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDNL' ,'TDH' ,'TONG_KHOI'),
    
        //HDV_PS_MOI_DAILY
        HDV_PS_MOI_DAILY_TOANHANG : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'TOAN_HANG','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_KHCN : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_CANHAN: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','ALL','ALL'),
        HDV_PS_MOI_DAILY_TGBT_TGDC: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','TGBT/TGDC','ALL'),
        HDV_PS_MOI_DAILY_TGBT_TGDC_6M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGBT/TGDC','1. <6M'),
        HDV_PS_MOI_DAILY_TGBT_TGDC_612M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGBT/TGDC','2. 6-12M'),
        HDV_PS_MOI_DAILY_TGBT_TGDC_12M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGBT/TGDC','3. >12M'),
        HDV_PS_MOI_DAILY_TGTLTDK: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','TGTLTDK','ALL'),
        HDV_PS_MOI_DAILY_TGTLTDK_006M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGTLTDK','006M'),
        HDV_PS_MOI_DAILY_TGTLTDK_013M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGTLTDK','013M'),
        HDV_PS_MOI_DAILY_TGTLTDK_024M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGTLTDK','024M'),
        HDV_PS_MOI_DAILY_SP_KHAC: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','SP_KHAC','ALL'),
        HDV_PS_MOI_DAILY_SP_KHAC_6M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','SP_KHAC','1. <6M'),
        HDV_PS_MOI_DAILY_SP_KHAC_612M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','SP_KHAC','2. 6-12M'),
        HDV_PS_MOI_DAILY_SP_KHAC_12M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','SP_KHAC','3. >12M'),
        HDV_PS_MOI_DAILY_mMSE: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','m.MSE','ALL','ALL'),
        HDV_PS_MOI_DAILY_mMSE_TCKT: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','m.MSE','TCKT',undefined),
        HDV_PS_MOI_DAILY_mMSE_HKD: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','m.MSE','HKD',undefined),
        HDV_PS_MOI_DAILY_KHDN : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHDN','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_KHDN_6M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDN_6M),
        HDV_PS_MOI_DAILY_KHDN_612M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDN_612M),
        HDV_PS_MOI_DAILY_KHDN_12M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDN_12M),
        HDV_PS_MOI_DAILY_KHDNL : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHDNL','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_KHDNL_6M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDNL_6M),
        HDV_PS_MOI_DAILY_KHDNL_612M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDNL_612M),
        HDV_PS_MOI_DAILY_KHDNL_12M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDNL_12M),
        

        //TRAI PHIEU BAN NO
        data_TRAI_PHIEU : data_TRAI_PHIEU,
        data_BAN_NO : data_BAN_NO,

        CAM_CO_STK_TP : CAM_CO_STK_TP,
        LS_CAM_CO_STK_TP : LS_CAM_CO_STK_TP,
    })
}

const reportDailyTableSelect = async (req,res) => {
    let titles = ['QUY MÔ HĐV','LÃI SUẤT HĐV','BIÊN ĐỘ CỘNG','%CASA', 'QUY MÔ TD', 'LÃI SUẤT TD']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let Rptdate = date.replaceAll('-','')
    let ruleReportDaily = req.session.ruleReportDaily
    let dateFormat = dayjs(date).format("DD/MM/YYYY")


    //Data Quy mô KKH
    let data_Quy_Mo_KKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'QUY_MO_KKH')
    // QUY_MO_CKH
    let data_Quy_Mo_CKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'QUY_MO_CKH')
    // LAI_SUAT_KHD
    let data_LAI_SUAT_KKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'LAI_SUAT_KKH')
    // LAI_SUAT_CKH
    let data_LAI_SUAT_CKH = await dailyServices.getArrayDataHDVDaily(Rptdate,'LAI_SUAT_CKH')
    //BIEN_DO_CONG
    let data_BIEN_DO_CONG = await dailyServices.getArrayDataHDVDaily(Rptdate,'BIEN_DO_CONG')
    //SO DU BIEN DO CONG
    let data_SO_DU_BIEN_DO_CONG = await dailyServices.getArrayDataHDVDaily(Rptdate,'SO_DU_BIEN_DO_CONG')

    //TY_TRONG_CASA
    let data_TY_TRONG_CASA = await dailyServices.getArrayDataHDVDaily(Rptdate,'TY_TRONG_CASA')

    //QUY_MO_TIN_DUNG
    let data_QUY_MO_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'QUY_MO_TIN_DUNG_ALM')

    //LAI_SUAT_TIN_DUNG
    let data_LAI_SUAT_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'LAI_SUAT_TIN_DUNG_ALM')

    //GIAI_NGAN
    let data_DU_NO_GIAI_NGAN = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'DU_NO_GIAI_NGAN')
    let data_TY_LE_GIAI_NGAN_UU_DAI = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'TY_LE_GIAI_NGAN_UU_DAI')

    //TAT_TOAN
    let data_DU_NO_TAT_TOAN = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'DU_NO_TAT_TOAN')
    let data_TY_LE_TAT_TOAN_TRUOC_HAN = await dailyServices.getDataFromToDateTTGNTable(Rptdate,'TY_LE_TAT_TOAN_TRUOC_HAN')
    
    //Customer_TD
    let TOP_CANHAN_TANG = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let TOP_CANHAN_GIAM = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)
    let TOP_DOANHNGHIEP_TANG = await dailyServices.getCustomerTDDailyTCDNTang(Rptdate)
    let TOP_DOANHNGHIEP_GIAM = await dailyServices.getCustomerTDDailyTCDNGiam(Rptdate)

    //Customer_HDV
    let KH_HDV_DESC = await dailyServices.getCustomerHDVDesc(Rptdate)
    let KH_HDV_ASC = await dailyServices.getCustomerHDVAsc(Rptdate)
    
    //PS_MOI
    let data_HDV_PS_MOI_DAILY = await dailyServices.getDataFromHDVPSMOIDAILY(Rptdate)
    let HDV_PS_MOI_DAILY_KHDN_6M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDN','1. <6M')
    let HDV_PS_MOI_DAILY_KHDN_612M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDN','2. 6-12M')
    let HDV_PS_MOI_DAILY_KHDN_12M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDN','3. >12M')
    let HDV_PS_MOI_DAILY_KHDNL_6M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDNL','1. <6M')
    let HDV_PS_MOI_DAILY_KHDNL_612M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDNL','2. 6-12M')
    let HDV_PS_MOI_DAILY_KHDNL_12M = await dailyServices.getDataFromHDVPSMOIDAILYSPECIAL(Rptdate,'KHDNL','3. >12M')
    

    //TRAI_PHIEU
    let data_TRAI_PHIEU = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','TRAI_PHIEU')
    let data_BAN_NO = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','BAN_NO')
    
    //Cam co
    let CAM_CO_STK_TP = await dailyServices.getArrayDataTDCPBNDaily(Rptdate,'CAM_CO_STK_TP')
    let LS_CAM_CO_STK_TP = await dailyServices.getArrayDataTDCPBNDaily(Rptdate,'LS_CAM_CO_STK_TP')
    
    return res.render('report_daily_table',{
        ruleReportDaily: ruleReportDaily,
        active_menu_left: 'BTH',
        pageTitle: 'Báo cáo ngày',
        titles: titles,
        staff:staff,
        date: date,
        selectedDate: JSON.stringify(date),
        dateFormat: dateFormat,

         //Quy mô
         QUY_MO_KKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'TOAN_HANG','TOAN_HANG'),    
         QUY_MO_KKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHCN','TONG_KHOI'),
         QUY_MO_KKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','TONG_KHOI'),
         QUY_MO_KKH_KHDN_Core : tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Core'),
         QUY_MO_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Upper'),
         QUY_MO_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','TONG_KHOI'),
         QUY_MO_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','Non-PVN'),
         QUY_MO_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','PVN'),
         QUY_MO_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'TOAN_HANG','TOAN_HANG'),
         QUY_MO_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','TONG_KHOI'),
         QUY_MO_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','1. <6M'),
         QUY_MO_CKH_KHCN_612M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','2. 6-12M'),
         QUY_MO_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','3. >12M'),
         QUY_MO_CKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDN','TONG_KHOI'),
         QUY_MO_CKH_KHDN_Core :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDN','Core'),
         QUY_MO_CKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDN','Upper'),
         QUY_MO_CKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDNL','TONG_KHOI'),
         QUY_MO_CKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDNL','PVN'),
         QUY_MO_CKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHDNL','Non-PVN'),
 
         //Lãi suất
         LAI_SUAT_KKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'TOAN_HANG','TOAN_HANG'),    
         LAI_SUAT_KKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHCN','TONG_KHOI'),
         LAI_SUAT_KKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','TONG_KHOI'),
         LAI_SUAT_KKH_KHDN_Core : tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','Core'),
         LAI_SUAT_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','Upper'),
         LAI_SUAT_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','TONG_KHOI'),
         LAI_SUAT_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','Non-PVN'),
         LAI_SUAT_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','PVN'),
         LAI_SUAT_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'TOAN_HANG','TOAN_HANG'),
         LAI_SUAT_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','TONG_KHOI'),
         LAI_SUAT_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','1. <6M'),
         LAI_SUAT_CKH_KHCN_612M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','2. 6-12M'),
         LAI_SUAT_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','3. >12M'),
         LAI_SUAT_CKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDN','TONG_KHOI'),
         LAI_SUAT_CKH_KHDN_Core :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDN','Core'),
         LAI_SUAT_CKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDN','Upper'),
         LAI_SUAT_CKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDNL','TONG_KHOI'),
         LAI_SUAT_CKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDNL','PVN'),
         LAI_SUAT_CKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHDNL','Non-PVN'),
 
         //Bien do cong
         BIEN_DO_CONG_TOANHANG_TOANHANG:  tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'TOAN_HANG' ,'TOAN_HANG' ,'TOAN_HANG' ),
         BIEN_DO_CONG_KHCN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'TONG_KHOI' ,'TONG_KHOI' ),
         BIEN_DO_CONG_KHCN_Canhan: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN' ,'TONG_NHOM' ),
         BIEN_DO_CONG_KHCN_6M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','1. <6M'  ),
         BIEN_DO_CONG_KHCN_612M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-12M'  ),
         BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','3. >12M' ),
         BIEN_DO_CONG_KHCN_Msme: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TONG_NHOM' ),
         BIEN_DO_CONG_KHCN_Msme_HKD: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'HKD' ),
         BIEN_DO_CONG_KHCN_Msme_TCKT: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TCKT' ),
         BIEN_DO_CONG_KHDN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDN' ,'TONG_KHOI' ,'TONG_KHOI' ),
         BIEN_DO_CONG_KHDN_Core: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDN' ,'Core' ,'TONG_NHOM' ),
         BIEN_DO_CONG_KHDN_Upper: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDN' ,'Upper' ,'TONG_NHOM' ),
         BIEN_DO_CONG_KHDNL_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDNL' ,'TONG_KHOI' ,'TONG_KHOI' ),
         BIEN_DO_CONG_KHDNL_PVN: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDNL' ,'PVN' ,'TONG_NHOM' ),
         BIEN_DO_CONG_KHDNL_Non_PVN: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHDNL' ,'Non-PVN' ,'TONG_NHOM' ),
 
         //So du bien do cong
         SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG:  tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'TOAN_HANG' ,'TOAN_HANG' ,'TOAN_HANG' ),
         SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'TONG_KHOI' ,'TONG_KHOI' ),
         SO_DU_BIEN_DO_CONG_KHCN_Canhan: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN' ,'TONG_NHOM' ),
         SO_DU_BIEN_DO_CONG_KHCN_6M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','1. <6M'  ),
         SO_DU_BIEN_DO_CONG_KHCN_612M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-12M'  ),
         SO_DU_BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','3. >12M' ),
         SO_DU_BIEN_DO_CONG_KHCN_Msme: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TONG_NHOM' ),
         SO_DU_BIEN_DO_CONG_KHCN_Msme_HKD: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'HKD' ),
         SO_DU_BIEN_DO_CONG_KHCN_Msme_TCKT: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'m.MSE' ,'TCKT' ),
         SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDN' ,'TONG_KHOI' ,'TONG_KHOI' ),
         SO_DU_BIEN_DO_CONG_KHDN_Core: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDN' ,'Core' ,'TONG_NHOM' ),
         SO_DU_BIEN_DO_CONG_KHDN_Upper: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDN' ,'Upper' ,'TONG_NHOM' ),
         SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDNL' ,'TONG_KHOI' ,'TONG_KHOI' ),
         SO_DU_BIEN_DO_CONG_KHDNL_PVN: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDNL' ,'PVN' ,'TONG_NHOM' ),
         SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHDNL' ,'Non-PVN' ,'TONG_NHOM' ),
 
         //Ty_TRONG_CASA

        TY_TRONG_CASA_TOANHANG_TOANHANG : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'TOAN_HANG','TOAN_HANG'),
        TY_TRONG_CASA_KHCN_TONGKHOI : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'KHCN','TONG_KHOI') ,
        TY_TRONG_CASA_KHDN_TONGKHOI : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'KHDN','TONG_KHOI') ,
        TY_TRONG_CASA_KHDNL_TONGKHOI : tableFunc.getRowDataHDVDaily(data_TY_TRONG_CASA,'KHDNL','TONG_KHOI') ,
        
        //QUy_MO_TD
        QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'TOAN_HANG' ,'NH','TOAN_HANG'),
        QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHCN' ,'NH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'NH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'NH' ,'Core'),
        QUY_MO_TIN_DUNG_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'NH' ,'Upper'),
        QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDNL' ,'NH' ,'TONG_KHOI'),

        QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHCN' ,'TDH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'TDH' ,'TONG_KHOI'),
        QUY_MO_TIN_DUNG_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'TDH' ,'Core'),
        QUY_MO_TIN_DUNG_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDN' ,'TDH' ,'Upper'),
        QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_QUY_MO_TIN_DUNG,'KHDNL' ,'TDH' ,'TONG_KHOI'),

        //LS_TD
        LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'TOAN_HANG' ,'NH','TOAN_HANG'),
        LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHCN' ,'NH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'NH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'NH' ,'Core'),
        LAI_SUAT_TIN_DUNG_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'NH' ,'Upper'),
        LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDNL' ,'NH' ,'TONG_KHOI'),

        LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHCN' ,'TDH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'TDH' ,'TONG_KHOI'),
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'TDH' ,'Core'),
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDN' ,'TDH' ,'Upper'),
        LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_LAI_SUAT_TIN_DUNG,'KHDNL' ,'TDH' ,'TONG_KHOI'),
        
        
        //Customer
        TOP_CANHAN_TANG: getCustomer.getListCustomerIncreaseTD(TOP_CANHAN_TANG),
        TOP_CANHAN_GIAM: getCustomer.getListCustomerDecreaseTD(TOP_CANHAN_GIAM),
        TOP_DOANHNGHIEP_TANG : getCustomer.getListCustomerIncreaseTD(TOP_DOANHNGHIEP_TANG),
        TOP_DOANHNGHIEP_GIAM : getCustomer.getListCustomerDecreaseTD(TOP_DOANHNGHIEP_GIAM),

        TOP_CKH_KHCN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'CKH','CN'),
        TOP_CKH_KHCN_DESC : getCustomer.getListCustomerIncrease(KH_HDV_DESC,'CKH','CN'),
        TOP_CKH_KHDN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'CKH','DN'),
        TOP_CKH_KHDN_DESC :getCustomer.getListCustomerIncrease(KH_HDV_DESC,'CKH','DN'),
        TOP_KKH_KHCN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'KKH','CN'),
        TOP_KKH_KHCN_DESC : getCustomer.getListCustomerIncrease(KH_HDV_DESC,'KKH','CN'),
        TOP_KKH_KHDN_ASC : getCustomer.getListCustomerDecrease(KH_HDV_ASC,'KKH','DN'),
        TOP_KKH_KHDN_DESC : getCustomer.getListCustomerIncrease(KH_HDV_DESC,'KKH','DN'),

        //GIAI NGAN
        DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'TOAN_HANG' ,'NH','TOAN_HANG'),
        DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHCN' ,'NH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'NH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'NH' ,'Core'),
        DU_NO_GIAI_NGAN_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'NH' ,'Upper'),
        DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDNL' ,'NH' ,'TONG_KHOI'),

        DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHCN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_GIAI_NGAN_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'TDH' ,'Core'),
        DU_NO_GIAI_NGAN_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDN' ,'TDH' ,'Upper'),
        DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_GIAI_NGAN,'KHDNL' ,'TDH' ,'TONG_KHOI'),

        
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'TOAN_HANG' ,'NH','TOAN_HANG'),
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHCN' ,'NH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'NH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'NH' ,'Core'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'NH' ,'Upper'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDNL' ,'NH' ,'TONG_KHOI'),

        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHCN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'TDH' ,'Core'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDN' ,'TDH' ,'Upper'),
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_GIAI_NGAN_UU_DAI,'KHDNL' ,'TDH' ,'TONG_KHOI'),
        
        //Tat toan
        DU_NO_TAT_TOAN_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        DU_NO_TAT_TOAN_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'TOAN_HANG' ,'NH','TOAN_HANG'),
        DU_NO_TAT_TOAN_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHCN' ,'NH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'NH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'NH' ,'Core'),
        DU_NO_TAT_TOAN_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'NH' ,'Upper'),
        DU_NO_TAT_TOAN_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDNL' ,'NH' ,'TONG_KHOI'),

        DU_NO_TAT_TOAN_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        DU_NO_TAT_TOAN_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHCN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'TDH' ,'TONG_KHOI'),
        DU_NO_TAT_TOAN_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'TDH' ,'Core'),
        DU_NO_TAT_TOAN_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDN' ,'TDH' ,'Upper'),
        DU_NO_TAT_TOAN_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_DU_NO_TAT_TOAN,'KHDNL' ,'TDH' ,'TONG_KHOI'),

        
        TY_LE_TAT_TOAN_TRUOC_HAN_TOANHANG_TOANHANG_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'TOAN_HANG','TOAN_HANG','TOAN_HANG'),
        
        TY_LE_TAT_TOAN_TRUOC_HAN_TOANHANG_NH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'TOAN_HANG' ,'NH','TOAN_HANG'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHCN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHCN' ,'NH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'NH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_NH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'NH' ,'Core'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_NH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'NH' ,'Upper'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDNL_NH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDNL' ,'NH' ,'TONG_KHOI'),

        TY_LE_TAT_TOAN_TRUOC_HAN_TOANHANG_TDH_TOANHANG : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'TOAN_HANG' ,'TDH','TOAN_HANG'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHCN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHCN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'TDH' ,'TONG_KHOI'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_TDH_Core : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'TDH' ,'Core'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDN_TDH_Upper : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDN' ,'TDH' ,'Upper'),
        TY_LE_TAT_TOAN_TRUOC_HAN_KHDNL_TDH_TONGKHOI : tableFunc.getRowDataTDDaily(data_TY_LE_TAT_TOAN_TRUOC_HAN,'KHDNL' ,'TDH' ,'TONG_KHOI'),
    
        //HDV_PS_MOI_DAILY
        HDV_PS_MOI_DAILY_TOANHANG : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'TOAN_HANG','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_KHCN : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_CANHAN: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','ALL','ALL'),
        HDV_PS_MOI_DAILY_TGBT_TGDC: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','TGBT/TGDC','ALL'),
        HDV_PS_MOI_DAILY_TGBT_TGDC_6M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGBT/TGDC','1. <6M'),
        HDV_PS_MOI_DAILY_TGBT_TGDC_612M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGBT/TGDC','2. 6-12M'),
        HDV_PS_MOI_DAILY_TGBT_TGDC_12M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGBT/TGDC','3. >12M'),
        HDV_PS_MOI_DAILY_TGTLTDK: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','TGTLTDK','ALL'),
        HDV_PS_MOI_DAILY_TGTLTDK_006M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGTLTDK','006M'),
        HDV_PS_MOI_DAILY_TGTLTDK_013M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGTLTDK','013M'),
        HDV_PS_MOI_DAILY_TGTLTDK_024M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','TGTLTDK','024M'),
        HDV_PS_MOI_DAILY_SP_KHAC: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','ALL','SP_KHAC','ALL'),
        HDV_PS_MOI_DAILY_SP_KHAC_6M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','SP_KHAC','1. <6M'),
        HDV_PS_MOI_DAILY_SP_KHAC_612M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','SP_KHAC','2. 6-12M'),
        HDV_PS_MOI_DAILY_SP_KHAC_12M: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','CN','SP_KHAC','3. >12M'),
        HDV_PS_MOI_DAILY_mMSE: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','m.MSE','ALL','ALL'),
        HDV_PS_MOI_DAILY_mMSE_TCKT: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','m.MSE','TCKT',undefined),
        HDV_PS_MOI_DAILY_mMSE_HKD: tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHCN','m.MSE','HKD',undefined),
        HDV_PS_MOI_DAILY_KHDN : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHDN','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_KHDN_6M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDN_6M),
        HDV_PS_MOI_DAILY_KHDN_612M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDN_612M),
        HDV_PS_MOI_DAILY_KHDN_12M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDN_12M),
        HDV_PS_MOI_DAILY_KHDNL : tableFunc.getRowDataHDVPSMOIDAILY(data_HDV_PS_MOI_DAILY,'KHDNL','ALL','ALL','ALL'),
        HDV_PS_MOI_DAILY_KHDNL_6M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDNL_6M),
        HDV_PS_MOI_DAILY_KHDNL_612M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDNL_612M),
        HDV_PS_MOI_DAILY_KHDNL_12M : tableFunc.getRowDataHDVPSMOIDAILYSPECIAL(HDV_PS_MOI_DAILY_KHDNL_12M),
        

        //TRAI PHIEU BAN NO
        data_TRAI_PHIEU : data_TRAI_PHIEU,
        data_BAN_NO : data_BAN_NO,

        CAM_CO_STK_TP : CAM_CO_STK_TP,
        LS_CAM_CO_STK_TP : LS_CAM_CO_STK_TP,
    })
}

module.exports = {
    reportDailyTable: reportDailyTable,
    reportDailyTableSelect: reportDailyTableSelect
}