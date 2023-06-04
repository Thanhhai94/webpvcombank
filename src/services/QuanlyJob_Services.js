import db from "../models/index";

const getListQuanLy = async (CIF) => {

    try {
      const getListQuanLy = await db.QL_JOB.findAll({
        where: {CIF:CIF},
        raw: true,
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



module.exports = {
    getListQuanLy: getListQuanLy,
};
