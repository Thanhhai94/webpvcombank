import db from "../models/index";

const getListStaff = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let staffs = await db.Staff.findAll({
        raw: true,
      });
      resolve(staffs);
    } catch (error) {
      console.log(error);
    }
  });
};

const getStaffInfo = (CIF) => {
  return new Promise (async (resolve,reject) => {
    try {
      let staff = await db.Staff.findOne({
        where: {CIF:CIF}
      })
      if(staff) {
        resolve(staff)
      } else {
        resolve([])
      };
    } catch (error) {
      
    }
  })
}

module.exports = {
  getListStaff: getListStaff,
  getStaffInfo: getStaffInfo
};
