

const idNumber = document.querySelector('.adviceId')
const adviceText = document.querySelector('.advice')

function fetchAdvice (){
    const api  ='https://api.adviceslip.com/advice'
    fetch(api)
    .then(res => res.json())
    .then(data =>{
        idNumber.textContent = `ADVICE ${data.slip.id}` 
        adviceText.textContent =  data.slip.advice
    })
}

