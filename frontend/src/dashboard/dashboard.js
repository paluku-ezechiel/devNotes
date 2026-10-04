import "../assets/styles/styles.scss";
import "./dashboard.scss";

const logo = document.querySelector("#logo");
const asideMenu = document.querySelector("aside");

logo.addEventListener("click", (event) => {
  asideMenu.classList.toggle("open");
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (
    asideMenu.classList.contains("open") &&
    !asideMenu.contains(event.target)
  ) {
    asideMenu.classList.remove("open");
  }
});
