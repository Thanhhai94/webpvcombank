import db from "../models/index";
const { Op } = require("sequelize")
const dayjs = require('dayjs')

const getListJob = async (CIF,Rptdate) => {
    try {
      const jobList = await db.Jobs.findAll({
        where: {
          CIF:CIF,
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

const updateJob = async(data, CIF,Rptdate) => {
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
      
      return await db.Jobs.findAll({
        where: {
          CIF:CIF,
          Rptdate: Rptdate
        },
        
      })
      
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }
}

const insertJob = async(data) => {
  try {
    const job = db.Jobs.build({
      CIF: data.CIF,
      titleJob: data.titleJob,
      contentJob: data.contentJob,
      dateJob: data.date,
      deadlineJob: data.deadlineJob || null,
      dateJob:data.dateJob,
      Rptdate: data.Rptdate,
      statusJob: 0
    })
    await job.save()
    let listjob = await db.Jobs.findAll({
      where: {
        CIF: data.CIF,
        Rptdate: data.Rptdate
      }
    })
    
    if(listjob) {
      return listjob
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }
}

const updateQLJob = async(data) => {
  try {
    const jobUpdate = await db.Jobs.findOne({
      where: {id:data.id}
    });
    if(jobUpdate) {
      jobUpdate.titleJob = data.titleJob;
      jobUpdate.contentJob = data.contentJob;
      jobUpdate.deadlineJob = dayjs(data.deadlineJob).format("YYYY-MM-DD")
      await jobUpdate.save()
      return await db.Jobs.findAll({
        where: {
          CIF:data.CIF,
          Rptdate: data.Rptdate
        },
        
      })
      
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteJob = async(data) => {
  try {
    let jobDelete = await db.Jobs.findOne({
      where: {id: data.id}
    });
    if(jobDelete) {
      jobDelete.destroy()
    }
    let listjob = await db.Jobs.findAll({
      where: {
        CIF: data.CIF,
        Rptdate: data.Rptdate
      }
    })
    if(listjob) {
      return listjob
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
  updateJob: updateJob,
  insertJob:insertJob,
  deleteJob:deleteJob,
  updateQLJob:updateQLJob
};
