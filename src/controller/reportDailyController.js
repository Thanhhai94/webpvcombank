import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService"

const reportDailyTable = async (req,res) => {
    let titles = ['QUY MÔ HĐV','LÃI SUẤT HĐV','BIÊN ĐỘ CỘNG','%CASA', 'QUY MÔ TD', 'LÃI SUẤT TD']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = dayjs(new Date()).format("YYYY-MM-DD")
    let Rptdate = date.replaceAll('-','')
    // QUY_MO_KKH
    let QUY_MO_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_KKH')
    let QUY_MO_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_KKH')
   
    // QUY_MO_CKH
    let QUY_MO_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    
    // LAI_SUAT_KHD
    let LAI_SUAT_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_KKH')
    
    // LAI_SUAT_CKH
    let LAI_SUAT_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')

    //BIEN_DO_CONG
    let BIEN_DO_CONG_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','BIEN_DO_CONG')

    //SO_DU_BIEN_DO_CONG
    let SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','SO_DU_BIEN_DO_CONG')

    //TY_TRONG_CASA
    let TY_TRONG_CASA_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','TY_TRONG_CASA')

    //QUY_MO_TIN_DUNG_DH
    let QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','QUY_MO_TIN_DUNG')

    //QUY_MO_TIN_DUNG_TDH
    let QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','QUY_MO_TIN_DUNG')

    //LAI_SUAT_TIN_DUNG_DH
    let LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','LAI_SUAT_TIN_DUNG')
    
    //LAI_SUAT_TIN_DUNG_TDH
    let LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','LAI_SUAT_TIN_DUNG')
    

    //Customer_TD
    let TOP_CANHAN_TANG = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let TOP_CANHAN_GIAM = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)
    let TOP_DOANHNGHIEP_TANG = await dailyServices.getCustomerTDDailyTCDNTang(Rptdate)
    let TOP_DOANHNGHIEP_GIAM = await dailyServices.getCustomerTDDailyTCDNGiam(Rptdate)

    //Customer_HDV
    let TOP_CKH_KHCN_ASC = await dailyServices.getCostumerAsc(Rptdate,'CKH','CN')
    let TOP_CKH_KHCN_DESC = await dailyServices.getCostumerDesc(Rptdate,'CKH','CN')
    let TOP_CKH_KHDN_ASC = await dailyServices.getCostumerAsc(Rptdate,'CKH','DN')
    let TOP_CKH_KHDN_DESC = await dailyServices.getCostumerDesc(Rptdate,'CKH','DN')
    let TOP_KKH_KHCN_ASC = await dailyServices.getCostumerAsc(Rptdate,'KKH','CN')
    let TOP_KKH_KHCN_DESC = await dailyServices.getCostumerDesc(Rptdate,'KKH','CN')
    let TOP_KKH_KHDN_ASC = await dailyServices.getCostumerAsc(Rptdate,'KKH','DN')
    let TOP_KKH_KHDN_DESC = await dailyServices.getCostumerDesc(Rptdate,'KKH','DN')

    //GIAI_NGAN

    let DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','DU_NO_GIAI_NGAN')

    let DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','DU_NO_GIAI_NGAN')

    let TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','TY_LE_GIAI_NGAN_UU_DAI')

    let TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','TY_LE_GIAI_NGAN_UU_DAI')

    return res.render('report_daily_table',{
        
        pageTitle: 'Báo cáo ngày',
        titles: titles,
        staff:staff,
        date: date,
        QUY_MO_KKH_TOANHANG_TOANHANG :  QUY_MO_KKH_TOANHANG_TOANHANG,    
        QUY_MO_KKH_KHCN_TONGKHOI :  QUY_MO_KKH_KHCN_TONGKHOI,
        QUY_MO_KKH_KHDN_TONGKHOI :  QUY_MO_KKH_KHDN_TONGKHOI,
        QUY_MO_KKH_KHDN_Core : QUY_MO_KKH_KHDN_Core,
        QUY_MO_KKH_KHDN_Upper :  QUY_MO_KKH_KHDN_Upper,
        QUY_MO_KKH_KHDNL_TONGKHOI :  QUY_MO_KKH_KHDNL_TONGKHOI,
        QUY_MO_KKH_KHDNL_Non_PVN :  QUY_MO_KKH_KHDNL_Non_PVN,
        QUY_MO_KKH_KHDNL_PVN :  QUY_MO_KKH_KHDNL_PVN,
        QUY_MO_CKH_TOANHANG_TOANHANG :  QUY_MO_CKH_TOANHANG_TOANHANG,
        QUY_MO_CKH_KHCN_TONGKHOI :  QUY_MO_CKH_KHCN_TONGKHOI,
        QUY_MO_CKH_KHCN_6M :  QUY_MO_CKH_KHCN_6M,
        QUY_MO_CKH_KHCN_6M9M :  QUY_MO_CKH_KHCN_6M9M,
        QUY_MO_CKH_KHCN_9M12M :  QUY_MO_CKH_KHCN_9M12M,
        QUY_MO_CKH_KHCN_12M :  QUY_MO_CKH_KHCN_12M,
        QUY_MO_CKH_KHDN_TONGKHOI :  QUY_MO_CKH_KHDN_TONGKHOI,
        QUY_MO_CKH_KHDN_Core :  QUY_MO_CKH_KHDN_Core,
        QUY_MO_CKH_KHDN_Upper :  QUY_MO_CKH_KHDN_Upper,
        QUY_MO_CKH_KHDNL_TONGKHOI :  QUY_MO_CKH_KHDNL_TONGKHOI,
        QUY_MO_CKH_KHDNL_PVN :  QUY_MO_CKH_KHDNL_PVN,
        QUY_MO_CKH_KHDNL_Non_PVN :  QUY_MO_CKH_KHDNL_Non_PVN,

        LAI_SUAT_KKH_TOANHANG_TOANHANG :  LAI_SUAT_KKH_TOANHANG_TOANHANG,    
        LAI_SUAT_KKH_KHCN_TONGKHOI :  LAI_SUAT_KKH_KHCN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_TONGKHOI :  LAI_SUAT_KKH_KHDN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_Core : LAI_SUAT_KKH_KHDN_Core,
        LAI_SUAT_KKH_KHDN_Upper :  LAI_SUAT_KKH_KHDN_Upper,
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  LAI_SUAT_KKH_KHDNL_TONGKHOI,
        LAI_SUAT_KKH_KHDNL_Non_PVN :  LAI_SUAT_KKH_KHDNL_Non_PVN,
        LAI_SUAT_KKH_KHDNL_PVN :  LAI_SUAT_KKH_KHDNL_PVN,
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  LAI_SUAT_CKH_TOANHANG_TOANHANG,
        LAI_SUAT_CKH_KHCN_TONGKHOI :  LAI_SUAT_CKH_KHCN_TONGKHOI,
        LAI_SUAT_CKH_KHCN_6M :  LAI_SUAT_CKH_KHCN_6M,
        LAI_SUAT_CKH_KHCN_6M9M :  LAI_SUAT_CKH_KHCN_6M9M,
        LAI_SUAT_CKH_KHCN_9M12M :  LAI_SUAT_CKH_KHCN_9M12M,
        LAI_SUAT_CKH_KHCN_12M :  LAI_SUAT_CKH_KHCN_12M,
        LAI_SUAT_CKH_KHDN_TONGKHOI :  LAI_SUAT_CKH_KHDN_TONGKHOI,
        LAI_SUAT_CKH_KHDN_Core :  LAI_SUAT_CKH_KHDN_Core,
        LAI_SUAT_CKH_KHDN_Upper :  LAI_SUAT_CKH_KHDN_Upper,
        LAI_SUAT_CKH_KHDNL_TONGKHOI :  LAI_SUAT_CKH_KHDNL_TONGKHOI,
        LAI_SUAT_CKH_KHDNL_PVN :  LAI_SUAT_CKH_KHDNL_PVN,
        LAI_SUAT_CKH_KHDNL_Non_PVN :  LAI_SUAT_CKH_KHDNL_Non_PVN,

        BIEN_DO_CONG_TOANHANG_TOANHANG: BIEN_DO_CONG_TOANHANG_TOANHANG,
        BIEN_DO_CONG_KHCN_TONGKHOI:BIEN_DO_CONG_KHCN_TONGKHOI,
        BIEN_DO_CONG_KHCN_6M:BIEN_DO_CONG_KHCN_6M,
        BIEN_DO_CONG_KHCN_6M9M: BIEN_DO_CONG_KHCN_6M9M,
        BIEN_DO_CONG_KHCN_9M12M: BIEN_DO_CONG_KHCN_9M12M,
        BIEN_DO_CONG_KHCN_12M: BIEN_DO_CONG_KHCN_12M,
        BIEN_DO_CONG_KHDN_TONGKHOI : BIEN_DO_CONG_KHDN_TONGKHOI,
        BIEN_DO_CONG_KHDN_Core : BIEN_DO_CONG_KHDN_Core,
        BIEN_DO_CONG_KHDN_Upper : BIEN_DO_CONG_KHDN_Upper,
        BIEN_DO_CONG_KHDNL_TONGKHOI : BIEN_DO_CONG_KHDNL_TONGKHOI,
        BIEN_DO_CONG_KHDNL_PVN : BIEN_DO_CONG_KHDNL_PVN,
        BIEN_DO_CONG_KHDNL_Non_PVN : BIEN_DO_CONG_KHDNL_Non_PVN,

        SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG:SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG,
        SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHCN_6M : SO_DU_BIEN_DO_CONG_KHCN_6M,
        SO_DU_BIEN_DO_CONG_KHCN_6M9M : SO_DU_BIEN_DO_CONG_KHCN_6M9M,
        SO_DU_BIEN_DO_CONG_KHCN_9M12M : SO_DU_BIEN_DO_CONG_KHCN_9M12M,
        SO_DU_BIEN_DO_CONG_KHCN_12M : SO_DU_BIEN_DO_CONG_KHCN_12M,
        SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDN_Core : SO_DU_BIEN_DO_CONG_KHDN_Core,
        SO_DU_BIEN_DO_CONG_KHDN_Upper : SO_DU_BIEN_DO_CONG_KHDN_Upper,
        SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDNL_PVN : SO_DU_BIEN_DO_CONG_KHDNL_PVN,
        SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN : SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN,

        TY_TRONG_CASA_TOANHANG_TOANHANG : TY_TRONG_CASA_TOANHANG_TOANHANG,
        TY_TRONG_CASA_KHCN_TONGKHOI : TY_TRONG_CASA_KHCN_TONGKHOI,
        TY_TRONG_CASA_KHDN_TONGKHOI : TY_TRONG_CASA_KHDN_TONGKHOI,
        TY_TRONG_CASA_KHDN_Core : TY_TRONG_CASA_KHDN_Core,
        TY_TRONG_CASA_KHDN_Upper : TY_TRONG_CASA_KHDN_Upper,
        TY_TRONG_CASA_KHDNL_TONGKHOI : TY_TRONG_CASA_KHDNL_TONGKHOI,
        TY_TRONG_CASA_KHDNL_PVN : TY_TRONG_CASA_KHDNL_PVN,
        TY_TRONG_CASA_KHDNL_Non_PVN : TY_TRONG_CASA_KHDNL_Non_PVN,

        QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG,
        QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG : QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG,
        QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI : QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI : QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_NH_Core : QUY_MO_TIN_DUNG_KHDN_NH_Core,
        QUY_MO_TIN_DUNG_KHDN_NH_Upper : QUY_MO_TIN_DUNG_KHDN_NH_Upper,
        QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI : QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDNL_NH_Non_PVN : QUY_MO_TIN_DUNG_KHDNL_NH_Non_PVN,

        QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG : QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG,
        QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI : QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI : QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_TDH_Core : QUY_MO_TIN_DUNG_KHDN_TDH_Core,
        QUY_MO_TIN_DUNG_KHDN_TDH_Upper : QUY_MO_TIN_DUNG_KHDN_TDH_Upper,
        QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI : QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDNL_TDH_Non_PVN : QUY_MO_TIN_DUNG_KHDNL_TDH_Non_PVN,

        LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG,
        LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG : LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG,
        LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_NH_Core : LAI_SUAT_TIN_DUNG_KHDN_NH_Core,
        LAI_SUAT_TIN_DUNG_KHDN_NH_Upper : LAI_SUAT_TIN_DUNG_KHDN_NH_Upper,
        LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDNL_NH_Non_PVN : LAI_SUAT_TIN_DUNG_KHDNL_NH_Non_PVN,

        LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG : LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG,
        LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Core : LAI_SUAT_TIN_DUNG_KHDN_TDH_Core,
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper : LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper,
        LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDNL_TDH_Non_PVN : LAI_SUAT_TIN_DUNG_KHDNL_TDH_Non_PVN,
        
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

        DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG : DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG,
        DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG : DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG,
        DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI : DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI : DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_NH_Core : DU_NO_GIAI_NGAN_KHDN_NH_Core,
        DU_NO_GIAI_NGAN_KHDN_NH_Upper : DU_NO_GIAI_NGAN_KHDN_NH_Upper,
        DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI : DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDNL_NH_Non_PVN : DU_NO_GIAI_NGAN_KHDNL_NH_Non_PVN,
        
        DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG : DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG,
        DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI : DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI : DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_TDH_Core : DU_NO_GIAI_NGAN_KHDN_TDH_Core,
        DU_NO_GIAI_NGAN_KHDN_TDH_Upper : DU_NO_GIAI_NGAN_KHDN_TDH_Upper,
        DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI : DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDNL_TDH_Non_PVN : DU_NO_GIAI_NGAN_KHDNL_TDH_Non_PVN,

        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG : TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG,
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG : TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG,
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core : TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper : TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_Non_PVN : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_Non_PVN,
        
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG : TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG,
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core : TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper : TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_Non_PVN : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_Non_PVN,
    })
}

