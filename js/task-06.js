const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", () => {
  const validLength = Number(inputEl.dataset.length);
  const data = inputEl.value;

  data.length === validLength ? displayCorrect(inputEl) : displayWrong(inputEl);
});

function displayCorrect(node) {
  node.classList.add("valid");
  node.classList.remove("invalid");
}

function displayWrong(node) {
  node.classList.add("invalid");
  node.classList.remove("valid");
}
