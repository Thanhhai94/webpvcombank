import JobService from "../services/JobService";
import staffServices from "../services/StaffService";
import quanlyJobServices from "../services/QuanlyJob_Services";
import trackJobService from "../services/trackJobService";
import dayjs from "dayjs";
import handleListJob from "../utils/handleListJob";

const getListJob = async (req, res) => {
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let currentMonth = dayjs(new Date(y,m+1,0,7,0,0)).format("MM/YYYY")
  let Rptdate = dayjs(new Date(y,m,1,7,0,0)).format("YYYYMMDD")
  let CIF = req.session.CIF
  let listjob = await JobService.getListJob(CIF,Rptdate);
  let staff = await staffServices.getStaffInfo(CIF)
  return res.render("DSCV", {
    Rptdate:Rptdate,
    currentMonth: currentMonth,
    listjob: listjob,
    staff: staff,
    pageTitle: "Danh sach CV",
  });
};


const getListJobSelectRptDate = async (req, res) => {
  let Rptdate = req.params.Rptdate
  let currentMonth = dayjs(Rptdate).format("MM/YYYY")
  let CIF = req.session.CIF
  let listjob = await JobService.getListJob(CIF,Rptdate);
  let staff = await staffServices.getStaffInfo(CIF)
  return res.render("DSCV", {
    Rptdate: Rptdate,
    currentMonth: currentMonth,
    listjob: listjob,
    staff: staff,
    pageTitle: "Danh sach CV",
  });
};

const getDetailJob = async(req,res) => {
  let CIF = req.session.CIF;
  let id =  req.params.slug_id
  let Rptdate = req.params.Rptdate
  let jobDetail = await JobService.getDetailJob(CIF,id);
  let staff = await staffServices.getStaffInfo(CIF)
  return res.render("CongViec_Chitiet", {
    Rptdate: Rptdate,
    jobDetail: jobDetail,
    staff: staff,
    pageTitle: jobDetail.titleJob,
    jobId: id
  })
}

const updateDetailJob = async (req,res) => {
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let currentMonth = dayjs(new Date(y,m+1,0,7,0,0)).format("MM/YYYY")
  let data = req.body
  let CIF = req.session.CIF;
  let Rptdate = req.params.Rptdate
  let staff = await staffServices.getStaffInfo(CIF);
  let listjob = await JobService.updateJob(data,CIF,Rptdate)
  let insertData = await trackJobService.createTrackJob(CIF,data)
  return res.render("DSCV", {
    insertData:insertData,
    Rptdate: Rptdate,
    currentMonth:currentMonth,
    listjob: listjob,
    staff: staff,
    pageTitle: "Danh sach CV",
  });
}

const getListQuanLy = async(req,res) => {
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let Rptdate = dayjs(new Date(y,m,1,7,0,0)).format("YYYYMMDD")
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF)
  let listQuanly = await quanlyJobServices.getListQuanLy(CIF)

  let listCIFQL = handleListJob.handleGetListCIF(listQuanly)
  let getListArrayCIF = await quanlyJobServices.getListArrayCIF(listCIFQL,Rptdate)
  let listJob = handleListJob.getListJobbyCIF(listCIFQL,getListArrayCIF)
  return res.render("quanlyJob", {
    listQuanly : listQuanly,
    staff:staff,
    pageTitle: "Danh sách quản lý",
    listJob:listJob
  })
}


const getListJobQuanLy = async(req,res) => {
  let date = new Date(), y = date.getFullYear(), m = date.getMonth();
  let currentMonth = dayjs(new Date(y,m+1,0,7,0,0)).format("MM/YYYY")
  let Rptdate = dayjs(new Date(y,m,1,7,0,0)).format("YYYYMMDD")
  let CIF = req.session.CIF
  let cifQuanLy = req.params.cifQuanLy
  let listjob = await JobService.getListJob(cifQuanLy,Rptdate);
  let staff = await staffServices.getStaffInfo(CIF)
  let staffQL = await staffServices.getStaffInfo(cifQuanLy)
  return res.render("listQuanLyJob", {
    nameStaffQL : staffQL.Name,
    listjob: listjob,
    staff: staff,
    pageTitle: "Quản lý công việc",
    currentMonth:currentMonth,
    Rptdate: Rptdate,
    cifQuanLy: cifQuanLy,
    arrayListJob: JSON.stringify(listjob)
  })
}

