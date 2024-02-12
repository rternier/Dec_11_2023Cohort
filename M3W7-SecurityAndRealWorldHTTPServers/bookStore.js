// Initialize the bookshelf as an empty array
let bookshelf = [];

// Function to add a book to the bookshelf
function addBook(title, author, genre, publicationYear) {
    console.log("Adding a Book: " + title)
    const book = {
        title: title,
        author: author,
        genre: genre,
        publicationYear: publicationYear
  };

  // Add the book to the bookshelf
  bookshelf.push(book);
  return book;
}

function updateBook(title, author, genre, publicationYear)
{
    const book = bookshelf.find(book => book.title === title);
    
    if (book) {
        book.author = author;
        book.genre = genre;
        book.publicationYear = publicationYear;
        console.log({ message: 'Book updated successfully.', book });
        return book;
      }
}

// Function to remove a book from the bookshelf
function removeBook(title) {
  // Find the index of the book with the matching title
  const index = bookshelf.findIndex(book => book.title === title);

  if (index !== -1) {
    // Remove the book from the bookshelf using the index
    var book = bookshelf.splice(index, 1);
    console.log(`Book "${title}" has been removed from the bookshelf.`);
    return book;
  } else {
    console.log(`Book "${title}" not found on the bookshelf.`);
    
  }
}

function findBook(title){
    const book = bookshelf.find(book => book.title === title)
    if(book)
        return book;
    else{
        console.log(`Unable to find ${title}.`);
    
    }
}


const getBooks = () =>  bookshelf;

module.exports = {
    addBook : addBook,
    removeBook : removeBook,
    getBooks : getBooks,
    findBook : findBook,
    updateBook : updateBook
}

// Example usage
// addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925);
// addBook('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960);
// addBook('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 'Fantasy', 1997);