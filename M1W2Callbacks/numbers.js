function calcAverage(numbers)
{
    const sum = numbers.reduce((acc, num)=>acc+num, 0);
    return sum / numbers.length;
}

function calcSum(numbers){
    const sum = numbers.reduce((acc, num)=>acc+num, 0);
    return sum
}

//higher order function for calcualting

function calculateValues(calcFunction, values){
    //input validation
    if(!calcFunction || typeof calcFunction !== 'function')
    {
        console.log("invalid calc function");
        return null;
    }

    if(!Array.isArray(values) || values.length == 0)
    {
        console.log("Invalid number array")
        return null;
    }

    //logging
    console.log("input values " ,  values)

    const val = calcFunction(values);
    console.log(val);

}

const numbers = [1, 2, 3, 4, 5];
calculateValues(calcAverage, numbers);
calculateValues(calcSum, numbers);

