//A function that goes through an array in reverse
const forEachInReverse = function(items, func){
    for(let i = items.length-1;i>=0;i--){
        func(items[i], i);
    }
}

const a = ['ryan', 'jack', 'kevin', 'monica'];


forEachInReverse(a, (word, index) =>{
    console.log(word + " is at index " + index);    
});


function writeItOut(word, index){
    console.log(word + " is at index " + index);  
}

forEachInReverse(a, writeItOut);


