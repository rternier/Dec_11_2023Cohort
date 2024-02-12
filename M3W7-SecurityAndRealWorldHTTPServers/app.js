const express = require('express') //npm install this and ejs
const bodyParser = require('body-parser');//npm install this
const path = require('path')
const bookStore = require('./bookStore.js');
const accountStore = require ('./accountStore.js');
const cookieSession = require('cookie-session');


// Example usage
bookStore.addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925);
bookStore.addBook('To Kill a Mockingbird', 'Harper Lee', 'Classic', 1960);
bookStore.addBook('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 'Fantasy', 1997);

const app = express()
const port = 3000


app.set('view engine', 'ejs');
app.use(express.json());
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({
  name:'session',
  keys:['apple', 'pear', 'orange'],
  maxAge: 1000000,
}))
app.use(setUserInViews);


const bookRoutes = require('./routes/bookRoutes')
const accountRoutes = require('./routes/accountRoutes');
app.use('/books', bookRoutes);
app.use('/account', accountRoutes);


app.use((req, res, next) =>{
 

  next();
});


//Add the styles directory to the static path.
app.use('/public',express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {

    res.render('index', {books: bookStore.getBooks()});
})

function setUserInViews(req, res, next){
  res.locals.user = null
  if(req.session && req.session.username){
    const user = accountStore.getAccountByEmail(req.session.username);
  
    res.locals.user = null;
    if(user){
      res.locals.user = user;
    }
    console.log(  res.locals.user);
    
  }
  next();
}

