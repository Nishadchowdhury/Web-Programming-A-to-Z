const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displyCountries(data))
}
loadCountries()

const displyCountries = countries => {
    /* for (const country of countries){
        
    } */
    const divContainer = document.getElementById('countries');

   countries.forEach(country => {

        const countryNmae = country.name;
        const capitalNmae = country.capital;
        const div = document.createElement('div');
        div.classList = 'country';

    div.innerHTML =
    `
    <h3>Name:- ${countryNmae} </h3>
    <p>Capital:- ${capitalNmae} </p>
    <button onclick="loadCountryDetailByNmae('${country.name}')">Detaild</button>

    `
    divContainer.appendChild(div)

   })
}

const loadCountryDetailByNmae = name => {
    
    const url = `Https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => alert(`${data[0].name}, population:- ${data[0].population}`))
}
const displyCountryDetail = country => {
    
const detailsContainer = document.getElementById('details');
    detailsContainer.innerText = 'red';
}