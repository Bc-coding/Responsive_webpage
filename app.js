const navButton = document.querySelector("button[aria-expanded]");
let links = document.querySelectorAll(".link");

function navToggle(e) {
  const expanded = e.target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);

  if (!expanded) {
    links.forEach((link) => {
      link.style.display = "grid";
    });
  }
  if (expanded) {
    links.forEach((link) => {
      link.style.display = "none";
    });
  }
}

navButton.addEventListener("click", navToggle);
