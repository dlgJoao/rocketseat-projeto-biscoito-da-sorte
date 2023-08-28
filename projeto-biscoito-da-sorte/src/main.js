import * as elements from './elements.js';

elements.messageButton.addEventListener('click', handleMessageButton);
elements.newCookieButton.addEventListener('click', toggleScreen);

function handleMessageButton() {
  toggleScreen();

  let luckyElem = document.querySelector('.lucky');
  luckyElem.style.animation = "emerge 1s forwards";
}

function toggleScreen() {
  elements.screen1.classList.toggle('hide');
  elements.screen2.classList.toggle('hide');
}