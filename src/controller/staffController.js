import staffServices from "../services/StaffService";
import JobService from "../services/JobService"
import handleListJob from "../utils/handleListJob";
import dayjs from "dayjs";

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
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let Rptdate = dayjs(new Date(y,m,1)).format("YYYYMMDD")
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF);
  let listjob = await JobService.getListJob(CIF,Rptdate);
  if(staff) {
    return res.render("homepage",{
      staff: staff,
      pageTitle: 'HomePage',
      listjob: listjob,
      countStatusJob: handleListJob.handleCountStatusJob(listjob),
      TyleStatusJob: JSON.stringify(handleListJob.handleTyleStatusJob(listjob))
    })
  } else {
    return res.redirect('/login')
  }
}

module.exports = {
  getListStaff: getListStaff,
  getStaffInfo: getStaffInfo
};
