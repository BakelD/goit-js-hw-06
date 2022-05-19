const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const arrListEl = ingredients.map((el) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = el;
  listItemEl.classList.add("item");

  return listItemEl;
});

ingredientsEl.append(...arrListEl);
