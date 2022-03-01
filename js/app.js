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
    setInnerText('temp-in-celcius', temp.main.temp);
    setInnerText('weather', temp.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    document.getElementById('condition-icon').setAttribute('src', url);
}