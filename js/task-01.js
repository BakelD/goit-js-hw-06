const categoriesEl = document.querySelector("#categories");
const listEl = categoriesEl.children;

console.log(`number of categories: ${listEl.length}`);

[...listEl].forEach((list) => {
  const titleEl = list.firstElementChild;
  const innerListEl = list.querySelector("ul");

  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${innerListEl.children.length}`);
});
