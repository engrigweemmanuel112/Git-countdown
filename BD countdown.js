// 2nd stage- Here we want to link the below Js function of days, hours, mins and seconds to the id class in HTML. To do thid we use (document.getElementById);

const daysEL = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// 1st stage- 

const birthdays = '13 april 2026';

function countdown() {
  const birthdaysDate = new Date(birthdays);
  const currentDate = new Date();

  const totalSeconds = (birthdaysDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds /60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // use this to get the inner HTML

  daysEL.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// the below function is used to add the seconds number in the timer has two digits like - instead  121:34:55:1 , you see 121:34:55:01 in sec.

function formatTime(time) {
  return time < 10 ? `0${time}`: time;

console.log(days,hours,mins,seconds);
}

// initial call 
countdown();

setInterval(countdown,1000);
