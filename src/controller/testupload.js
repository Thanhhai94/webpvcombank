// <!DOCTYPE html>
// <html>
// <head>
//   <title>Upload CSV File</title>
// </head>
// <body>
//   <h1>Upload CSV File</h1>
//   <form action="/upload" method="POST" enctype="multipart/form-data">
//     <input type="file" name="csvFile" accept=".csv" />
//     <br />
//     <input type="submit" value="Upload" />
//   </form>
// </body>
// </html>
// const express = require('express');
// const multer = require('multer');
// const csv = require('csv-parser');
// const Sequelize = require('sequelize');
// const tedious = require('tedious');

// const app = express();

// const upload = multer({ dest: 'uploads/' });

// Kết nối cơ sở dữ liệu
// const sequelize = new Sequelize({
//   dialect: 'mssql',
//   dialectModule: tedious,
//   host: 'your_host',
//   database: 'your_database',
//   username: 'your_username',
//   password: 'your_password',
// });

// Định nghĩa mô hình Sequelize cho bảng
// const DataModel = sequelize.define('Data', {
//   // Định nghĩa các cột tương ứng với các trường trong file CSV
//   // Ví dụ: column1, column2, column3
//   column1: Sequelize.STRING,
//   column2: Sequelize.STRING,
//   column3: Sequelize.STRING,
// });

// Route nhận file CSV và xử lý
app.post('/upload', upload.single('csvFile'), (req, res) => {
  // Kiểm tra nếu không có file gửi lên
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Kiểm tra định dạng file
  if (req.file.mimetype !== 'text/csv') {
    return res.status(400).send('Invalid file format. Only CSV files are allowed.');
  }

  // Kiểm tra kích thước file
  if (req.file.size > 10 * 1024 * 1024) {
    return res.status(400).send('File size exceeds the limit of 10MB.');
  }

  // Đọc nội dung của file CSV và lưu vào cơ sở dữ liệu
  const results = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Xóa file tạm sau khi đọc xong
      fs.unlinkSync(req.file.path);

      // Lưu dữ liệu vào cơ sở dữ liệu
      sequelize
        .sync()
        .then(() => {
          return DataModel.bulkCreate(results);
        })
        .then(() => {
          res.status(200).send('File uploaded and data inserted successfully.');
        })
        .catch((error) => {
          res.status(500).send('Error inserting data: ' + error.message);
        });
    });
});

const { DatabaseError } = require('sequelize');
// Khởi động server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
// npm install express multer csv-parser sequelize tedious


const xlsx = require('xlsx')

connect Database 
//config multer


const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,__basedir + '/uploads')
  },
  filename: (req,file,cb) => {
    cb(null, fule.fieldname + "-" + Date.now() + "-"+file.originalname)
  }
})

const upload = multer({storage:storage})

module.exports = upload