import db from "../models/index"
import Sequelize from "sequelize"
const { Op } = require("sequelize")

const uploadFile = async (results,CIF) => {
    try {
        await db.Jobs.bulkCreate(results)
        
        // .then(() => {
        //     res.status(200).send('File uploaded and data inserted successfully.');
        //   })
        //   .catch((error) => {
        //     res.status(500).send('Error inserting data: ' + error.message);
        //   });
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    uploadFile: uploadFile
}