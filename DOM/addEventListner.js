// addEventListener method()

// Predefined function 
// function displayAlert(){
//     alert('You submitted the form')
// }

// document.getElementById('btn')
// .addEventListener('click',displayAlert)


// ANYONUMOS FUNCTION 
document.getElementById('btn')
.addEventListener('click',function(){
    alert('You submitted the form');
})

document.getElementById('email')
.addEventListener('focus',function(){
    this.style.backgroundColor = 'yellow';
})

document.getElementById('email')
.addEventListener('blur',function(){
    this.style.backgroundColor = 'white';
})