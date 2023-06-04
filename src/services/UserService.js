import db from "../models/index";

const getAllUser = () => {
  return new Promise (async (resolve,reject) => {
    try {
      let users = await db.User.findAll({})
      resolve(users)
    } catch (error) {
      console.log(error)
    }
  })
}

const getUser = (userName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where : {username: userName},
        raw: true,
      });
      if(user) {
        resolve(user)
      } else {
        resolve([])
      };
    } catch (error) {}
  });
};

const getUserByCif = async (CIF) => {
  try {
    let user = await db.User.findOne({
      where: {CIF:CIF}
    })
    if(user) {
      return user
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
  }
}

const updatePassword = async (CIF, data) => {
  try {
    let user = await db.User.findOne({
      where: {CIF: CIF}
    })
    
      user.password = data.new_password
      await user.save()
      let updateUser = await db.User.findOne({
        where: {CIF:CIF}
      }) 
      return updateUser
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUser: getUser,
  getAllUser: getAllUser,
  getUserByCif: getUserByCif,
  updatePassword: updatePassword
};
