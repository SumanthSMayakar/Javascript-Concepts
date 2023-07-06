// ASYNCHRONOUS CODE EXECUTION & EVENT LOOP 

console.log('Good morning user!');
setTimeout(function(){
    console.log('Hello, World');
}, 2000);
console.log('Have a nice day!');
fetch('https://someurl.com/api/resource') //it is special function which works asynchronously it works in webApi it loads and register and gets into microtask queue and executes in the callstack.
.then(function(response){
    console.log(response)
})

// OUTPUT 
// 1.Good morning user!
// 2.Have a nice day 
// 3.Hello, World 
// 4.response{...} 

//-------------------------------------------------------------------------------------------------------------------------------------

// CALLBACK QUEUE VS MICROTASK QUEUE 

//1. A callback function associated with an asynchronous code waits for its execution inside either a callback queue or microtask queue. 
// 2. Most of the callback function associated with an asynchronous code,have to wait for their execution in the callback queue.But there are some callback function, for example, the callback functions associated with the promise waits for the execution in the microtask queue. 
// 3. The callback functions in the microtask queue, takes priority over the callback functions in the callback queue i.e., the callback functions in microtask queue gets executed first

console.log('Program starts here');
setInterval(function(){
    console.log('setTimeout callback executed');
}, 0);
Promise.resolve('Resolved promise data')
.then(function(response){
    console.log(response);
    for(let i = 0; i < 100000000; i++)
    {}
})
console.log('Program ends here')

