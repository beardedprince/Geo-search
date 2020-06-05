const button = document.getElementById('submit');
const celInput = document.getElementById('cel');
const faraInput = document.getElementById('far');
const conversion_form = document.getElementById('conversionForm')

const darkmode = document.getElementById('switch')
const main = document.getElementById('body')

const answer = document.getElementById('conversion_answer')

darkmode.addEventListener('click', ()=> {
    main.classList.toggle('dark-mode')
    darkmode.classList.toggle('fa-sun')

})


celInput.addEventListener('blur', (e) => {
    e.preventDefault()
   const celcius = celInput.value;
   const faraheint = faraInput.value;
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
    return input * 9/5 + 32
}
  
const converF = function convertToCelcius(input) {
    return ((input -32) / 1.8)
}
  
 

