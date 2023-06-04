import JobService from "../services/JobService";
import staffServices from "../services/StaffService";
import quanlyJobServices from "../services/QuanlyJob_Services"

const getListJob = async (req, res) => {
  let CIF = req.session.CIF
  let listjob = await JobService.getListJob(CIF);
  let staff = await staffServices.getStaffInfo(CIF)
  return res.render("DSCV", {
    listjob: listjob,
    staff: staff,
    pageTitle: "Danh sach CV",
  });
};

const getDetailJob = async(req,res) => {
  let CIF = req.session.CIF;
  let id =  req.params.slug_id
  let jobDetail = await JobService.getDetailJob(CIF,id);
  let staff = await staffServices.getStaffInfo(CIF)
  return res.render("CongViec_Chitiet", {
    jobDetail: jobDetail,
    staff: staff,
    pageTitle: jobDetail.titleJob,
    jobId: id
  })
}

const updateDetailJob = async (req,res) => {
  let data = req.body
  console.log(data)
  let CIF = req.session.CIF;
  let staff = await staffServices.getStaffInfo(CIF);
  let listjob = await JobService.updateJob(data,CIF)
  console.log("listjob", listjob)
  return res.render("DSCV", {
    listjob: listjob,
    staff: staff,
    pageTitle: "Danh sach CV",
  });
}

const getListQuanLy = async(req,res) => {
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF)
  let listQuanly = await quanlyJobServices.getListQuanLy(CIF)
  console.log(listQuanly)
  return res.render("quanlyJob", {
    listQuanly : listQuanly,
    staff:staff,
    pageTitle: "Danh sách quản lý"
  })
}


const getListJobQuanLy = async(req,res) => {
  let CIF = req.session.CIF
  let cifQuanLy = req.params.cifQuanLy
  let listjob = await JobService.getListJob(cifQuanLy);
  let staff = await staffServices.getStaffInfo(CIF)
  
  return res.render("listQuanLyJob", {
    listjob: listjob,
    staff: staff,
    pageTitle: "Quản lý công việc"
  })
}

module.exports = {
  getListJob: getListJob,
  getDetailJob: getDetailJob,
  updateDetailJob: updateDetailJob,
  getListQuanLy: getListQuanLy,
  getListJobQuanLy:getListJobQuanLy
};
