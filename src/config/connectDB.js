const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Pv_test", "sa", "123456789", {
  dialect: "mssql",
  host: "localhost",
  dialectOptions: {
    encrypt: true,
  },
  logging: false,
});

let connectDB = async () => {
  await sequelize
    .authenticate()
    .then((err) => {
      console.log("connect succed");
    })
    .catch((err) => {
      console.log("Connect Fail");
    });
};

module.exports = connectDB;
