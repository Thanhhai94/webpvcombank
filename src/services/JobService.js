import db from "../models/index";
const { Op } = require("sequelize")
const dayjs = require('dayjs')

const getListJob = async (CIF) => {
    try {
      const jobList = await db.Jobs.findAll({
        where: {CIF:CIF},
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
};

const getDetailJob = async (CIF,id) => {
  try {
    const jobDetail = await db.Jobs.findOne({
      where : {
        [Op.and]: [{ CIF: CIF }, { id: id }]
      }
    });
    if(jobDetail) {
      return jobDetail
    } else {
      return []
    }
  } catch (error) {
    
  }
}

const updateJob = async(data, CIF) => {
var makeTime = function(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return hours + ":" + minutes + ":" + seconds ;
}
  try {
    const jobUpdate = await db.Jobs.findOne({
      where: {id:data.id}
    });
    if(jobUpdate) {
      jobUpdate.statusJob = data.statusJob;
      jobUpdate.noteJob = data.noteJob;
      jobUpdate.timelineJob = dayjs(new Date()).format("YYYY-MM-DD");
      jobUpdate.timeline_Job = makeTime();
      await jobUpdate.save()
      console.log('save succes')
      return await db.Jobs.findAll({
        where: {CIF:CIF},
        raw: true,
      })
      
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getListJob: getListJob,
  getDetailJob: getDetailJob,
  updateJob: updateJob
};
