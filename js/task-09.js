function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const outputEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  outputEl.textContent = color;
});
