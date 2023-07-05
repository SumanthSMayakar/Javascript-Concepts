// FETCH API 

// WHAT IS FETCH API ? 

// The fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. 
// The fetch API returns the requested data as a promise, and we can use then and catch method on that promise to handle the data

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


// function getCountry(country){
//     //MAKE AJAX request
//     let promise1 = fetch('https://restcountries.com/v3.1/name/'+ country);
//     let promise2 = promise1.then(function(response){
//         console.log(response)
//         //json method returns a promise
//         return response.json();
//     })
//     promise2.then(function(data){
//         console.log(data)
//         displayCountry(data[0])
//     })
// }

// ANOTHER WAY WITHOUT ASSIGNING THE VARAIABLE 
function getCountry(country){
    //MAKE AJAX request
     fetch('https://restcountries.com/v3.1/name/'+ country)
    .then(function(response){
        console.log(response)
        //json method returns a promise
        return response.json();
    })
    .then(function(data){
        console.log(data)
        displayCountry(data[0])
    })
    .catch(function(error){
        console.log(error)
    })
    
}
getCountry('usa');
getCountry('germany');
getCountry('brazil');

// If the promise is resolved
// 1.The then method is attached to that promise will be called
// 2.To the callback function of then method, promise will pass the resolved data. 
// 3.Callback function of the then method is executed