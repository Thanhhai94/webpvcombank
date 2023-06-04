import express from "express";
import staffController from "../controller/staffController";
import userController from "../controller/userController";
import jobController from "../controller/jobController";
import QM_TD_BINHQUAN_Monthly_Controller from '../controller/QM_TD_BINHQUAN_Monthly_Controller'
import reportMonthly from '../controller/reportMonthly'
import reportDailyController from '../controller/reportDailyController'
import reportDailyDashboardController from '../controller/reportDailyDashboardController'
import test from '../controller/test'


let router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req,res) => {res.redirect("/login")});
  router.get("/login", userController.getLogin);
  router.post("/login",userController.loginPost);
  router.get("/logout", userController.logout);

  router.get("/doimatkhau", userController.getChangePassword)
  router.post("/doimatkhau", userController.postChangePassword)

  router.get("/jobs", jobController.getListJob);
  router.get("/homepage",staffController.getStaffInfo)
  router.get("/DSnhansu",staffController.getListStaff)
  router.get("/DScongviec",jobController.getListJob)
  router.get("/DScongviec/quanly",jobController.getListQuanLy)
  router.get("/DScongviec/quanly/:cifQuanLy",jobController.getListJobQuanLy)
  
  router.get("/DScongviec/:slug_id",jobController.getDetailJob)
  router.post("/DScongviec/:slug_id",jobController.updateDetailJob)
  
  router.get("/daily",reportDailyController.reportDailyTable)
  router.get("/daily/:date",reportDailyController.reportDailyTableSelect)
  router.get("/daily/dashboard/hdv",reportDailyDashboardController.reportDailyDashboardHDV)
  router.get("/daily/dashboard/hdv/:date/:select/",reportDailyDashboardController.reportDailyDashboardHDVSelect)
  router.get("/daily/dashboard/hdv/tongkhoi/:date",reportDailyDashboardController.reportDailyDashboardHDVSelect)

  router.get("/monthly", reportMonthly.reportMonthly)
  router.get("/monthly/tindung", QM_TD_BINHQUAN_Monthly_Controller.getAll_QM_TD_BINHQUAN)
  router.post("/monthly/tindung", QM_TD_BINHQUAN_Monthly_Controller.post_QM_TD_BINHQUAN)

  router.get("/testget", test.test)
  router.get("/test/get", test.testget)


  return app.use("/", router);
};

module.exports = initWebRoutes;
