import staffServices from "../services/StaffService";

const getListStaff = async (req, res) => {
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF)
  let staffs = await staffServices.getListStaff();
  return res.render("DSNS", {
    staffs: staffs,
    staff: staff,
    pageTitle: "Danh sach nhan su",
  });
};

const getStaffInfo = async(req,res) => {
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF);
  if(staff) {
    return res.render("homepage",{
      staff: staff,
      pageTitle: 'HomePage'
    })
  } else {
    return res.redirect('/login')
  }
}

module.exports = {
  getListStaff: getListStaff,
  getStaffInfo: getStaffInfo
};
