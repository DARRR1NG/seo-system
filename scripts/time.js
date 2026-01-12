const hoursPlace = document.querySelector('.hours')
const daysPlace = document.querySelector('.days')
const minutesPlace = document.querySelector('.minutes')
const secondsPlace = document.querySelector('.seconds')

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function timeData () {
  const time = new Date();

  const daysMonth = daysInMonth(time.getDate(), time.getFullYear())

  const daysRemained = daysMonth - 1 - time.getDate();
  const hoursRemained = 23 - time.getHours();
  const minutesRemained = 59 - time.getMinutes();
  const secondsRemained = 59 - time.getSeconds();


  hoursPlace.textContent = String(hoursRemained).padStart(2, '0');
  daysPlace.textContent = String(daysRemained).padStart(2, '0');
  minutesPlace.textContent = String(minutesRemained).padStart(2, '0');
  secondsPlace.textContent = String(secondsRemained).padStart(2, '0');
}

timeData();

setInterval(timeData, 1000)

