// Adding Elements Dynamically to webpage

//  1. CREATE A DIV ELEMENT 
let div = document.createElement('div');
div.classList.add('impor-update');
div.style.marginTop = "30px"

// 2.CREATE A TEXT CONTENT
// let textNode = document.createTextNode('This is a dynamically generated text content')
// div.appendChild(textNode);

// CREATE H2 ELEMENT 
let h2 = document.createElement('h2');
h2.textContent = "Important Update"
div.appendChild(h2);

let p = `<p>Here we have an important update for all our student.We are going to have a live free class on Thursday July 22,2021 to discuss about the new features in the latest release of ES2021.</p>`;

div.insertAdjacentHTML('beforeend',p);

// ADD DIV ELEMENT to WEBPAGE 
let containerDiv = document.querySelector('.container');
let listDiv = document.querySelector('.list')
containerDiv.insertBefore(div, listDiv);

/* <div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <text>Text Node</text>  <!-- appendChild is add here at the end of the all the child elements -->
</div> */