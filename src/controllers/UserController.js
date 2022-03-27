import UserService from '../services/UserService'
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'

        })
    }
    let userData = await UserService.handleUserLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
let handleGetAllUsers = async (req, res) => {
    //let id = req.body.id;// Truyền ALL để lấy tất cả || id để lấy cụ thể
    let users = await UserService.getAllUsers();
    return res.status(200).json({
        errCode: 0,
        message: 'GET ALL USER SUCCESS',
        users
    })
}

let handleGetAllLoais = async (req, res) => {
    let loais = await UserService.getAllLoais();
    return res.status(200).json({
        errCode: 0,
        message: 'GET ALL LOAI SUCCESS',
        loais
    })
}
let handleCreateNewUser = async (req, res) => {
    let message = await UserService.createNewUser(req.body);
    return res.status(200).json(message);
}
let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters!',
            users
        })
    } else {
        let message = await userService.deleteUser(req.body.id);
        return res.status(200).json(message);
    }

}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleGetAllLoais: handleGetAllLoais,
    handleCreateNewUser: handleCreateNewUser,
    handleDeleteUser: handleDeleteUser,

}