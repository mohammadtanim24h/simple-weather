const searchTemp = () => {
    const city = document.getElementById('city-name-field').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35b0c1775eb6b6975fa5ef5df721589c&units=metric`)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temp => {
    setInnerText('city-name', temp.name);
}