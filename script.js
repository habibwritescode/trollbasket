let timeHours = document.querySelector('.time__hours');
let timeMinutes = document.querySelector('.time__minutes');

const prefixTimeWithZero = (i) => {
  if (i < 10){
    i = "0" + i
  }
  return i
}

const startTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  minutes = prefixTimeWithZero(minutes);

  timeHours.textContent = hours;
  timeMinutes.textContent = minutes;

  setTimeout(startTime, 500);
}

startTime();
