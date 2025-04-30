const hamburger = document.querySelector("#hamburger");
const dropdownMenu = document.querySelector("#dropdown-menu");

hamburger.addEventListener("click", (event) => {
  event.stopPropagation();

  const isActive = dropdownMenu.getAttribute("data-current") === "true";

  dropdownMenu.setAttribute("data-current", isActive ? "false" : "true");
});