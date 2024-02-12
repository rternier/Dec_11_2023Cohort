var express = require('express');
var accountStore = require('../accountStore.js');
router = express.Router();
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');


router.post('/login', (req,res)=>{
    const {username, password} = req.body;

    const account = accountStore.getAccountByEmail(username);
    console.log("Found account " + account);

    const passwordMatch = bcrypt.compareSync(password, account.password);

    if(account && passwordMatch)
    {
        console.log("They all match");          
        req.session.username = username;      
    }
    else{
        console.log("They don't match");        
    }
    res.redirect("/");

});

router.get('/',(req,res)=>{
    const accounts = accountStore.getAllAccounts(); 
    res.render('viewAccounts', {accounts, accounts});
});

router.post('/create', (req,res)=>{
    const {emailAddress, name, password} = req.body;
    const sr = 12;
    const salt = bcrypt.genSaltSync(sr);
    const hashedPassword = bcrypt.hashSync(password, salt);

    console.log('Password: ' + hashedPassword);
    const newAccount = accountStore.createAccount(emailAddress, name, hashedPassword);
    res.redirect('/');
});

router.get('/create', (req,res)=>{
    res.render("addAccount");
});

module.exports = router;