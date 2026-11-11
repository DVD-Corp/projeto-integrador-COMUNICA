const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const signupForm = document.querySelector("#signup-form");
const formStatus = document.querySelector(".form-status");

if (signupForm && formStatus) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Cadastro realizado! Estamos abrindo seu espaço.";
    signupForm.reset();
    window.setTimeout(() => { window.location.href = "app.html"; }, 700);
  });
}

const loginForm = document.querySelector("#login-form");
const loginStatus = document.querySelector(".login-status");

if (loginForm && loginStatus) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginStatus.textContent = "Login realizado! Estamos preparando seu espaço.";
    const role = loginForm.querySelector("#login-role").value;
    loginForm.reset();
    window.setTimeout(() => { window.location.href = `app.html?role=${role}`; }, 700);
  });
}

document.querySelector(".login-options a")?.addEventListener("click", (event) => {
  event.preventDefault();
  if (loginStatus) loginStatus.textContent = "A recuperação de senha não está disponível neste protótipo.";
});
