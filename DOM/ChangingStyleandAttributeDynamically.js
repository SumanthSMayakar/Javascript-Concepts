// Changing Attribute and style of webpage element.
// How to change the attribute value of a webpage element 
document.querySelector('img').src = "assets/images/bg.jpeg";
// document.querySelector('img').height ="200";
// document.querySelector('img').width = "500";

// ADD STYLES DYNAMICALLY TO WEBPAGE ELEMENT 
document.getElementById('heading').style.color = 'red';
// document.querySelector('.list').style.backgroundColor = 'yellow';

// ADDING AND REMOVING class FROM A WEBPAGE ELEMENT 
// Remove a class from a webpage element
// document.querySelector('.header').classList.remove('header');
document.querySelector('.list').classList.add('dynamic')