const getListJobQuanLySelectRptDate = async(req,res) => {
  let Rptdate = req.params.Rptdate
  let currentMonth = dayjs(Rptdate).format("MM/YYYY")
  let CIF = req.session.CIF
  let cifQuanLy = req.params.cifQuanLy
  let listjob = await JobService.getListJob(cifQuanLy,Rptdate);
  let staff = await staffServices.getStaffInfo(CIF)
  let staffQL = await staffServices.getStaffInfo(cifQuanLy)
  return res.render("listQuanLyJob", {
    nameStaffQL : staffQL.Name,
    listjob: listjob,
    staff: staff,
    pageTitle: "Quản lý công việc",
    currentMonth:currentMonth,
    Rptdate: Rptdate,
    cifQuanLy: cifQuanLy,
    arrayListJob: JSON.stringify(listjob)
  })
}



const postGiaoviec = async(req,res) => {
  if(req.body.Upload == 'Upload') {
    console.log('Upload')
  }


  if(req.body.update =='Cập nhật') {
    let data = req.body
    let listjob = await JobService.updateQLJob(data)
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let currentMonth = dayjs(data.Rptdate).format("MM/YYYY")
    let staffQL = await staffServices.getStaffInfo(data.CIF)
    return res.render("listQuanlyJob",{
      nameStaffQL : staffQL.Name,
      listjob: listjob,
      staff: staff,
      pageTitle: "Quản lý công việc",
      currentMonth:currentMonth,
      Rptdate: Rptdate,
      cifQuanLy: data.CIF,
      arrayListJob: JSON.stringify(listjob)
    })
  }

  if(req.body.delete =='Xóa') {
    let data = req.body
    let listjob = await JobService.deleteJob(data)
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let currentMonth = dayjs(data.Rptdate).format("MM/YYYY")
    let staffQL = await staffServices.getStaffInfo(data.CIF)
    return res.render("listQuanlyJob",{
      nameStaffQL : staffQL.Name,
      listjob: listjob,
      staff: staff,
      pageTitle: "Quản lý công việc",
      currentMonth:currentMonth,
      Rptdate: Rptdate,
      cifQuanLy: data.CIF,
      arrayListJob: JSON.stringify(listjob)
    })
  }

  let data=req.body
  let CIF = req.session.CIF
  let y = (data.dateJob).slice(3,7)
  let m = (data.dateJob).slice(0,2)
  let selectMonth = new Date(y,m-1,1,7,0,0)
  let Rptdate = dayjs(selectMonth).format('YYYYMMDD')
  data.Rptdate = Rptdate
  let currentMonth = dayjs(Rptdate).format("MM/YYYY")
  let staff = await staffServices.getStaffInfo(CIF)
  let listjob = await JobService.insertJob(data)
  let staffQL = await staffServices.getStaffInfo(data.CIF)
  return res.render("listQuanlyJob",{
    nameStaffQL : staffQL.Name,
    listjob: listjob,
    staff: staff,
    pageTitle: "Quản lý công việc",
    currentMonth:currentMonth,
    Rptdate: Rptdate,
    cifQuanLy: data.CIF,
    arrayListJob: JSON.stringify(listjob)
  })
}

module.exports = {
  getListJob: getListJob,
  getDetailJob: getDetailJob,
  updateDetailJob: updateDetailJob,
  getListQuanLy: getListQuanLy,
  getListJobQuanLy:getListJobQuanLy,
  getListJobSelectRptDate:getListJobSelectRptDate,
  getListJobQuanLySelectRptDate:getListJobQuanLySelectRptDate,
  postGiaoviec:postGiaoviec
};
