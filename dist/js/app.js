

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

const converC = function convertToFaraheint(input) {
    return ((input * 9/5) + 32)
}
  
const converF = function convertToCelcius(input) {
    return ((input - 32) / 1.8)
}

// conversion of temparature
celInput.addEventListener('blur', (e) => {
    e.preventDefault()
   const celcius = celInput.value;
   answer.textContent = converC(celcius) +  `F`;
   conversion_form.reset()
} )

faraInput.addEventListener('blur', (e) => {
    e.preventDefault()
   const faraheint = parseFloat(faraInput.value);
   answer.innerHTML = converF(faraheint) + `<sup>o</sup>c`;
   conversion_form.reset()
} )




const getName = document.getElementById('wind');
  
// fetch weather using api
getButton.addEventListener('click',  () => {
    const getWeatherInput = map.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getWeatherInput}&appid=656a97293886e24789886d4e5b64c59a`;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      let icon = data.weather[0].icon;
      let description = data.weather[0].description;
      let iconurl = "https://openweathermap.org/img/w/" + icon + ".png";
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

// get map

let autocomplete;
        
        function initMap() {
            var cordinates = { lat: 6.6459771, lng: 3.5148512 };
            var map = new google.maps.Map(document.getElementById("googleMap"), {
                zoom: 15,
                center: cordinates
            });

            var marker = new google.maps.Marker({
                position: cordinates,
                map: map,
                
                draggable: true,
                animation: google.maps.Animation.DROP,
              });

            marker.addListener('click', toggleBounce);
            
            let mapInput = document.getElementById('map')
            // let options = {
            //     types: ['establishment'],
            //     fields: ['place_id', 'geometry', 'name']
            // }
            autocomplete = new google.maps.places.Autocomplete(mapInput);

            // autocomplete.addEventListener('place_changed', onPlaceChanged); 
                       var geocoder = new google.maps.Geocoder();

            document.getElementById('search').addEventListener('click', function() {
                geocodeAddress(geocoder, map);
              });

        }

        function onPlaceChanged() {
            let place = autocomplete.getPlace();

            if(!place.geometry) {
                document.getElementById('map').placeholder = 'enter a place'
            } else {
                document.getElementById('googleMap').innerHTML = place.name
            }
        } 

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }

        function geocodeAddress(geocoder, resultsMap) {
            let address = document.getElementById('map').value;
            geocoder.geocode({'address': address}, function(results, status) {
                if (status === 'OK') {
                  resultsMap.setCenter(results[0].geometry.location);
                  var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                  });
                } else {
                  alert('Geocode was not successful for the following reason: ' + status);
                }
              });
        }
        




