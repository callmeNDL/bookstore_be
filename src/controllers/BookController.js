import BookService from '../services/BookService'

let handleGetAllBooks = async (req, res) => {
  let books = await BookService.getAllBooks();
  return res.status(200).json({
    errCode: 0,
    message: 'GET ALL BOOK SUCCESS',
    books
  })
}
let handleGetBook = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!'

    })
  }

  let book = await BookService.getBook(id);

  return res.status(200).json({
    errCode: 0,
    message: 'GET ALL LOAI SUCCESS',
    book
  })
}
let handleCreateBook = async (req, res) => {
  let message = await BookService.createBook(req.body);
  return res.status(200).json(message);
}
let handleDeleteBook = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters!',


    })
  } else {
    let message = await BookService.deleteBook(req.body.id);

    return res.status(200).json(message);

  }
}
let handleEditBook = async (req, res) => {
  let data = req.body;
  let message = await BookService.editBook(data);
  return res.status(200).json(message)
}
let getBook = async (req, res) => {
  let min = req.query.min;
  let max = req.query.max;

  if (!min || !max) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter gia!'
    })
  }

  let bookData = await BookService.BookTheoGia(min, max);

  return res.status(200).json({
    errCode: 0,
    message: 'GET sach theo min max',
    bookData
  })
}
module.exports = {
  handleGetAllBooks: handleGetAllBooks,
  handleGetBook: handleGetBook,
  handleCreateBook: handleCreateBook,
  handleDeleteBook: handleDeleteBook,
  handleEditBook: handleEditBook,
  getBook: getBook
}