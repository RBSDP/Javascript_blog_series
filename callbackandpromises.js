// lets understand what are callback functions
// callback functions are the functions which are passed in to other functions as arguments and executed later

// eg: 

function test(callback){ // test function took a function test2 and it is executed that function after sometime, this test2 is called as callback function.
    callback()
    console.log("callback function executed")
}

test(function test2(){console.log("i am callback function")}) 


// now as we understood the callback functions let understand async js
// by default js is syn single thread language, it executes code loine by line, but user can make is async wsing callback functions, async await, and promises
// promises are introduced after ES6, before that async operations like API calls are handeled using callback functions in js

// lets understand by an example : 

function fetchData(callback){

    setTimeout(() =>{
        console.log("data is fetched")
        callback()
    }, 5*1000)

}

function processData(callback){

    setTimeout(() =>{
        console.log("data is processed")
        callback()
    }, 5*1000)

}

function displayData(){
    console.log("data")
}

fetchData(() => {processData( () => {displayData ()})}) 


// promises
// Promises are introduced in ES6 update of js
// using promises we can haldle async operation in a better way

function fetchData(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucesses = true
            if(sucesses){
                resolve("Data is fetched")
            }else{
                reject("data ia not there")
            }
        }, 1000 *2);
    })
}

//this above function returns a promise,
// promise states 
// 1)initial state : pending 
// 2)fulfilled state : resolved
// 3)rejected state : rejected

// if we get the desired result, our promise will get resolved and fetchData will retuen the desired data
// if we dont get the desired result either we did not get requiured response from server out code will get rejected


// Chaining in promises 
// if we want to execute sequence of async tasks in a sequential manner we use chaining
// lets understand this by using an example

//  eg : getData().then(task1).then(task2).catch(err) 
// so here getData is an async task and task1 and task2 are dependent on result on getDate, so we chain them in way that once GetData returns
// the result then task1 is executed and task2 and iif there are any errors they will caught in catch()

fetchData().then((data) =>  console.log(data)).catch((err)=> console.log(err))

// another way to implement async tasks is "async" and "await"

// async in front of function makes a function return a promise 
// The await keyword can only be used inside an async function. 
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues

