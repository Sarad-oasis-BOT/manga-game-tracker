let works =
    JSON.parse(localStorage.getItem("works"))
    || [];const button = document.querySelector("button");
const titleInput = document.getElementById("title");
const categorySelect = document.getElementById("category");
const statusSelect = document.getElementById("status");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    const title = titleInput.value;
    const category = categorySelect.value;
    const status = statusSelect.value;

    if (!title) return;

    const item = document.createElement("div");

    const text = document.createElement("span");
    text.textContent =
`${title} (${category}) - ${status} `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", () => {
        item.remove();
    });

    item.appendChild(text);
    item.appendChild(deleteButton);

    works.push({
        title: title,
        category: category,
        status: status
    });

    localStorage.setItem(
        "works",
        JSON.stringify(works)
    );

    list.appendChild(item);

    titleInput.value = "";
});
console.log(works);
