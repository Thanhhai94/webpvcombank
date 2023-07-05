import db from "../models/index";
const { Op } = require("sequelize")

const getListQuanLy = async (CIF) => {

    try {
      const getListQuanLy = await db.QL_JOB.findAll({
        where: {CIF:CIF},
        include: {
          model: db.Staff,
        }
      });

      if(getListQuanLy) {
        return getListQuanLy
      } else {
        return []
      };;
    } catch (error) {
      console.log(error);
    }
};

let getListArrayCIF = async(arrayCIF,Rptdate) => {
  try {
    const jobList = await db.Jobs.findAll({
      where: {
        CIF: {
          [Op.in]: arrayCIF
        },
        Rptdate: Rptdate
      },
      raw: true,
    });
    if(jobList) {
      return jobList
    } else {
      return []
    };;
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    getListQuanLy: getListQuanLy,
    getListArrayCIF: getListArrayCIF
};
