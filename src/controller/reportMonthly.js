import staffServices from "../services/StaffService";

const reportMonthly = async (req,res) => {
    let ky_bao_cao = req.session.ky_bao_cao
    console.log('start',ky_bao_cao)
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    return res.render('report_monthly',{
        pageTitle: 'Báo cáo tháng',
        staff:staff,
    })
}

module.exports = {
    reportMonthly: reportMonthly,
}