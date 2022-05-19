const incrementBtnEl = document.querySelector("[data-action='increment']");
const decrementBtnEl = document.querySelector("[data-action='decrement']");
const displayEl = document.querySelector("#value");

let counterValue = 0;

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;

  display();
});

decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;

  display();
});

function display() {
  displayEl.textContent = counterValue;
}
