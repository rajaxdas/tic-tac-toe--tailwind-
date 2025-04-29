const hamburger = document.querySelector("#hamburger");
const dropdownMenu = document.querySelector("#dropdown-menu");

hamburger.addEventListener("click", (event) => {
    event.stopPropagation();  // Prevent the click from propagating to the document
    hamburger.classList.toggle("open");
    dropdownMenu.classList.toggle("open");
});

// Close dropdown if the user clicks outside the hamburger menu or dropdown
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
        hamburger.classList.remove("open");
        dropdownMenu.classList.remove("open");
    }
});

