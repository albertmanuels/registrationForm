let countries;

const countriesList = document.getElementById('countries');
countriesList.addEventListener('change', event => {
    displayCountryInfo(event.target.value);
});

fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error: ", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    countries.forEach(country =>
        options += `<option value="${country.alpha3Code}">${country.name} (+${country.callingCodes})</option>`)

    countriesList.innerHTML = options;
}

function displayCountryInfo(countryIdentityByAplha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryIdentityByAplha3Code);
    console.log(countryData);
    document.getElementById('dialing-code').setAttribute("value", `+${countryData.callingCodes[0]}`);
}

// reset Form
let resetForm = () => {
    document.getElementById('form').reset();
};

// Validating
let btnRegister = document.getElementById('register');
btnRegister.addEventListener('click', () => {
    if (!this.form.checkbox.checked) {
        alert('You must agree to the terms and conditions first.');
        return false;
    } else {
        alert('Submitted!');
        return resetForm();
    }
});