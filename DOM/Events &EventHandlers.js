// EVENT & EVENT HANDLERS 

// Event is something that happens to a webpage element 

// TYPES OF EVENTS 
// An event in JavaScript can be classified into 2 types 

// 1.Browser specific events:
// it happens on browser like - resizing browser window,scrolling up and down

// 2.DOM specific events:
// it happens on the webpage. for example, clicking a button,hovering over a webpage element, focusing a textbox etc 

// HOW TO HANDLE events IN JAVASCRIPT? 
// 1.inline event handler
// 2.Event handler properties
// 3.Using addEventListener() method 

// Inline Event Handler 
// Using inline event handler,you can react to a DOM event by:
// 1.Adding an attribute to the HTML element for which you want to handle event. 
// 2.The attribute name must be event name prefixed with on like onfocus,onclick,onmouseover. 
// 3.Assign any JavaScript expression to the attribute which you want to execute when that event happens 

// Event Handler Properties
// Using event handler properties you can react to a DOM event
// 1.Adding a property to the DOM element for which you want to handle event .
// 2.The attribute name must be event name prefixed with on like onfocus,onclick,onmouseover. 
// 3.Assign a JavaScript function to the property which ypu want to execute when tat event happens

let lName = document.getElementById('lname');
lName.onfocus = function(){
    lName.style.backgroundColor = 'yellow';
}
lName.onblur = function(){
    lName.style.backgroundColor = 'white';
}

let title = document.querySelector('#registration');
title.onmouseover = function(){
    title.style.color = 'red';
}
title.onmouseout = function(){
    title.style.color = 'black';
};
