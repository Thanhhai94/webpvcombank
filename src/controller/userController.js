import UserServices from "../services/UserService";
import staffServices from "../services/StaffService";
import JobService from "../services/JobService"

const getLogin = async (req,res) => {
  console.log(req.session.CIF);
  if(req.session.CIF)
  {
    return res.redirect('/homepage')
  }
  res.render('login', {
    pageTitle: 'LOGIN'
  })
}

const loginPost = async (req, res) => {
  let userName = req.body.username
  let password = req.body.password
  let user = await UserServices.getUser(userName);
  if(user && user.password == password){
    req.session.CIF = user.CIF;
    req.session.ruleReportDaily = user.Rule_Report_Daily
    console.log('rule',user.Rule_Report_Daily,user.CIF)
    return res.redirect('/homepage')
  } else {
    res.redirect('/login')
  }
};

const logout = (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/login')
  })
}

const getChangePassword = async (req,res) => {
  let CIF = req.session.CIF
  let staff = await staffServices.getStaffInfo(CIF);
  let user = await UserServices.getUserByCif(CIF)
  console.log(user)
  res.render('password', {
    pageTitle: 'Đổi mật khẩu',
    staff: staff,
    user: user
  })
}

const postChangePassword = async (req,res) => {
  let data = req.body
  console.log('data',data)
  let CIF = req.session.CIF;
  let user = await UserServices.updatePassword(CIF,data)
  console.log('user',user)
  if(user) {
    return res.redirect('/homepage')
  }
}

module.exports = {
  getLogin: getLogin,
  loginPost: loginPost,
  logout: logout,
  getChangePassword:getChangePassword,
  postChangePassword:postChangePassword
};
