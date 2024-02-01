const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`example App running on port ${port}`);
});

app.get('/', (req,res)=>{
    //Have to use PATH for physical files.
    //console.log(path.join(__dirname, "/index.html"));
    //res.sendFile(path.join(__dirname, "/index.html"));
    res.render("index", {books:bookShelf});
});

app.get("/books", (req,res)=>{
    res.json(bookShelf);
})

app.get('/add', (req, res)=>{
    res.render("add");
});

app.post('/add', (req, res)=>{
    console.log(req.body);
    const {author, genre, publicationYear, title} = req.body;
    addBook(title, author, genre, publicationYear);
    console.log(bookShelf);
    //REdirect to run logic in the default route
    res.redirect('/');
})

app.get('/edit/:title', (req, res)=>{
    console.log("editing book " + req.params.title);

    const title = req.params.title;
    const book = bookShelf.find(book=>book.title = title);

    console.log("Book - " + book);
    if(book){

        res.render("edit", {book});
    }
    else{
        res.status(404).json({message: "book not found"});
    }


});

app.post('/edit/:title', (req, res)=>{
    //Title is a parameter from the client.
    console.log("Saving the book " + req.params.title);
    const currentTitle = req.params.title;
    const {author, genre, publicationYear, title} = req.body;

    const book = bookShelf.find(book=>book.title = currentTitle);
    if(book){
        book.author = author;
        book.title = title;
        book.genre = genre;
        book.publicationYear = publicationYear;
        console.log("Book updated succesfully");
        res.redirect('/');
    }
    else{
        res.status(404).json({message: "book not found"});
    }

})

//Bookshelf - not a databse
let bookShelf = [];

function addBook(title, author, genre, publicationYear)
{
    const book = {
        title:title,
        author:author,
        genre:genre,
        publicationYear:publicationYear
    };
    bookShelf.push(book);
}