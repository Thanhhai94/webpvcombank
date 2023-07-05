var fs = require('fs');
import uploadFileService from '../services/uploadFileService'
import staffServices from "../services/StaffService";
import quanlyJobServices from "../services/QuanlyJob_Services";
import dayjs from 'dayjs';
const readXlsxFile = require('read-excel-file/node');
const csv = require('csv-parser');

// const uploadFile = async(req,res) => {
//   if(!req.file){
//     console.log('req.file',req.file)
//     return res.status(400).send('No file uploaded.')
//   }
//   if (['text/csv', 'application/vnd.ms-excel'].includes(req.file.mimetype) === false) {
//     console.log('mimetype',req.file.mimetype)
//     return res.status(400).send('Invalid file format. Only CSV files are allowed.');
//   }

//   if (req.file.size > 10 * 1024 * 1024) {
//     return res.status(400).send('File size exceeds the limit of 10MB.');
//   }

//   const results = [];
//   fs.createReadStream(req.file.path)
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//       // Xóa file tạm sau khi đọc xong
//       fs.unlinkSync(req.file.path);
//       results.map(result => {
//         (result.statusJob == '') ? result.statusJob = 0 : result.statusJob
//         result.timelineJob = undefined
//         result.noteJob = undefined
//         result.timeline_Job = undefined
//         let deadlineJob = new Date(result.deadlineJob)
//         console.log('deadlineJob',deadlineJob)
//         let y = deadlineJob.getFullYear(), m = deadlineJob.getMonth(), d = deadlineJob.getDate()
//         result.deadlineJob = dayjs(new Date(y,m,d,7,0,0)).format("YYYY-MM-DD")
//         result.dateJob = dayjs(result.dateJob).format("MM/YYYY")
//       })
//       uploadFileService.uploadFile(results,CIF)
//     })
//     let CIF = req.session.CIF
//     let staff =  staffServices.getStaffInfo(CIF)
//     let listQuanly = await quanlyJobServices.getListQuanLy(CIF)
//     return res.render("quanlyJob", {
//       listQuanly : listQuanly,
//       staff:staff,
//       pageTitle: "Danh sách quản lý"
//     })

// }


const uploadFile = async(req,res) => {
  console.log('file',req.file);
  if(!req.file){
    console.log('req.file',req.file)
    return res.status(400).send('No file uploaded.')
  }
  if (['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(req.file.mimetype) === false) {
    console.log('mimetype',req.file.mimetype)
    return res.status(400).send('Invalid file format. Only CSV files are allowed.');
  }

  if (req.file.size > 10 * 1024 * 1024) {
    return res.status(400).send('File size exceeds the limit of 10MB.');
  }
  const results = []
  await readXlsxFile(fs.createReadStream(req.file.path)).then((rows) => {
    rows.shift()
    rows.map(row => results.push(row))
  })
  fs.unlinkSync(req.file.path)

const handlerArrayToObject = (array) => {
  const results = []
  array.map(job => {
    let object = {}
    object.CIF = job[0]
    object.titleJob = job[1]
    object.contentJob = job[2]
    object.dateJob = job[3]
    object.statusJob = job[4]
    object.deadlineJob = job[5]
    object.timelineJob = job[6]
    object.noteJob = job[7]
    object.timeline_Job = job[8]
    object.Rptdate = job[9]
    results.push(object)
  })
  return results
}

let KQ = handlerArrayToObject(results)
console.log(KQ)

  await uploadFileService.uploadFile(KQ)

    let CIF = req.session.CIF
    let staff =  staffServices.getStaffInfo(CIF)
    let listQuanly = await quanlyJobServices.getListQuanLy(CIF)
    return res.render("quanlyJob", {
      listQuanly : listQuanly,
      staff:staff,
      pageTitle: "Danh sách quản lý"
    })

//   const results = []
//   fs.createReadStream(req.file.path)
//     .pipe(readXlsxFile())
//     .on('data',(data) => results.push(data))
//     .on('end', () => {
//       fs.unlinkSync(req.file.path)
//       console.log(results)
//     })
}

module.exports = {
  uploadFile: uploadFile
}