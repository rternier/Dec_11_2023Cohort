const bcrypt  = require('bcrypt');

let password='incorrect';

const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);
console.log('password: ' + password);
console.log('salt:  ' + salt);

//for(let i = 0;i<10;i++){
    let hashedPassword = bcrypt.hashSync(password, salt);
    console.log('Hashed Password  = ' + hashedPassword);
//}
//For basic authentication:
//User enters password, it gets hashed, compare hash with stored hashed password in DB
const compareValue = bcrypt.compareSync(password, hashedPassword);
console.log("Password: " + password + " is the same as " + hashedPassword + "? " + compareValue);


