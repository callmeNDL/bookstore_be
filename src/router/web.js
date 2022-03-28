import express from "express";
import HomeController from "../controllers/homeController";
import UserController from "../controllers/UserController";
import BookController from "../controllers/BookController";
import LoaiController from "../controllers/LoaiController";


let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', HomeController.getHomePage)


    router.get('/ndl', (req, res) => {
        return res.send('rest api ndl ')
    })

    //api get user with login
    router.post('/api/login', UserController.handleLogin);
    //api get all user
    router.get('/admin/get-all-users', UserController.handleAdminGetAllUsers);
    router.get('/api/get-all-users', UserController.handleGetAllUsers);
    router.post('/api/create-new-user', UserController.handleCreateNewUser);
    router.delete('/api/delete-user', UserController.handleDeleteUser);
    router.put('/api/edit-user', UserController.handleEditUser);

    // api get all Book
    router.get('/api/get-all-books', BookController.handleGetAllBooks);
    //api get all Loai;;
    router.get('/api/get-all-loais', UserController.handleGetAllLoais);
    router.post('/api/create-new-loai', LoaiController.handleCreateNewLoai);
    router.delete('/api/delete-loai', LoaiController.handleDeleteLoai);
    router.put('/api/edit-loai', LoaiController.handleEditLoai);
    //api crud book
    router.get('/api/get-book', BookController.handleGetBook);
    router.post('/api/create-book', BookController.handleCreateBook);
    router.delete('/api/delete-book', BookController.handleDeleteBook);
    router.put('/api/edit-book', BookController.handleEditBook);

    return app.use("/", router);
}

module.exports = initWebRouters;