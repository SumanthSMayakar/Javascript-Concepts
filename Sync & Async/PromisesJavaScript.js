// JAVASCRIPT PROMISES 

// WHAT IS A PROMISE ?

// A promise is a special JavaScript Object which is used as a place holder for the future result of an asynchronous operation

// A JavaScript Promise,promises a result 
// Every promises has an executer function that gets executed immediately when we create a promise 
// initially,when the promise is created, it is in pending state. The data returned by the promise in pending state is undefined 
// The state of the promise changes to settled when the promise is either resolved or rejected. 
// If the promise is resolved then it returns the resolved data. Otherwise, if the promise is rejected it returns the rejected data(i.e some error message)
 
// Example 1
// let promise = new Promise(function(resolved,rejected){
//     console.log('executor is executed');
//     resolved([20,30,40,50]);
//     // rejected("Something went wrong");
// })
// console.log(promise);


// Example 2 
// producing code 
let promise = new Promise(function(resolved,rejected){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',"data.txt",true);
    xhr.send();

    xhr.onload = function(){
        if(xhr.statusText === 'Ok'){
            resolved(xhr.responseText);
        }else{
            rejected("Something went wrong .Please try again later")
        }
    }
});

// consuming code 
promise.then(function(data){
    console.log(data);
});
promise.catch(function(error){
    console.log(error);
});

// A PROMISES HAS A TWO IMPORTANT METHOD 
// 1.then
// 2.catch 

// Then then method takes a callback function as its parameter which gets executes when the promise is resolved.It also takes a second optional callback function which gets executed when the promise is rejected. 
// If we are only interested in handling errors, then we can pass null as a first parameter for then method and a second callback function to handle error. 
// Or we can use the catch method to handle the error only. 

    