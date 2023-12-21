/*
 Functions as Values
*/

function sayHello(name){
    console.log("Hello, World, " + name);
}

function doNotSayHello(name){
    console.log("I'm not saying hello to you " + name);
}

function greet(name, successfulGreeting, nonSuccessfulGreeting){
    if(name == "ryan")
        successfulGreeting(name);
    else
        nonSuccessfulGreeting(name);
  
}

greet("ryan", sayHello, doNotSayHello);


