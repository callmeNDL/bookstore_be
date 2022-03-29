import db from '../models/index';
const { Op } = require('sequelize')

let getAllBooks = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let books = await db.Book.findAll();
      resolve(books);
    } catch (error) {
      reject(error);
    }
  })
}

let getBook = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let book = '';
      if (id === 'ALL') {
        book = await db.Book.findAll();
      }
      if (id && id !== 'ALL') {
        book = await db.Book.findOne({
          where: { id: id }
        });

      }
      resolve(book);
    } catch (e) {
      reject(e);
    }
  })
}
let BookTheoGia = (min, max) => {
  return new Promise(async (resolve, reject) => {
    try {
      let book = '';
      console.log("min", min);
      book = await db.Book.findAll({
        where: {
          gia: {
            [Op.gte]: min,
            [Op.lte]: max,
          }

          // },
        },
        raw: false
      })

      resolve(book);
    } catch (e) {
      reject(e);
    }
  })
}
let createBook = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Book.create({
        masach: data.masach,
        tensach: data.tensach,
        mota: data.mota,
        gia: data.gia,
        hinh: data.hinh,
        manxb: data.manxb,
        maloai: data.maloai
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
let deleteBook = (id) => {

  return new Promise(async (resolve, reject) => {
    //check id
    try {
      let book = await db.Book.findOne({
        where: { id: id },
        raw: false
      })
      if (!book) {
        resolve({
          errCode: 2,
          errMessage: "book is not exist"
        })
      } else {
        await book.destroy();
      }
      resolve({
        errCode: 0,
        errMessage: "The book is delete"
      })

    } catch (e) {
      reject(e)
    }
    re
  })
}
let editBook = (data) => {
  return new Promise(async (resolve, reject) => {
    try {

      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Messing requited parameter"
        });
      }
      let book = await db.Book.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (book) {
        book.tensach = data.tensach;
        book.mota = data.mota;
        book.gia = data.gia;
        book.hinh = data.hinh;
        book.manxb = data.manxb;
        book.maloai = data.maloai;
        await book.save();
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
  getAllBooks: getAllBooks,
  getBook: getBook,
  createBook: createBook,
  deleteBook: deleteBook,
  editBook: editBook,
  BookTheoGia: BookTheoGia

}