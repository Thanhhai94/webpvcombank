var fs = require('fs');
import uploadFileService from '../services/uploadFileService'
import staffServices from "../services/StaffService";
import quanlyJobServices from "../services/QuanlyJob_Services";
import dayjs from 'dayjs';

const csv = require('csv-parser');

const uploadFile = async(req,res) => {
  console.log('file',req.file);
  if(!req.file){
    console.log('req.file',req.file)
    return res.status(400).send('No file uploaded.')
  }
  if (['text/csv', 'application/vnd.ms-excel'].includes(req.file.mimetype) === false) {
    console.log('mimetype',req.file.mimetype)
    return res.status(400).send('Invalid file format. Only CSV files are allowed.');
  }

  if (req.file.size > 10 * 1024 * 1024) {
    return res.status(400).send('File size exceeds the limit of 10MB.');
  }

  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Xóa file tạm sau khi đọc xong
      fs.unlinkSync(req.file.path);
      results.map(result => {
        (result.statusJob == '') ? result.statusJob = 0 : result.statusJob
        result.timelineJob = undefined
        result.noteJob = undefined
        result.timeline_Job = undefined
        let deadlineJob = new Date(result.deadlineJob)
        console.log('deadlineJob',deadlineJob)
        let y = deadlineJob.getFullYear(), m = deadlineJob.getMonth(), d = deadlineJob.getDate()
        result.deadlineJob = dayjs(new Date(y,m,d,7,0,0)).format("YYYY-MM-DD")
        result.dateJob = dayjs(result.dateJob).format("MM/YYYY")
      })
      uploadFileService.uploadFile(results,CIF)
    })
    let CIF = req.session.CIF
    let staff =  staffServices.getStaffInfo(CIF)
    let listQuanly = await quanlyJobServices.getListQuanLy(CIF)
    return res.render("quanlyJob", {
      listQuanly : listQuanly,
      staff:staff,
      pageTitle: "Danh sách quản lý"
    })

}

module.exports = {
  uploadFile: uploadFile
}