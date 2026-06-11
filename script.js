const button = document.querySelector("button");
const titleInput = document.getElementById("title");
const categorySelect = document.getElementById("category");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    const title = titleInput.value;
    const category = categorySelect.value;

    if (!title) return;

    const item = document.createElement("div");

    const text = document.createElement("span");
    text.textContent = `${title} (${category}) `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(text);
    item.appendChild(deleteButton);

    list.appendChild(item);

    titleInput.value = "";
});
