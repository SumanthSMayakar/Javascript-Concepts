// AJAX REQUEST TO WEB API 

// WHAT IS AN API ?
// API stands for Application Programming Interface
// An API is a piece of software that can be used by another software in order to allow the applications to talk to each other.

let countriesContainer = document.querySelector('.countries')

function getCountry(countryName){
    // 1.Create an XMLHttpRequest object 
    let xhr = new XMLHttpRequest();

    // 2.create the request 
    xhr.open('GET', 'https://restcountries.com/v3.1/name/'+countryName, true);

    // 3.Send request 
    xhr.send()

    xhr.addEventListener('load',function(){
        let [data] = JSON.parse(xhr.responseText);
        // let countryData = data[0]
        let html =
        `<article class="country">
            <img  class="country_img" src="${data.flags.png}" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"> ${data.population} Total population</p>
              
            </div>
        </article>`;
        // <p class="country_row"> <span class="ion-ios-mic"></span>${data.languages[0]}</p>
        // <p class="country_row"> <span class="ion-social-usd"></span> ${data.currencies.name} </p>
        countriesContainer.insertAdjacentHTML("beforeend",html)
        // console.log(data)
    })
} 
getCountry('usa')
getCountry('brazil')
getCountry('germany')