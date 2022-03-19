import db from '../models/index';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let userIsExist = await checkUserEmail(email);
            if (userIsExist) {
                //user already exist ( da ton tai email nay)
                //compare password
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
                    raw: true
                });
                if (user) {
                    if (password == user.password) {
                        userData.errCode = 0;
                        userData.errMessage = 'Login ok!;';// dang nhap dung
                        delete user.password;
                        userData.user = user
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'wrong password!'// dang nhap sai mat khau
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'Your not exist!'
                }
                resolve(userData);

            } else {
                userData.errCode = 1;
                userData.errMessage = 'Your Email not exist!'
                resolve(userData)
            }
        } catch (error) {
            reject(e);
        }
    })

}
let checkUserEmail = (InputEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: InputEmail }
            });
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(e);
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                attributes: {
                    exclude: ['password']
                }
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}
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
let getAllLoais = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let loais = await db.Loai.findAll();
            resolve(loais);
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
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    getAllBooks: getAllBooks,
    getAllLoais: getAllLoais,
    getBook: getBook,
    createBook: createBook,
    deleteBook: deleteBook,
    editBook: editBook

}