var express = require('express');
const bookStore = require('../bookStore.js');
router = express.Router();


// Create (POST) a new book
router.post('/', (req, res) => {
  console.log(req.body);
    const { title, author, genre, publicationYear } = req.body;
    bookStore.addBook( title, author, genre, publicationYear);    
    //res.status(201).json({ message: 'Book created successfully.', book });
    res.redirect('/');
  });
  
;

  // Read (GET) all books
  router.get('/', (req, res) => {
    res.json(bookshelf);
  });

  // Read (GET) Add books
  router.get('/add', (req, res) => {
    res.render('addBook');
  })
  
  // Read (GET) a specific book by title
  router.get('/:title', (req, res) => {
    console.log('editing book '  + req.params.title);

    const title = req.params.title;
    const book = bookStore.findBook(title);
    
    if (book) {
      res.render('editBook', { book });
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  });
  
  // Delete a book by title
  router.post('/delete/:title', (req, res) => {
    console.log("Deleting the book");
    const title = req.params.title;
    let deletedBook = bookStore.removeBook(title);
  
    if (deletedBook) {
    
      console.log({ message: 'Book deleted successfully.', book: deletedBook });
      res.redirect('/');
    } else {
      console.log({ message: 'Book not found.' });
    }

  });

  // Update (PUT) a book by title
  router.post('/:title', (req, res) => {
    const title = req.params.title;
    const { author, genre, publicationYear } = req.body;
    const book = bookStore.updateBook(title,author, genre, publicationYear);
    
    if (book) {
      res.redirect('/');
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  });

  module.exports = router;
  