// WHAT JAVASCRIPT CAN DO WITH WEBPAGES?
// You can accessing the webpage elements using Javascript programs. 
// You can change the contents of the web page dynamically with Javascript 
// With Javascript, you can manipulate webpage elements according to your need 
// You can also Add dynamic content to the webpage

// WHAT IS DOM ?
// DOM Stands for Document Object Model 
// DOM is structured representation of HTML elements as an object 
// When a webpage is loaded in the browser,the browser creates an object for each element of the HTML page in DOM. 
// Once the DOM is created for the webpage, we can access the DOM elements using scripts such as Javascript and can manipulate it 

// WHERE IS THIS DOCUMENT OBJECT PRESENT? 
// Javascript programs are executed in a runtime environment.When we run a Javascript program in browser, the runtime environment is teh browser  
//Every runtime environment has a global object.In case of browsers,the global object is the window Object

// WHERE IS THIS DOCUMENT CLASS PRESENT? 
// IT IS THIS WINDOW OBJECT, WHICH CONTAINS THE DOCUMENT OBJECT.

// HTML DOCUMENT NOT NECESSARILY REPRESENTS THE DOM 
// Although the DOM is created from the source HTML document, it is not always true, There are two instances where the DOM can be different from the source HTML. 

// 1. WHEN HTML IS NOT VALID 
// The DOM is an interface for valid HTML documents.During the process of creating the DOM,the browser may correct some invalidities in the HTML code,

// Eg:
// <!Doctype html>
// <html>
//     Hello, World!
// <html/>

// 2. WHEN DOM IS MODIFIED BY JAVASCRIPT
// Beside being the interface is viewing the content of HTML, DOM can also be modified using external scripts like JavaScript programs.

// IN THE BELOW EXAMPLE, DOM HAS BEEN CREATED BUT IT WILL NOT ADDED TO HTML DOCUMENT
// let newParagraph = document.createElement('p');
// let pContent = document.createTextNode('I am new!');
// newParagraph.appendChild(pContent);
// document.body.appendChild(newParagraph);

// SUMMARY 

// The HTML DOM is a standard object model and programming interface for HTML. it defines:
// 1. The HTML element as a object 
// 2. The Properties of all HTML elements 
// 3. The methods to access all HTML elements 
// 4. THe events for all HTML elements  

// In other words, the HTML DOM is standard for how to access,change,add or delete HTML elements 