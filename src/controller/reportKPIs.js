import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import KPIsMonthlyServices from "../services/KPIsMonthlyServices"
import handleKPIsMonthly from "../utils/handleKPIsMonthly"

const getReportKPIs = async(req,res) => {
    let KHOI_QL = req.params.KHOI_QL
    let NHOM_KH = req.params.NHOM_KH
    console.log('test',NHOM_KH)
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    // Tao mảng là các ngày cuối tháng từ tháng 12 năm trước
    var date = new Date(), y = date.getFullYear(), m = 12, mo = date.getMonth();
    const months = []
    for(let i=1; i<m+1;i++){
        months.push(dayjs(new Date(y,i,0,7,0,0)).format("MM-YYYY").toString())}
    
    const getmonths = []
    for(let i=1; i<m+1;i++){
        getmonths.push(dayjs(new Date(y,i,0,7,0,0)).format("YYYYMMDD").toString())}

    let lastMonth = dayjs(new Date(y,mo,0,7,0,0)).format("MM/YYYY")
    let selectedMonth = dayjs(new Date(y,mo,0,7,0,0)).format("YYYYMMDD")
    let formatSelectedMonth = dayjs(new Date(y,mo,0,7,0,0)).format("YYYY-MM-DD")
    
    if(KHOI_QL==='KHCN'){
        NHOM_KH = 'CN'
    } else {
        NHOM_KH = 'All'
    }

    let list_NHOM_CHI_TIEU = await KPIsMonthlyServices.getDistinctNhomChiTieu(KHOI_QL,NHOM_KH,selectedMonth)
    let array_NHOM_CHI_TIEU = handleKPIsMonthly.getArrayNHOMCHITIEU(list_NHOM_CHI_TIEU)
    

    const arrayFull = []
    for(let i = 0; i < array_NHOM_CHI_TIEU.length; i ++){
        
        let list = await KPIsMonthlyServices.getDistinctLoai(KHOI_QL,NHOM_KH,selectedMonth,array_NHOM_CHI_TIEU[i])
        arrayFull.push(handleKPIsMonthly.getArrayLOAI(list))
    }
    
    const getListKPI = await KPIsMonthlyServices.getListKPI(KHOI_QL,NHOM_KH,selectedMonth)
    
    const getAllKPI = await KPIsMonthlyServices.getAllListKPI(KHOI_QL,NHOM_KH,getmonths)

    return res.render('report_KPIs',{
        pageTitle: 'Báo cáo KPIs',
        staff: staff,
        months: months,
        KHOI_QL: KHOI_QL,
        NHOM_KH: NHOM_KH,
        lastMonth: lastMonth,
        formatSelectedMonth:formatSelectedMonth,
        selectKHOIQL : JSON.stringify(KHOI_QL),
        selectNHOMKH: JSON.stringify(NHOM_KH),
        arrayFull: arrayFull,
        array_NHOM_CHI_TIEU: array_NHOM_CHI_TIEU,
        getListKPI:getListKPI,
        selectedDates: JSON.stringify(lastMonth),
        getAllKPI:getAllKPI,
        getmonths:getmonths
    })
}

const getReportKPIsSelected = async(req,res) => {
    let KHOI_QL = req.params.KHOI_QL
    let selectedMonth = req.params.selectedMonth
    let NHOM_KH = req.params.NHOM_KH
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    // Tao mảng là các ngày cuối tháng từ tháng 12 năm trước
    var date = new Date(), y = date.getFullYear(), m = 12, mo = date.getMonth();

    const getmonths = []
    for(let i=1; i<m+1;i++){
        getmonths.push(dayjs(new Date(y,i,0,7,0,0)).format("YYYYMMDD").toString())}

    const months = []
    for(let i=1; i<m+1;i++){
        months.push(dayjs(new Date(y,i,0,7,0,0)).format("MM-YYYY").toString())}
    let lastMonth = dayjs(new Date(selectedMonth)).format("MM/YYYY")
    let getSelectedMonth = selectedMonth.replaceAll("-","")

    let list_NHOM_CHI_TIEU = await KPIsMonthlyServices.getDistinctNhomChiTieu(KHOI_QL,NHOM_KH,getSelectedMonth)
    let array_NHOM_CHI_TIEU = handleKPIsMonthly.getArrayNHOMCHITIEU(list_NHOM_CHI_TIEU)
    
    const arrayFull = []
    for(let i = 0; i < array_NHOM_CHI_TIEU.length; i ++){
        let list = await KPIsMonthlyServices.getDistinctLoai(KHOI_QL,NHOM_KH,getSelectedMonth,array_NHOM_CHI_TIEU[i])
        arrayFull.push(handleKPIsMonthly.getArrayLOAI(list))
    }
    
    const getListKPI = await KPIsMonthlyServices.getListKPI(KHOI_QL,NHOM_KH,getSelectedMonth)
    
    const getAllKPI = await KPIsMonthlyServices.getAllListKPI(KHOI_QL,NHOM_KH,getmonths)

    return res.render('report_KPIs',{
        pageTitle: 'Báo cáo KPIs',
        staff: staff,
        months: months,
        KHOI_QL: KHOI_QL,
        lastMonth: lastMonth,
        NHOM_KH:NHOM_KH,
        formatSelectedMonth:selectedMonth,
        selectKHOIQL : JSON.stringify(KHOI_QL),
        selectNHOMKH: JSON.stringify(NHOM_KH),
        arrayFull: arrayFull,
        array_NHOM_CHI_TIEU: array_NHOM_CHI_TIEU,
        getListKPI:getListKPI,
        selectedDates: JSON.stringify(lastMonth),
        getAllKPI:getAllKPI,
        getmonths:getmonths
    })
}

module.exports = {
    getReportKPIs: getReportKPIs,
    getReportKPIsSelected: getReportKPIsSelected
}


