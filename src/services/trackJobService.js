import db from "../models/index";
import dayjs from "dayjs";

const createTrackJob = async(CIF,data) => {
    var makeTime = function(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        return hours + ":" + minutes + ":" + seconds ;
      }
 try {
    const trackJob = db.TRACK_JOB.build({
        CIF: CIF,
        timelineJob : dayjs(new Date()).format("YYYY-MM-DD"),
        timeline_Job : makeTime(),
        titleJob: data.titleJob,
        id_Job: data.id,
        noteJob: data.noteJob,
        statusJob: data.statusJob,
        deadlineJob: data.deadlineJob,
        dateJob: data.dateJob,
        contentJob: data.contentJob,
        Rptdate: data.Rptdate,
    });
    console.log('CIF',trackJob.CIF)
    
    await trackJob.save() // lưu vào csdl

 } catch (error) {
    console.log(error)
 }
}

module.exports = {
    createTrackJob: createTrackJob,
   
}