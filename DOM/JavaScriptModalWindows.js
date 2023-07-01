// MODAL WINDOW 
// When the model window appears on the webpage then the webpage become irresponsive.(They pause javascript code to execute)


// Modal windows 
// in JavasScript, there are three modal window
// 1.Alert => Used to show message to the user 
// 2.prompt => Used to take input from the user 
// 3.confirm => Used to get confirmation from the user

// 1.Alert => Used to show message to the user 
// alert('Welcome to this javaScript course'); 


// 2.prompt => Used to take input from the user 
// 1.returns the value entered in the input field when Ok button is clicked
// 2.empty string is returned if nothing is entered in the input field and Ok button is clicked
// 3.null is returned when user clicks on cancel button 
// 4. prompt window returns the string value
// let age = prompt('enter your age',20);
// console.log(age);


// 3.confirm => Used to get confirmation from the user
// returns true value if user clicks on Ok button
// returns false value if user clicks on Cancel button

let del = confirm('really want to delete this file');
console.log(del)
if (del){
    // write the logic to delete the item 
}
