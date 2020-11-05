const hrHand = document.querySelector('.hr-Hand'); 
const minHand = document.querySelector('.min-Hand');
const secHand = document.querySelector('.sec-Hand');

setInterval(() =>{
  
  let presentDate = new Date();

  let presentHr = presentDate.getHours() * 30 - 90;
  let presentMin = presentDate.getMinutes() * 6 - 90;
  let presentSec= presentDate.getSeconds() * 6 - 90;

  hrHand.style.transform = `translate(0%, -50%) rotate(${presentHr + ((presentMin+90)/12)}deg)`;
  console.log(presentMin)
  minHand.style.transform = `translate(0%, -50%) rotate(${presentMin}deg)`;
  secHand.style.transform = `translate(-25%, -50%) rotate(${presentSec}deg)`;

}, 1000);