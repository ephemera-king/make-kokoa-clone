const date = document.querySelector('.date'),
  clockTitle = date.querySelector('span');

function realTime() {
  const day = new Date();
  const hours = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();
  clockTitle.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
  realTime();
  setInterval(realTime, 0);
}
init();
