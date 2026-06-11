const button = document.querySelector("button");
const titleInput = document.getElementById("title");
const categorySelect = document.getElementById("category");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    const title = titleInput.value;
    const category = categorySelect.value;

    if (!title) return;

    const item = document.createElement("p");
    item.textContent = `${title} (${category})`;

    list.appendChild(item);

    titleInput.value = "";
});
