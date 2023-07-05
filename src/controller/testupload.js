<!DOCTYPE html>
<html lang="en">
    <head>
      <title>Node js upload/Import excel file to MySQL database - Tutsmake.com</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <h1>Node js upload Excel file to MySQL database - Tutsmake.com</h1>
      <form action="/uploadfile" enctype="multipart/form-data" method="post">
        <input type="file" name="uploadfile" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel' >
        <input type="submit" value="Upload Excel">
      </form>  
    </body>
</html>



const fs = require('fs');
const readXlsxFile = require('read-excel-file/node');
const multer = require('multer')
const path = require('path')
{/* //use express static folder
app.use(express.static("./public"))
// body-parser middleware use
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
// Database connection
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "test"
}) */}

db.connect(function (err) {
if (err) {
return console.error('error: ' + err.message);
}
console.log('Connected to the MySQL server.');
})

// Multer Upload Storage
const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, __basedir + '/uploads/')
},
filename: (req, file, cb) => {
cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
}
});


const upload = multer({storage: storage});
//! Routes start
//route for Home page
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});
// -> Express Upload RestAPIs
app.post('/uploadfile', upload.single("uploadfile"), (req, res) =>{
importExcelData2MySQL(__basedir + '/uploads/' + req.file.filename);
console.log(res);
});
// -> Import Excel Data to MySQL database
function importExcelData2MySQL(filePath){
// File path.
readXlsxFile(filePath).then((rows) => {
// `rows` is an array of rows
// each row being an array of cells.     
console.log(rows);
/**
[ [ 'Id', 'Name', 'Address', 'Age' ],
[ 1, 'john Smith', 'London', 25 ],
[ 2, 'Ahman Johnson', 'New York', 26 ]
*/
// Remove Header ROW
rows.shift();
// Open the MySQL connection
db.connect((error) => {
if (error) {
console.error(error);
} else {
let query = 'INSERT INTO customer (id, address, name, age) VALUES ?';
connection.query(query, [rows], (error, response) => {
console.log(error || response);
/**
OkPacket {
fieldCount: 0,
affectedRows: 5,
insertId: 0,
serverStatus: 2,
warningCount: 0,
message: '&Records: 5  Duplicates: 0  Warnings: 0',
protocol41: true,
changedRows: 0 } 
*/
});
}
});
})
}
// Create a Server
let server = app.listen(8080, function () {
let host = server.address().address
let port = server.address().port
console.log("App listening at http://%s:%s", host, port) 
})


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