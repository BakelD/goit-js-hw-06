const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const text = inputEl.value;

  if (!inputEl.value) {
    outputEl.textContent = "Anonymous";
    return;
  }

  outputEl.textContent = text;
});
