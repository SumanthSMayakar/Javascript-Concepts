// ASYNC AND AWAIT 

// JAVASCRIPT async await 

// async => executes a function asynchronously and returns a promise
// await -> it waits for a promise to get settled(it will block the rest of execution code)

// 1.The function runs asynchronously 
// 2.function returns a promise

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

let getPosition = function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            resolve,
            reject
        );
    });
}

let displayUserCountry = async function(){

    // get current coordinates of user 
    let position = await getPosition();
    let {latitude : lat, longitude : lng} = position.coords;

    // get info related to current coords of user 
    let geoResponse = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    let geoData =  await geoResponse.json();

    //get info related to the country location of the user
    let countryResponse = await fetch('https://restcountries.com/v3.1/name/'+geoData.country);
    let countryData = await countryResponse.json();

    // Display it in webpage 
    displayCountry(countryData[0]);
    console.log(countryData[0]);

}
displayUserCountry();

// let getCountryInfo = async function(){
//     let response = await fetch("https://restcountries.com/v3.1/name/usa");
//     let data =  await response.json()
//     console.log(data)
// }
// console.log(getCountryInfo());
// console.log('main thread executing')