const reportDailyTableSelect = async (req,res) => {
    let titles = ['QUY MÔ HĐV','LÃI SUẤT HĐV','BIÊN ĐỘ CỘNG','%CASA', 'QUY MÔ TD', 'LÃI SUẤT TD']
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let Rptdate = date.replaceAll('-','')

    // QUY_MO_KKH
    let QUY_MO_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_KKH')
    let QUY_MO_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_KKH')
   
    // QUY_MO_CKH
    let QUY_MO_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    
    // LAI_SUAT_KHD
    let LAI_SUAT_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_KKH')
    
    // LAI_SUAT_CKH
    let LAI_SUAT_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')

    //BIEN_DO_CONG
    let BIEN_DO_CONG_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','BIEN_DO_CONG')

    //SO_DU_BIEN_DO_CONG
    let SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','SO_DU_BIEN_DO_CONG')

    //TY_TRONG_CASA
    let TY_TRONG_CASA_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','TY_TRONG_CASA')
    let TY_TRONG_CASA_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','TY_TRONG_CASA')

    //QUY_MO_TIN_DUNG_DH
    let QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','QUY_MO_TIN_DUNG')

    //QUY_MO_TIN_DUNG_TDH
    let QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','QUY_MO_TIN_DUNG')
    let QUY_MO_TIN_DUNG_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','QUY_MO_TIN_DUNG')

    //LAI_SUAT_TIN_DUNG_DH
    let LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','LAI_SUAT_TIN_DUNG')
    
    //LAI_SUAT_TIN_DUNG_TDH
    let LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','LAI_SUAT_TIN_DUNG')
    let LAI_SUAT_TIN_DUNG_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','LAI_SUAT_TIN_DUNG')
    
    //Customer_TD
    let TOP_CANHAN_TANG = await dailyServices.getCustomerTDDailyCNTang(Rptdate)
    let TOP_CANHAN_GIAM = await dailyServices.getCustomerTDDailyCNGiam(Rptdate)
    let TOP_DOANHNGHIEP_TANG = await dailyServices.getCustomerTDDailyTCDNTang(Rptdate)
    let TOP_DOANHNGHIEP_GIAM = await dailyServices.getCustomerTDDailyTCDNGiam(Rptdate)

    //Customer_HDV
    let TOP_CKH_KHCN_ASC = await dailyServices.getCostumerAsc(Rptdate,'CKH','CN')
    let TOP_CKH_KHCN_DESC = await dailyServices.getCostumerDesc(Rptdate,'CKH','CN')
    let TOP_CKH_KHDN_ASC = await dailyServices.getCostumerAsc(Rptdate,'CKH','DN')
    let TOP_CKH_KHDN_DESC = await dailyServices.getCostumerDesc(Rptdate,'CKH','DN')
    let TOP_KKH_KHCN_ASC = await dailyServices.getCostumerAsc(Rptdate,'KKH','CN')
    let TOP_KKH_KHCN_DESC = await dailyServices.getCostumerDesc(Rptdate,'KKH','CN')
    let TOP_KKH_KHDN_ASC = await dailyServices.getCostumerAsc(Rptdate,'KKH','DN')
    let TOP_KKH_KHDN_DESC = await dailyServices.getCostumerDesc(Rptdate,'KKH','DN')

    //GIAI_NGAN

    let DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','DU_NO_GIAI_NGAN')

    let DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','DU_NO_GIAI_NGAN')
    let DU_NO_GIAI_NGAN_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','DU_NO_GIAI_NGAN')

    let TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TOAN_HANG','TOAN_HANG','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','NH','TOAN_HANG','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','NH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Core','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','NH','Upper','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','NH','Non-PVN','TY_LE_GIAI_NGAN_UU_DAI')

    let TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG = await dailyServices.getDataTDDaily(Rptdate,'TOAN_HANG','TDH','TOAN_HANG','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHCN','TDH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Core','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper = await dailyServices.getDataTDDaily(Rptdate,'KHDN','TDH','Upper','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','TONG_KHOI','TY_LE_GIAI_NGAN_UU_DAI')
    let TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_Non_PVN = await dailyServices.getDataTDDaily(Rptdate,'KHDNL','TDH','Non-PVN','TY_LE_GIAI_NGAN_UU_DAI')

    return res.render('report_daily_table',{
        
        pageTitle: 'Báo cáo ngày',
        titles: titles,
        staff:staff,
        date: date,
        QUY_MO_KKH_TOANHANG_TOANHANG :  QUY_MO_KKH_TOANHANG_TOANHANG,    
        QUY_MO_KKH_KHCN_TONGKHOI :  QUY_MO_KKH_KHCN_TONGKHOI,
        QUY_MO_KKH_KHDN_TONGKHOI :  QUY_MO_KKH_KHDN_TONGKHOI,
        QUY_MO_KKH_KHDN_Core : QUY_MO_KKH_KHDN_Core,
        QUY_MO_KKH_KHDN_Upper :  QUY_MO_KKH_KHDN_Upper,
        QUY_MO_KKH_KHDNL_TONGKHOI :  QUY_MO_KKH_KHDNL_TONGKHOI,
        QUY_MO_KKH_KHDNL_Non_PVN :  QUY_MO_KKH_KHDNL_Non_PVN,
        QUY_MO_KKH_KHDNL_PVN :  QUY_MO_KKH_KHDNL_PVN,
        QUY_MO_CKH_TOANHANG_TOANHANG :  QUY_MO_CKH_TOANHANG_TOANHANG,
        QUY_MO_CKH_KHCN_TONGKHOI :  QUY_MO_CKH_KHCN_TONGKHOI,
        QUY_MO_CKH_KHCN_6M :  QUY_MO_CKH_KHCN_6M,
        QUY_MO_CKH_KHCN_6M9M :  QUY_MO_CKH_KHCN_6M9M,
        QUY_MO_CKH_KHCN_9M12M :  QUY_MO_CKH_KHCN_9M12M,
        QUY_MO_CKH_KHCN_12M :  QUY_MO_CKH_KHCN_12M,
        QUY_MO_CKH_KHDN_TONGKHOI :  QUY_MO_CKH_KHDN_TONGKHOI,
        QUY_MO_CKH_KHDN_Core :  QUY_MO_CKH_KHDN_Core,
        QUY_MO_CKH_KHDN_Upper :  QUY_MO_CKH_KHDN_Upper,
        QUY_MO_CKH_KHDNL_TONGKHOI :  QUY_MO_CKH_KHDNL_TONGKHOI,
        QUY_MO_CKH_KHDNL_PVN :  QUY_MO_CKH_KHDNL_PVN,
        QUY_MO_CKH_KHDNL_Non_PVN :  QUY_MO_CKH_KHDNL_Non_PVN,

        LAI_SUAT_KKH_TOANHANG_TOANHANG :  LAI_SUAT_KKH_TOANHANG_TOANHANG,    
        LAI_SUAT_KKH_KHCN_TONGKHOI :  LAI_SUAT_KKH_KHCN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_TONGKHOI :  LAI_SUAT_KKH_KHDN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_Core : LAI_SUAT_KKH_KHDN_Core,
        LAI_SUAT_KKH_KHDN_Upper :  LAI_SUAT_KKH_KHDN_Upper,
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  LAI_SUAT_KKH_KHDNL_TONGKHOI,
        LAI_SUAT_KKH_KHDNL_Non_PVN :  LAI_SUAT_KKH_KHDNL_Non_PVN,
        LAI_SUAT_KKH_KHDNL_PVN :  LAI_SUAT_KKH_KHDNL_PVN,
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  LAI_SUAT_CKH_TOANHANG_TOANHANG,
        LAI_SUAT_CKH_KHCN_TONGKHOI :  LAI_SUAT_CKH_KHCN_TONGKHOI,
        LAI_SUAT_CKH_KHCN_6M :  LAI_SUAT_CKH_KHCN_6M,
        LAI_SUAT_CKH_KHCN_6M9M :  LAI_SUAT_CKH_KHCN_6M9M,
        LAI_SUAT_CKH_KHCN_9M12M :  LAI_SUAT_CKH_KHCN_9M12M,
        LAI_SUAT_CKH_KHCN_12M :  LAI_SUAT_CKH_KHCN_12M,
        LAI_SUAT_CKH_KHDN_TONGKHOI :  LAI_SUAT_CKH_KHDN_TONGKHOI,
        LAI_SUAT_CKH_KHDN_Core :  LAI_SUAT_CKH_KHDN_Core,
        LAI_SUAT_CKH_KHDN_Upper :  LAI_SUAT_CKH_KHDN_Upper,
        LAI_SUAT_CKH_KHDNL_TONGKHOI :  LAI_SUAT_CKH_KHDNL_TONGKHOI,
        LAI_SUAT_CKH_KHDNL_PVN :  LAI_SUAT_CKH_KHDNL_PVN,
        LAI_SUAT_CKH_KHDNL_Non_PVN :  LAI_SUAT_CKH_KHDNL_Non_PVN,

        BIEN_DO_CONG_TOANHANG_TOANHANG: BIEN_DO_CONG_TOANHANG_TOANHANG,
        BIEN_DO_CONG_KHCN_TONGKHOI:BIEN_DO_CONG_KHCN_TONGKHOI,
        BIEN_DO_CONG_KHCN_6M:BIEN_DO_CONG_KHCN_6M,
        BIEN_DO_CONG_KHCN_6M9M: BIEN_DO_CONG_KHCN_6M9M,
        BIEN_DO_CONG_KHCN_9M12M: BIEN_DO_CONG_KHCN_9M12M,
        BIEN_DO_CONG_KHCN_12M: BIEN_DO_CONG_KHCN_12M,
        BIEN_DO_CONG_KHDN_TONGKHOI : BIEN_DO_CONG_KHDN_TONGKHOI,
        BIEN_DO_CONG_KHDN_Core : BIEN_DO_CONG_KHDN_Core,
        BIEN_DO_CONG_KHDN_Upper : BIEN_DO_CONG_KHDN_Upper,
        BIEN_DO_CONG_KHDNL_TONGKHOI : BIEN_DO_CONG_KHDNL_TONGKHOI,
        BIEN_DO_CONG_KHDNL_PVN : BIEN_DO_CONG_KHDNL_PVN,
        BIEN_DO_CONG_KHDNL_Non_PVN : BIEN_DO_CONG_KHDNL_Non_PVN,

        SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG:SO_DU_BIEN_DO_CONG_TOANHANG_TOANHANG,
        SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHCN_6M : SO_DU_BIEN_DO_CONG_KHCN_6M,
        SO_DU_BIEN_DO_CONG_KHCN_6M9M : SO_DU_BIEN_DO_CONG_KHCN_6M9M,
        SO_DU_BIEN_DO_CONG_KHCN_9M12M : SO_DU_BIEN_DO_CONG_KHCN_9M12M,
        SO_DU_BIEN_DO_CONG_KHCN_12M : SO_DU_BIEN_DO_CONG_KHCN_12M,
        SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDN_Core : SO_DU_BIEN_DO_CONG_KHDN_Core,
        SO_DU_BIEN_DO_CONG_KHDN_Upper : SO_DU_BIEN_DO_CONG_KHDN_Upper,
        SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDNL_PVN : SO_DU_BIEN_DO_CONG_KHDNL_PVN,
        SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN : SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN,

        TY_TRONG_CASA_TOANHANG_TOANHANG : TY_TRONG_CASA_TOANHANG_TOANHANG,
        TY_TRONG_CASA_KHCN_TONGKHOI : TY_TRONG_CASA_KHCN_TONGKHOI,
        TY_TRONG_CASA_KHDN_TONGKHOI : TY_TRONG_CASA_KHDN_TONGKHOI,
        TY_TRONG_CASA_KHDN_Core : TY_TRONG_CASA_KHDN_Core,
        TY_TRONG_CASA_KHDN_Upper : TY_TRONG_CASA_KHDN_Upper,
        TY_TRONG_CASA_KHDNL_TONGKHOI : TY_TRONG_CASA_KHDNL_TONGKHOI,
        TY_TRONG_CASA_KHDNL_PVN : TY_TRONG_CASA_KHDNL_PVN,
        TY_TRONG_CASA_KHDNL_Non_PVN : TY_TRONG_CASA_KHDNL_Non_PVN,

        QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : QUY_MO_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG,
        QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG : QUY_MO_TIN_DUNG_TOANHANG_NH_TOANHANG,
        QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI : QUY_MO_TIN_DUNG_KHCN_NH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI : QUY_MO_TIN_DUNG_KHDN_NH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_NH_Core : QUY_MO_TIN_DUNG_KHDN_NH_Core,
        QUY_MO_TIN_DUNG_KHDN_NH_Upper : QUY_MO_TIN_DUNG_KHDN_NH_Upper,
        QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI : QUY_MO_TIN_DUNG_KHDNL_NH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDNL_NH_Non_PVN : QUY_MO_TIN_DUNG_KHDNL_NH_Non_PVN,

        QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG : QUY_MO_TIN_DUNG_TOANHANG_TDH_TOANHANG,
        QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI : QUY_MO_TIN_DUNG_KHCN_TDH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI : QUY_MO_TIN_DUNG_KHDN_TDH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDN_TDH_Core : QUY_MO_TIN_DUNG_KHDN_TDH_Core,
        QUY_MO_TIN_DUNG_KHDN_TDH_Upper : QUY_MO_TIN_DUNG_KHDN_TDH_Upper,
        QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI : QUY_MO_TIN_DUNG_KHDNL_TDH_TONGKHOI,
        QUY_MO_TIN_DUNG_KHDNL_TDH_Non_PVN : QUY_MO_TIN_DUNG_KHDNL_TDH_Non_PVN,

        LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG : LAI_SUAT_TIN_DUNG_TOANHANG_TOANHANG_TOANHANG,
        LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG : LAI_SUAT_TIN_DUNG_TOANHANG_NH_TOANHANG,
        LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHCN_NH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDN_NH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_NH_Core : LAI_SUAT_TIN_DUNG_KHDN_NH_Core,
        LAI_SUAT_TIN_DUNG_KHDN_NH_Upper : LAI_SUAT_TIN_DUNG_KHDN_NH_Upper,
        LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDNL_NH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDNL_NH_Non_PVN : LAI_SUAT_TIN_DUNG_KHDNL_NH_Non_PVN,

        LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG : LAI_SUAT_TIN_DUNG_TOANHANG_TDH_TOANHANG,
        LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHCN_TDH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDN_TDH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Core : LAI_SUAT_TIN_DUNG_KHDN_TDH_Core,
        LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper : LAI_SUAT_TIN_DUNG_KHDN_TDH_Upper,
        LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI : LAI_SUAT_TIN_DUNG_KHDNL_TDH_TONGKHOI,
        LAI_SUAT_TIN_DUNG_KHDNL_TDH_Non_PVN : LAI_SUAT_TIN_DUNG_KHDNL_TDH_Non_PVN,
        
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

        DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG : DU_NO_GIAI_NGAN_TOANHANG_TOANHANG_TOANHANG,
        DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG : DU_NO_GIAI_NGAN_TOANHANG_NH_TOANHANG,
        DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI : DU_NO_GIAI_NGAN_KHCN_NH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI : DU_NO_GIAI_NGAN_KHDN_NH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_NH_Core : DU_NO_GIAI_NGAN_KHDN_NH_Core,
        DU_NO_GIAI_NGAN_KHDN_NH_Upper : DU_NO_GIAI_NGAN_KHDN_NH_Upper,
        DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI : DU_NO_GIAI_NGAN_KHDNL_NH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDNL_NH_Non_PVN : DU_NO_GIAI_NGAN_KHDNL_NH_Non_PVN,
        
        DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG : DU_NO_GIAI_NGAN_TOANHANG_TDH_TOANHANG,
        DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI : DU_NO_GIAI_NGAN_KHCN_TDH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI : DU_NO_GIAI_NGAN_KHDN_TDH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDN_TDH_Core : DU_NO_GIAI_NGAN_KHDN_TDH_Core,
        DU_NO_GIAI_NGAN_KHDN_TDH_Upper : DU_NO_GIAI_NGAN_KHDN_TDH_Upper,
        DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI : DU_NO_GIAI_NGAN_KHDNL_TDH_TONGKHOI,
        DU_NO_GIAI_NGAN_KHDNL_TDH_Non_PVN : DU_NO_GIAI_NGAN_KHDNL_TDH_Non_PVN,

        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG : TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TOANHANG_TOANHANG,
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG : TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_NH_TOANHANG,
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHCN_NH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core : TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Core,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper : TY_LE_GIAI_NGAN_UU_DAI_KHDN_NH_Upper,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_Non_PVN : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_NH_Non_PVN,
        
        TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG : TY_LE_GIAI_NGAN_UU_DAI_TOANHANG_TDH_TOANHANG,
        TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHCN_TDH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core : TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Core,
        TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper : TY_LE_GIAI_NGAN_UU_DAI_KHDN_TDH_Upper,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_TONGKHOI,
        TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_Non_PVN : TY_LE_GIAI_NGAN_UU_DAI_KHDNL_TDH_Non_PVN,
    })
}

module.exports = {
    reportDailyTable: reportDailyTable,
    reportDailyTableSelect: reportDailyTableSelect
}