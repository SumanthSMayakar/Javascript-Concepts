// AJAX & XMLHttpRequest Object 

// WHAT IS AJAX? 
// 1.AJAX Stands for Asynchronous JavaScript and XML. 
// 2.AJAX is not a programming language,but it is a set of existing web technologies
// 3.AJAX helps in fetching data Asynchronously from a remote web server 
// 4.When the Data is loaded by AJAX,It is loaded asynchronously without page reload/refresh 
// 5.Modern websites uses JSON format instead of XML for data transfer  (it can be called through JSON data and not only from AJAX).

// ADVANTAGES OF USING AJAX 

// 1.AJAX loads data dynamically into a webpage without reloading the complete webpage.
// 2.It provides better user experience by not making the complete webpage unresponsive while loading the data into the webpage.  
// 3.It saves network bandwidth because only part of the webpage is being loaded and not complete web page. 
// 4.It makes the webpage more interactive. Since the request sent to the network is done in an asynchronous way, It will not make the page unresponsive. 

// XMLHttpRequest OBJECT CAN BE USED TO MAKE AJAX CALLS TO REQUEST DATA FROM THE REMOTE SERVER ASYNCHRONOUSLY.

document.getElementById('btn-load')
.addEventListener('click', getProducts);

let div = document.querySelector('.product');

function getProducts(){
    // 1.Create an XMLHttpRequest Object 
    let xhr = new XMLHttpRequest();

    // 2.Create the request 
    // method, url, sync/async, userid , pswd
    xhr.open('GET', 'products.json', true);

    // 3.Send the request 
    xhr.send();

    // when the request is sent and data is not completely loaded yet 
    xhr.onprogress = function(){
        div.textContent = 'Loading...';
    }

    xhr.onload = function(){
        // convert JSON to JS Object 
        let products = JSON.parse(xhr.responseText);
        let {arrayOfProducts} = products;

        arrayOfProducts.forEach((element) => {
            let html = `
            <div style = "display:flex; height:100px; margin:20px 10px;">
                <div> 
                    <img src="${element.imgUrl}" width="100px">
                </div>
                <div style="padding: 5px 10px">
                    <p> ${element.name} </p>
                </div>
                <div style="font-size: 12px; padding: 5px 10px">
                    <p> ${element.Description} </p>
                </div>
                <div style="padding: 5px 10px">
                    <p> ${element.price} </p>
                </div>
            </div>`;

            div.insertAdjacentHTML('beforeend', html);
        })
        // console.log(arrayOfProducts);
    }
}