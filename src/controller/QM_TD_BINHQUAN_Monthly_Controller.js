import staffServices from "../services/StaffService";
import monthly_Services from "../services/monthly_Services";
import dayjs from "dayjs";


const getAll_QM_TD_BINHQUAN = async(req,res) => {
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)

    // Tao mảng là các ngày cuối tháng từ tháng 12 năm trước
    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var last_12 = dayjs(new Date(y-1,12,0,7,0,0)).format("YYYY-MM-DD").toString().replaceAll('-','')
    const month = [last_12]
    for(let i=1; i<m+1;i++){
        month.push(dayjs(new Date(y,i,0,7,0,0)).format("YYYY-MM-DD").toString().replaceAll('-',''))
    }
    console.log(month)
    
    let table_LS_CV_BINHQUAN_TT = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'TOAN_HANG')
    let table_LS_CV_BINHQUAN_TT_KHCN = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'KHCN')
    let table_LS_CV_BINHQUAN_TT_KHDN = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'KHDN')
    let table_LS_CV_BINHQUAN_TT_KHDNL = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'KHDNL')
    let input_LS_CV_BQ_TT = table_LS_CV_BINHQUAN_TT.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))
    let input_LS_CV_BQ_TT_KHCN = table_LS_CV_BINHQUAN_TT_KHCN.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))
    let input_LS_CV_BQ_TT_KHDN = table_LS_CV_BINHQUAN_TT_KHDN.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))
    let input_LS_CV_BQ_TT_KHDNL = table_LS_CV_BINHQUAN_TT_KHDNL.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))


    let inputMonth = month.map(value => +value)
    //end

    return res.render('test',{
        staff:staff,
        ky_bao_cao: (req.session.ky_bao_cao)?(req.session.ky_bao_cao):'',
        ky_so_sanh: (req.session.ky_so_sanh)?(req.session.ky_so_sanh):'',
        data_ky_bao_cao: [],
        data_ky_so_sanh: [],
        pageTitle: 'Báo cáo tháng',
        data_LS_CV_BQ_TT: JSON.stringify(input_LS_CV_BQ_TT),
        data_LS_CV_BQ_TT_KHCN: JSON.stringify(input_LS_CV_BQ_TT_KHCN),
        data_LS_CV_BQ_TT_KHDN: JSON.stringify(input_LS_CV_BQ_TT_KHDN),
        data_LS_CV_BQ_TT_KHDNL: JSON.stringify(input_LS_CV_BQ_TT_KHDNL),
        inputMonth: JSON.stringify(month),
    })
}

