/*
 I want to write a function that takes unlimited # of command line arguments
 goes through each one, and prints out the sum of them.

  if an agurment is a whole number, add it to the sum
  if an argument is not a whole number, ignore it
  do not support negative numbers
  do not support letters.
*/
const isValid = function(number){

    if(isNaN(number))
    {
        console.log("non number found! " + args[i]); //this is not safe!
        return false;
    }
    else if(number % 1 !== 0 )
    {
        console.log("number is a decimal") ;
        return false;
    }
    else if(number < 0)
    {
        console.log("Number is less than 0 (a negative)")
        return false;
    }
    return true;
}



const args = process.argv.slice(2);

    
let sum = 0;
console.log(args);

for(i = 0;i<args.length;i++)
{
    let number = Number(args[i]);

    if(isValid(number)){
        sum += number; //sum = sum + args[i]
    }
    
}


console.log(sum);

   
/*
addNumbers([1, 2, 3, "a", 1.1, -10]);
addNumbers([6, 2, 3, "a", 1.1, -10]);
addNumbers([9, 2, 3, "a", 1.1, -10]);
addNumbers([1, 4, .33, "a", 1.1, -10]);
addNumbers([1, 2, 3, "a", "b", 'b', 1.0, 0.0, -10]);
*/