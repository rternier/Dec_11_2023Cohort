
/********* Nested Scope and SCope Chain ********/
let globalVar = 'I am global!';
let changingVar = "global"

function outerFunction() {
  let outerVar = 'I am outer!';
  changingVar = "outer"

  function innerFunction() {
    let innerVar = 'I am inner!';
    changingVar = "inner";

    console.log(outerVar); // can access outerVar
    console.log(globalVar); // can access globalVar
    console.log(innerVar); // can access innerVar

    console.log(changingVar);
    
  }
  console.log("Before calling inner  " +  changingVar);
  innerFunction();
  console.log("AFter calling inner  " +  changingVar);
  //console.log(innerVar); // ReferenceError: innerVar is not defined
}
console.log("Before calling outer  " +  changingVar);
outerFunction();
console.log("After calling outer  " +  changingVar);
//console.log(outerVar); // ReferenceError: outerVar is not defined