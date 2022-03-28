import db from '../models/index';

let createLoai = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Loai.create({
        // maloai: DataTypes.STRING,
        // tenloai: DataTypes.STRING,
        maloai: data.maloai,
        tenloai: data.tenloai,
      })
      resolve({
        errCode: 0,
        errMessage: 'OK'
      })
    } catch (error) {
      reject(error);
    }
  })
}
let deleteLoai = (id) => {

  return new Promise(async (resolve, reject) => {
    //check id
    try {
      let loai = await db.Loai.findOne({
        where: { id: id },
        raw: false
      })
      if (!loai) {
        resolve({
          errCode: 2,
          errMessage: "loai is not exist"
        })
      } else {
        await loai.destroy();
      }
      resolve({
        errCode: 0,
        errMessage: "The loai is delete"
      })

    } catch (e) {
      reject(e)
    }
    re
  })
}
let editLoai = (data) => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Messing requited parameter"
        });
      }
      let loai = await db.Loai.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (loai) {
        // maloai: DataTypes.STRING,
        // tenloai: DataTypes.STRING,
        loai.maloai = data.maloai;
        loai.tenloai = data.tenloai;
        await loai.save();
        resolve({
          errCode: 0,
          errMessage: "update Book success!"
        })
      } else {
        resolve({
          errCode: 1,
          errMessage: "Book not found!"
        });
      }

    } catch (e) {
      reject(e);
    }
  })
}
module.exports = {
  createLoai: createLoai,
  deleteLoai: deleteLoai,
  editLoai: editLoai
}