const post_QM_TD_BINHQUAN = async(req,res) => {
    let ky_bao_cao = (req.body.ky_bao_cao).toString().replaceAll('-','');
    let ky_so_sanh = (req.body.ky_so_sanh).toString().replaceAll('-','');
    let KHOI_QL = req.body.KHOI_QL
    let data_ky_bao_cao = await monthly_Services.get_KY_QM_TD_BINHQUAN(ky_bao_cao)
    let data_ky_so_sanh = await monthly_Services.get_KY_QM_TD_BINHQUAN(ky_so_sanh)

    req.session.ky_bao_cao = req.body.ky_bao_cao
    req.session.ky_so_sanh = req.body.ky_so_sanh

    
    //sorting theo thứ tự
    data_ky_bao_cao.sort(function(sv1, sv2) {
        return sv1.SORTING - sv2.SORTING;
    })
    data_ky_so_sanh.sort(function(sv1, sv2) {
        return sv1.SORTING - sv2.SORTING;
    })
    
    // tạo mảng lấy giá trị AMT
    const data_BC = []
    const data_SS =[]
    
    data_ky_bao_cao.map(data=>{
        if(KHOI_QL =='TOAN_HANG'){
            data_BC.push(data.AMT)
        }
        else if(data.KHOI_QL == KHOI_QL){
            data_BC.push(data.AMT)
        } else {
            data_BC.push(0)
        }    
    } )

    data_ky_so_sanh.map(data=>{
        if(KHOI_QL =='TOAN_HANG'){
            data_SS.push(data.AMT)
        }
        else if(data.KHOI_QL == KHOI_QL){
            data_SS.push(data.AMT)
        } else {
            data_SS.push(0)
        }    
    } )
    
    let input_data_BC = data_BC.map(value => parseInt(value))
    let input_data_SS = data_SS.map(value => parseInt(value))
    //end


    // LS_CV_BINHQUAN_TT

    // Tao mảng là các ngày cuối tháng từ tháng 12 năm trước
    let date = new Date(req.body.ky_bao_cao), y = date.getFullYear(), m = date.getMonth()+1;
    let last_12 = dayjs(new Date(y-1,12,0,7,0,0)).format("YYYY-MM-DD").toString().replaceAll('-','')
    const month = [last_12]
    for(let i=1; i<m+1;i++){
        month.push(dayjs(new Date(y,i,0,7,0,0)).format("YYYY-MM-DD").toString().replaceAll('-',''))
    }
    
    let table_LS_CV_BINHQUAN_TT = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'TOAN_HANG')
    let table_LS_CV_BINHQUAN_TT_KHCN = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'KHCN')
    let table_LS_CV_BINHQUAN_TT_KHDN = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'KHDN')
    let table_LS_CV_BINHQUAN_TT_KHDNL = await monthly_Services.get_LS_CV_BINHQUAN_TT(month,'KHDNL')
    let input_LS_CV_BQ_TT = table_LS_CV_BINHQUAN_TT.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))
    let input_LS_CV_BQ_TT_KHCN = table_LS_CV_BINHQUAN_TT_KHCN.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))
    let input_LS_CV_BQ_TT_KHDN = table_LS_CV_BINHQUAN_TT_KHDN.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))
    let input_LS_CV_BQ_TT_KHDNL = table_LS_CV_BINHQUAN_TT_KHDNL.map(value =>(+value.AMT_LS_CV_BQ.toFixed(2)))


    let inputMonth = month.map(value => +value)
    //end

    //Render

    if(data_BC && data_SS ) {
        return res.render("test", {
            ky_bao_cao: req.body.ky_bao_cao,
            ky_so_sanh: req.body.ky_so_sanh,
            data_ky_bao_cao: JSON.stringify(input_data_BC),
            data_ky_so_sanh: JSON.stringify(input_data_SS),
            data_LS_CV_BQ_TT: JSON.stringify(input_LS_CV_BQ_TT),
            data_LS_CV_BQ_TT_KHCN: JSON.stringify(input_LS_CV_BQ_TT_KHCN),
            data_LS_CV_BQ_TT_KHDN: JSON.stringify(input_LS_CV_BQ_TT_KHDN),
            data_LS_CV_BQ_TT_KHDNL: JSON.stringify(input_LS_CV_BQ_TT_KHDNL),
            pageTitle: 'Báo cáo tháng',
            inputMonth: JSON.stringify(month),
            KHOI_QL: KHOI_QL,
        })
    } else {
        return res.render("test", {
            ky_bao_cao: req.body.ky_bao_cao,
            ky_so_sanh: req.body.ky_so_sanh,
            data_ky_bao_cao: [],
            data_ky_so_sanh: [],
            data_LS_CV_BQ_TT: [],
            data_LS_CV_BQ_TT_KHCN: [],
            data_LS_CV_BQ_TT_KHDN: [],
            data_LS_CV_BQ_TT_KHDNL: [],
            pageTitle: 'Báo cáo tháng',
            inputMonth: [],
            KHOI_QL: KHOI_QL
        })
    }
}

module.exports = {
    getAll_QM_TD_BINHQUAN: getAll_QM_TD_BINHQUAN,
    post_QM_TD_BINHQUAN: post_QM_TD_BINHQUAN 
}