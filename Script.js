
const container = document.getElementById("container");
const loading = document.getElementById("loading");

let count = 1;

function loadItems() {
    for (let i = 0; i < 5; i++) {
        const item = document.createElement("div");

        item.className = "item";
        item.textContent = "Item " + count;

        container.appendChild(item);
        count++;
    }
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadItems();
    }
});

loadItems();

observer.observe(loading);
