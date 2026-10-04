import "./assets/styles/styles.scss";
import "./index.scss";

const btnLogin = document.querySelector("#btn-primary");

if (btnLogin) {
  btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    location.assign("/dashboard/dashboard.html");
  });
}
