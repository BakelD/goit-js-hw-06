function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberEl = document.querySelector('#controls [type="number"]');
const createBtnEl = document.querySelector('#controls [data-create]');
const destroyBtnEl = document.querySelector('#controls [data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const arrBoxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    size += 10;

    arrBoxes.push(box);
  }

  boxesEl.append(...arrBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  numberEl.value = 0;
}

createBtnEl.addEventListener('click', () => {
  const amount = numberEl.value;

  if (!amount) {
    return;
  }

  createBoxes(amount);
});

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
});
