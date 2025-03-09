// lets understand how js code runs and how it works
// we will learn it using "setTimeout(function, delay);"" function - this function delays the execution of the function that is defined.


// when the js code starts to run, it created a executional context (it means how js code is executed in js) : 
// it has two phases
// 1) memory phase
// 2)code phase

// 1)Memory phase - in memory phase all the varaibles and constants and functions defined in the code are read and are assigned "undefined" as their value
// in the code phase all the varables , constants and functins are assinged with their original values.

//each and every line of code that we written in js will go to call stack (call statck is nothing but how js executes the code ) each and every line of code comes in to call stack
// and code gets executed line by line, once the code is execute its scope is removed from stack.

// eg :
let name = " prasad"; //this line will go first
console.log(name) // then this line is executes 
// now the program ends and the scope of the varaiable is deleted from call stack


// in js we also user API's  - but api's take some respond, but js dont stop for these API response
// in this case these apis return a promise which means now theya re unable to load, but they ill give response in future
// so as per normal flow, code runs and its referene is deleted from callstack, but the api calls will will puched to,
// microtask queue, so these pending api tasks will be waiting here once the response comes from server,
// they will be again pushed in to call stack for execution

// in js we want functions like setTimeOut and setIntervel, in the case of these functions,
// js pudh these functions into taskqueue/ callback queue becauser these functions take little bit time to get executed

// micro task queue have more priroty tham task queue, which means the code in microtask queue willl get executed first


// Event loop is a process which checks for any tasks in both microtask and task queue and pushes them in to call stack.
// there is a concept called starvation in js, starvation occurs when tasks in microtask queue keeps on poping up and
// not allowing tasks in task queue to execute.

// todo : starvation in js 

