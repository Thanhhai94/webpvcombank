import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService"
import getfromtodate from "../utils/getfromtodate";
import tableFunc from "../utils/tabelFunc"

const reportDailyTable = async (req,res) => {
    let yesterday = getfromtodate.getYesterday()
    let titles = ['QUY MÔ HĐV','LÃI SUẤT HĐV','BIÊN ĐỘ CỘNG','%CASA', 'QUY MÔ TD', 'LÃI SUẤT TD']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = dayjs(yesterday).format("YYYY-MM-DD")
    let Rptdate = date.replaceAll('-','')

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
    let data_QUY_MO_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'QUY_MO_TIN_DUNG')

    //LAI_SUAT_TIN_DUNG
    let data_LAI_SUAT_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'LAI_SUAT_TIN_DUNG')

    //GIAI_NGAN
    let data_DU_NO_GIAI_NGAN = await dailyServices.getArrayDataTDDaily(Rptdate,'DU_NO_GIAI_NGAN')
    let data_TY_LE_GIAI_NGAN_UU_DAI = await dailyServices.getArrayDataTDDaily(Rptdate,'TY_LE_GIAI_NGAN_UU_DAI')

    //TAT_TOAN
    let data_DU_NO_TAT_TOAN = await dailyServices.getArrayDataTDDaily(Rptdate,'DU_NO_TAT_TOAN')
    let data_TY_LE_TAT_TOAN_TRUOC_HAN = await dailyServices.getArrayDataTDDaily(Rptdate,'TY_LE_TAT_TOAN_TRUOC_HAN')

    //Customer_TD
    let TOP_CANHAN_TANG = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let TOP_CANHAN_GIAM = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)
    let TOP_DOANHNGHIEP_TANG = await dailyServices.getCustomerTDDailyTCDNTang(Rptdate)
    let TOP_DOANHNGHIEP_GIAM = await dailyServices.getCustomerTDDailyTCDNGiam(Rptdate)

    //Customer_HDV
    let TOP_CKH_KHCN_ASC = await dailyServices.getCustomerAsc(Rptdate,'CKH','CN')
    let TOP_CKH_KHCN_DESC = await dailyServices.getCustomerDesc(Rptdate,'CKH','CN')
    let TOP_CKH_KHDN_ASC = await dailyServices.getCustomerAsc(Rptdate,'CKH','DN')
    let TOP_CKH_KHDN_DESC = await dailyServices.getCustomerDesc(Rptdate,'CKH','DN')
    let TOP_KKH_KHCN_ASC = await dailyServices.getCustomerAsc(Rptdate,'KKH','CN')
    let TOP_KKH_KHCN_DESC = await dailyServices.getCustomerDesc(Rptdate,'KKH','CN')
    let TOP_KKH_KHDN_ASC = await dailyServices.getCustomerAsc(Rptdate,'KKH','DN')
    let TOP_KKH_KHDN_DESC = await dailyServices.getCustomerDesc(Rptdate,'KKH','DN')

    

    

    return res.render('report_daily_table',{
        
        pageTitle: 'Báo cáo ngày',
        titles: titles,
        staff:staff,
        date: date,

        //Quy mô
        QUY_MO_KKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'TOAN_HANG','TOAN_HANG'),    
        QUY_MO_KKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHCN','TONG_KHOI'),
        QUY_MO_KKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','TONG_KHOI'),
        QUY_MO_KKH_KHDN_Core : tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Core'),
        QUY_MO_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Core'),
        QUY_MO_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','TONG_KHOI'),
        QUY_MO_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','Non-PVN'),
        QUY_MO_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','PVN'),
        QUY_MO_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'TOAN_HANG','TOAN_HANG'),
        QUY_MO_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','TONG_KHOI'),
        QUY_MO_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','1. <6M'),
        QUY_MO_CKH_KHCN_6M9M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','2. 6-<9M'),
        QUY_MO_CKH_KHCN_9M12M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','3. 9-<12M'),
        QUY_MO_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','4. >=12M'),
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
        LAI_SUAT_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','Core'),
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','TONG_KHOI'),
        LAI_SUAT_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','Non-PVN'),
        LAI_SUAT_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','PVN'),
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'TOAN_HANG','TOAN_HANG'),
        LAI_SUAT_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','TONG_KHOI'),
        LAI_SUAT_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','1. <6M'),
        LAI_SUAT_CKH_KHCN_6M9M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','2. 6-<9M'),
        LAI_SUAT_CKH_KHCN_9M12M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','3. 9-<12M'),
        LAI_SUAT_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','4. >=12M'),
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
        BIEN_DO_CONG_KHCN_6M9M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-<9M'  ),
        BIEN_DO_CONG_KHCN_9M12M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','3. 9-<12M'  ),
        BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','4. >=12M' ),
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
        SO_DU_BIEN_DO_CONG_KHCN_6M9M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-<9M'  ),
        SO_DU_BIEN_DO_CONG_KHCN_9M12M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','3. 9-<12M'  ),
        SO_DU_BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','4. >=12M' ),
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
        TOP_CANHAN_TANG:TOP_CANHAN_TANG,
        TOP_CANHAN_GIAM: TOP_CANHAN_GIAM,
        TOP_DOANHNGHIEP_TANG : TOP_DOANHNGHIEP_TANG,
        TOP_DOANHNGHIEP_GIAM : TOP_DOANHNGHIEP_GIAM,

        TOP_CKH_KHCN_ASC : TOP_CKH_KHCN_ASC,
        TOP_CKH_KHCN_DESC : TOP_CKH_KHCN_DESC,
        TOP_CKH_KHDN_ASC : TOP_CKH_KHDN_ASC,
        TOP_CKH_KHDN_DESC : TOP_CKH_KHDN_DESC,
        TOP_KKH_KHCN_ASC : TOP_KKH_KHCN_ASC,
        TOP_KKH_KHCN_DESC : TOP_KKH_KHCN_DESC,
        TOP_KKH_KHDN_ASC : TOP_KKH_KHDN_ASC,
        TOP_KKH_KHDN_DESC : TOP_KKH_KHDN_DESC,

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
    })
}

const reportDailyTableSelect = async (req,res) => {
    let titles = ['QUY MÔ HĐV','LÃI SUẤT HĐV','BIÊN ĐỘ CỘNG','%CASA', 'QUY MÔ TD', 'LÃI SUẤT TD']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let Rptdate = date.replaceAll('-','')

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
    //BIEN_DO_CONG
    let data_SO_DU_BIEN_DO_CONG = await dailyServices.getArrayDataHDVDaily(Rptdate,'SO_DU_BIEN_DO_CONG')

    //TY_TRONG_CASA
    let data_TY_TRONG_CASA = await dailyServices.getArrayDataHDVDaily(Rptdate,'TY_TRONG_CASA')

    //QUY_MO_TIN_DUNG_DH
    let data_QUY_MO_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'QUY_MO_TIN_DUNG')

    //LAI_SUAT_TIN_DUNG
    let data_LAI_SUAT_TIN_DUNG = await dailyServices.getArrayDataTDDaily(Rptdate,'LAI_SUAT_TIN_DUNG')
    
    //GIAI_NGAN
    let data_DU_NO_GIAI_NGAN = await dailyServices.getArrayDataTDDaily(Rptdate,'DU_NO_GIAI_NGAN')
    let data_TY_LE_GIAI_NGAN_UU_DAI = await dailyServices.getArrayDataTDDaily(Rptdate,'TY_LE_GIAI_NGAN_UU_DAI')

    //TAT_TOAN
    let data_DU_NO_TAT_TOAN = await dailyServices.getArrayDataTDDaily(Rptdate,'DU_NO_TAT_TOAN')
    let data_TY_LE_TAT_TOAN_TRUOC_HAN = await dailyServices.getArrayDataTDDaily(Rptdate,'TY_LE_TAT_TOAN_TRUOC_HAN')

    //Customer_TD
    let TOP_CANHAN_TANG = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let TOP_CANHAN_GIAM = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)
    let TOP_DOANHNGHIEP_TANG = await dailyServices.getCustomerTDDailyTCDNTang(Rptdate)
    let TOP_DOANHNGHIEP_GIAM = await dailyServices.getCustomerTDDailyTCDNGiam(Rptdate)

    //Customer_HDV
    let TOP_CKH_KHCN_ASC = await dailyServices.getCustomerAsc(Rptdate,'CKH','CN')
    let TOP_CKH_KHCN_DESC = await dailyServices.getCustomerDesc(Rptdate,'CKH','CN')
    let TOP_CKH_KHDN_ASC = await dailyServices.getCustomerAsc(Rptdate,'CKH','DN')
    let TOP_CKH_KHDN_DESC = await dailyServices.getCustomerDesc(Rptdate,'CKH','DN')
    let TOP_KKH_KHCN_ASC = await dailyServices.getCustomerAsc(Rptdate,'KKH','CN')
    let TOP_KKH_KHCN_DESC = await dailyServices.getCustomerDesc(Rptdate,'KKH','CN')
    let TOP_KKH_KHDN_ASC = await dailyServices.getCustomerAsc(Rptdate,'KKH','DN')
    let TOP_KKH_KHDN_DESC = await dailyServices.getCustomerDesc(Rptdate,'KKH','DN')

    return res.render('report_daily_table',{
        
        pageTitle: 'Báo cáo ngày',
        titles: titles,
        staff:staff,
        date: date,
        //Quy mô
        QUY_MO_KKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'TOAN_HANG','TOAN_HANG'),    
        QUY_MO_KKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHCN','TONG_KHOI'),
        QUY_MO_KKH_KHDN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','TONG_KHOI'),
        QUY_MO_KKH_KHDN_Core : tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Core'),
        QUY_MO_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDN','Core'),
        QUY_MO_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','TONG_KHOI'),
        QUY_MO_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','Non-PVN'),
        QUY_MO_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_KKH,'KHDNL','PVN'),
        QUY_MO_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'TOAN_HANG','TOAN_HANG'),
        QUY_MO_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','TONG_KHOI'),
        QUY_MO_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','1. <6M'),
        QUY_MO_CKH_KHCN_6M9M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','2. 6-<9M'),
        QUY_MO_CKH_KHCN_9M12M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','3. 9-<12M'),
        QUY_MO_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_Quy_Mo_CKH,'KHCN','4. >=12M'),
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
        LAI_SUAT_KKH_KHDN_Upper :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDN','Core'),
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','TONG_KHOI'),
        LAI_SUAT_KKH_KHDNL_Non_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','Non-PVN'),
        LAI_SUAT_KKH_KHDNL_PVN :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_KKH,'KHDNL','PVN'),
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'TOAN_HANG','TOAN_HANG'),
        LAI_SUAT_CKH_KHCN_TONGKHOI :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','TONG_KHOI'),
        LAI_SUAT_CKH_KHCN_6M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','1. <6M'),
        LAI_SUAT_CKH_KHCN_6M9M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','2. 6-<9M'),
        LAI_SUAT_CKH_KHCN_9M12M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','3. 9-<12M'),
        LAI_SUAT_CKH_KHCN_12M :  tableFunc.getRowDataHDVDaily(data_LAI_SUAT_CKH,'KHCN','4. >=12M'),
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
        BIEN_DO_CONG_KHCN_6M9M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-<9M'  ),
        BIEN_DO_CONG_KHCN_9M12M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','3. 9-<12M'  ),
        BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_BIEN_DO_CONG,'KHCN' ,'CN','4. >=12M' ),
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
        SO_DU_BIEN_DO_CONG_KHCN_6M9M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','2. 6-<9M'  ),
        SO_DU_BIEN_DO_CONG_KHCN_9M12M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','3. 9-<12M'  ),
        SO_DU_BIEN_DO_CONG_KHCN_12M: tableFunc.getRowDataHDVDailyBiendo(data_SO_DU_BIEN_DO_CONG,'KHCN' ,'CN','4. >=12M' ),
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
        
        TOP_CANHAN_TANG: TOP_CANHAN_TANG,
        TOP_CANHAN_GIAM: TOP_CANHAN_GIAM,
        TOP_DOANHNGHIEP_TANG : TOP_DOANHNGHIEP_TANG,
        TOP_DOANHNGHIEP_GIAM : TOP_DOANHNGHIEP_GIAM,

        TOP_CKH_KHCN_ASC : TOP_CKH_KHCN_ASC,
        TOP_CKH_KHCN_DESC : TOP_CKH_KHCN_DESC,
        TOP_CKH_KHDN_ASC : TOP_CKH_KHDN_ASC,
        TOP_CKH_KHDN_DESC : TOP_CKH_KHDN_DESC,
        TOP_KKH_KHCN_ASC : TOP_KKH_KHCN_ASC,
        TOP_KKH_KHCN_DESC : TOP_KKH_KHCN_DESC,
        TOP_KKH_KHDN_ASC : TOP_KKH_KHDN_ASC,
        TOP_KKH_KHDN_DESC : TOP_KKH_KHDN_DESC,

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
    })
}

module.exports = {
    reportDailyTable: reportDailyTable,
    reportDailyTableSelect: reportDailyTableSelect
}