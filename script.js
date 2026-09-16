// DARK MODE
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// FILTER
const filters = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filters.forEach(btn => {
    btn.onclick = () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let f = btn.dataset.filter;

        cards.forEach(card => {
            card.style.display =
                f === "all" || card.dataset.category === f
                ? "block"
                : "none";
        });
    };
});

// FAQ
document.querySelectorAll(".faq-item").forEach(item => {
    item.onclick = () => {
        let p = item.querySelector("p");
        p.style.display = p.style.display === "block" ? "none" : "block";
    };
});

// COUNTER
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let target = +counter.dataset.target;
    let count = 0;

    let interval = setInterval(() => {
        count++;
        counter.innerText = count;

        if (count >= target) clearInterval(interval);
    }, 30);
});
