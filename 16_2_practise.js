Function.prototype.describe = function () {
    console.log(`function name is ${this.name}`)
}


function greet(name){
    return `Hello ${name}`
}

greet.describe() // output function name is greet //gives name of the function which called

//  ////////////////////////////
// function declaration
function add(a,b){
    return a+b
}
// function expression

const sub = function(){
    return a-b
}

//////////////////////////////

// first class functions - we can pass functions in to function - learn more abput it 
function applyOperation(a,b, operation){
    return operation(a,b)
}

const result = applyOperation(1,2,(x,y)=>x+y)

// /////////////////////////////////////////////////

function createCounter(){
    let count = 0 ;
    return function(){
        count++;
        return count
    }
}


// IIFE 
(function(){
    console.log('prasad')
}) ()