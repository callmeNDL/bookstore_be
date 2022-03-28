import LoaiService from '../services/LoaiService'

let handleCreateNewLoai = async (req, res) => {
  let message = await LoaiService.createLoai(req.body);
  return res.status(200).json(message);
}
let handleDeleteLoai = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters!',


    })
  } else {
    let message = await LoaiService.deleteLoai(req.body.id);
    return res.status(200).json(message);
  }
}
let handleEditLoai = async (req, res) => {
  let data = req.body;
  let message = await LoaiService.editLoai(data);
  return res.status(200).json(message)
}
module.exports = {
  handleCreateNewLoai: handleCreateNewLoai,
  handleDeleteLoai: handleDeleteLoai,
  handleEditLoai: handleEditLoai,

}