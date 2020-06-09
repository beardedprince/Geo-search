

const button = document.getElementById('submit');
const celInput = document.getElementById('cel');
const faraInput = document.getElementById('far');
const conversion_form = document.getElementById('conversionForm')

const darkmode = document.getElementById('switch')
const main = document.getElementById('body')

const answer = document.getElementById('conversion_answer')
const map = document.getElementById('map')
const getButton = document.getElementById('search')





darkmode.addEventListener('click', ()=> {
    main.classList.toggle('dark-mode')
    darkmode.classList.toggle('fa-sun')

})

// conversion of temparature
button.addEventListener('click', (e) => {
    e.preventDefault()
   const celcius = celInput.value;
   answer.textContent = converC(celcius);
   conversion_form.reset()
} )

faraInput.addEventListener('blur', (e) => {
    e.preventDefault()
   const faraheint = faraInput.value;
   answer.textContent = converF(faraheint);
   conversion_form.reset()
} )

const converC = function convertToFaraheint(input) {
    return ((input * 9/5) + 32)
}
  
const converF = function convertToCelcius(input) {
    return ((input -32) / 1.8)
}


const getName = document.getElementById('wind');
  
// fetch weather using api
getButton.addEventListener('click',  () => {
    const getWeatherInput = map.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${getWeatherInput}&appid=656a97293886e24789886d4e5b64c59a`;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      let icon = data.weather[0].icon;
      let description = data.weather[0].description;
      let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
      console.log('icon url', iconurl);
      document.getElementById('name').textContent = data.name
      document.getElementById('desc').textContent = description
      document.getElementById('w_icon').setAttribute('src', iconurl)
      document.getElementById('wind').textContent = data.wind.speed
      document.getElementById('humidity').textContent = data.main.humidity + "%"
      document.getElementById('temp').innerHTML = data.main.temp +  `<sup>o</sup>c`
    })
    .catch(err => { 
        throw err 
    });



    
})






