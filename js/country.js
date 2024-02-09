
const loadcountry =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displaycountry(data))
}
const displaycountry = countrys => {
    const container =document.getElementById('all-country');
    // for(const country of countrys ){
    // console.log(country)
    // }
    countrys.forEach( country =>{
        console.log(country.cca2);
        const countrydiv =document.createElement('div')
        countrydiv.classList.add('country');
        countrydiv.innerHTML =`
        <h3>name:${country.name.common}</h3>
        <p>capital:${country.capital} </p>      
        <p>continents:${country.continents} </p>
        <button onclick="countrydetails('${country.cca2}')">Details</button>     
         `;
         container.appendChild(countrydiv);
        
    });

}
 const countrydetails = code =>{
    const url =`https://restcountries.com/v3.1/alpha/co`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
 }
loadcountry();