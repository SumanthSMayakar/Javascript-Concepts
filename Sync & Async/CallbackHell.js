// CALLBACK HELL  

// Callback Hell, also known as Pyramid of DOOM,is an anti pattern seen in the code of asynchronous programming.
// we can write a callback function inside another callback function and so on (nested callback function)


// EXAMPLE-1 
// setTimeout(function(){
//     console.log('1st callback function called');
//     setTimeout(function(){
//         console.log('2nd callback function called')
//         setTimeout(function(){
//             console.log('3rd callback function called');
//             setTimeout(function(){
//                 console.log('4th callback function called');
//             }, 2000)
//         }, 3000)
//     }, 4000)
// }, 5000)

// 1.Makes the code look messy 
// 2.Code is less maintainable and less readable
// 3.More prone to bugs 

let countriesContainer = document.querySelector('.countries')
function  displayCountry(data){
    let html =
        `<article class="country">
            <img  class="country_img" src="${data.flags.png}" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"> ${((data.population)/1000000).toFixed(2)} M Total population</p>
            </div>
        </article>`;
        countriesContainer.insertAdjacentHTML("beforeend",html)
}
// Make Ajax Request 
function makeAjaxRequest(countryName){
    // 1.Create an XMLHttpRequest object 
    let xhr = new XMLHttpRequest();

    // 2.create the request 
    xhr.open('GET', 'https://restcountries.com/v3.1/name/'+countryName, true);

    // 3.Send request 
    xhr.send()

    return xhr;
}

function getCountry(){
    // Make an ajax request for usa 
    let req1 = makeAjaxRequest('usa')
    req1.addEventListener('load',function(){
        let [data] = JSON.parse(req1.responseText);
        displayCountry(data)
        

        // Make an ajax request for brazil
        let req2 = makeAjaxRequest('brazil')
        req2.addEventListener('load', function(){
            let [data] = JSON.parse(req2.responseText);
            displayCountry(data)


            // Make an ajax request for germany
            let req3 = makeAjaxRequest('germany')
            req3.addEventListener('load', function(){
            let [data] = JSON.parse(req3.responseText);
            displayCountry(data)
            });
        });
    });
} 
getCountry();
