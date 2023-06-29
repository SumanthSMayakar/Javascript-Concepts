// THE getElementById() METHOD 
// The getElementById() method returns a webpage element that has the id attribute same as the id value specified in getElementById() method.

// ACCESSING AND MANIPULATING DOM ELEMENTS 
// 1. getElementById() returns null if no webpage element is present with specified Id.
// 2. If more than one element with the same Id is present in the webpage, then only first element will be returned. 
let x = document.getElementById('xyz');
console.log(x)

let p = document.getElementById('intro');
console.log(p)

// THE querySelector() METHOD 
// The  querySelector(id,className,tagName) method returns the first webpage element that matches a specified CSS selector in the document 
// 1. querySelector method returns null if no webpage element is present with specified Id, class or tag 
// 2. If more than one element with the same Id is present in the webpage, then only first element will be returned. 
let div = document.querySelector('.list');
// console.log(div);
let h1 = document.querySelector('#heading');
// console.log(h1);
let img = document.querySelector('img');
// console.log(img);


// HOW TO READ WEBPAGE ELEMENT DATA
// textContent property is used to read the content of webpage element 
let pContent = p.textContent;
console.log(pContent);

// innerHTML - returns the HTML content of a webpage element 
let divContent = div.innerHTML;
console.log(divContent)

// MODIFYING WEBPAGE CONTENT 
document.getElementById('dynamicContent').textContent = 'This is a dynamically generated paragraph';

div.innerHTML = `<table border = "1">
    <tr>
        <td>1</td><td>Accessing DOM element</td>
    </tr>
    <tr>
        <td>2</td><td>Modifying DOM element</td>
    </tr>
    <tr>
        <td>3</td><td>Adding new DOM element</td>
    </tr>
    <tr>
        <td>4</td><td>Removing existing DOM element</td>
    </tr>
</table>`


