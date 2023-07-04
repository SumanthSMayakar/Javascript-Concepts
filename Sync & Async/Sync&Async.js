// ASYNCHRONOUS JAVASCRIPT & AJAX 

// SYNC AND ASYNCHRONOUS PROGRAM 

//  SYNCHRONOUS PROGRAM 

// JavaScript is a single threaded programming language.That means there is only one thread which executes all the JavaScript Code.JavaScript engine can process only one statement at a Time. 
// 1.In synchronous programming, code is executed line by line in the order of its execution. 
// 2.If any part of the code is taking long time in its execution (due to long running operation, such as network access),then the next statement will have to wait for its execution to complete 
// 3.Most of the code which we write in JavaScript, is synchronous code

// EXAMPLE 1 
// let HelloWorld = function(){
//     console.log("Hello World")
// }

// let greetings = function(){
//     console.log('Good morning');
//     HelloWorld();
//     console.log('Have a good day!');
// }

// greetings();

// // EXAMPLE 2 

// let str = "Good Morning";
// console.log(str);
// alert('This is an alert window!');
// console.log('have a good day')

// ASYNCHRONOUS PROGRAM 

// In asynchronous program,we can execute a piece of code asynchronously in the background.An asynchronous code does not block the execution of next line of codes.
// There are many functions and API's provided by browsers WebAPI, which gets executed asynchronously in the background without blocking the code execution.One such function is setTimeout() function.
// 1.Asynchronous is non-blocking 
// 2.It does not stop the execution of main code. 

let str = 'Good Morning';
console.log(str);
setTimeout(function(){
    alert('This is an alert window!');
},5000);
console.log('Have a good day!')



