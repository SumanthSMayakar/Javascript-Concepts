// COLLECTING FORM DATA 
// HOW TO COLLECT DATA FROM TEXT BOXES 

let fname = document.getElementById('fname').value;
console.log(fname);

let lname = document.getElementById('lname').value;
console.log(lname);

let email = document.getElementById('email').value;
console.log(email);

// getting selected value from a dropdown list 
let country = document.querySelector('#country').value;
console.log(country);

//getting value of checked radio button
let gender = document.querySelector("input[name='gender']:checked").value;
console.log(gender)

 //selecting all checked checkboxes
 let hobbies = [];
 let checkboxes = document.getElementsByName('hobbies[]');//document.getElementByName() returns Nodelist in the form of array
 for(let i = 0; i<checkboxes.length; i++){
    if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value)
    }
   }
   console.log(hobbies) 