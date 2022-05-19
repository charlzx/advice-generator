let adviceDiv = document.querySelector('#advice')
let adviceId = document.querySelector('#advice-id')
let adviceText = document.querySelector('#advice-text')
let button = document.querySelector('#button')

const generateAdvice = async () => {
   let request = await fetch('https://api.adviceslip.com/advice')

   if(request.status !== 200) {
      throw new Error('cannot not fetch advice')
   }

   let response = await request;

   return response.json();
}

generateAdvice()
   .then(data => {
      adviceId.textContent = `ADVICE #${data.slip.id}`;
      adviceText.textContent = `${data.slip.advice}`;
   })
   .catch(error => {
      console.log(error);
   })

// event for when the random button is clicked
button.addEventListener('click', () => {
   generateAdvice()
   .then(data => {
      adviceId.textContent = `ADVICE #${data.slip.id}`;
      adviceText.textContent = `${data.slip.advice}`;
   })
   .catch(error => {
      console.log(error);
   })
})