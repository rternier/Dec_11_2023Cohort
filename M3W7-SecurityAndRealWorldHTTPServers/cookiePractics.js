const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

const app = express();
const port = 3000;

app.use(cookieSession({
    name:'session',
    keys:['abc', 'def', 'ghi'],
    maxAge: 24*60*60*1000 //1 day
}));

app.use(cookieParser());
app.listen(port, ()=>console.log(`listening on port ${3000}`));

app.get('/set-cookie', (req, res) =>{
    res.cookie('message','Hello World! a New Cookie');
    res.send('<div>Plain cookie sent </div>');
});

app.get('/get-cookie', (req, res)=>{
    res.send(`<div>Plain Coookie Value  ${req.cookies['message']} </div>`);
})

//hashed with bcrypt
app.get('/set-hashed-cookie', (req, res) =>{
    res.cookie('hashed-message',bcrypt.hashSync('Hello World! a New Cookie', 10));
    res.send('<div>Plain cookie sent </div>');
});

app.get('/get-hashed-cookie', (req, res)=>{
    res.send(`<div>Plain Coookie Value  ${req.cookies['hashed-message']} </div>`);
})

//session
app.get('/set-session', (req, res) =>{
    req.session.message = "hello, world from a session";
    req.session.message1 = "hello, world from a session1";
    req.session.message2 = "hello, world from a session2";
    req.session.message3 = "hello, world from a session3";
    res.send('<div>Session set </div>');
});

app.get('/get-session', (req, res)=>{
    res.send(`<div>Session  Value  ${req.session.message}</div>`);
})

