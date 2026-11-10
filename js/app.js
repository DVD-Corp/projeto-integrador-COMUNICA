const views = document.querySelectorAll(".app-view");
const navItems = document.querySelectorAll("[data-view]");
const role = new URLSearchParams(window.location.search).get("role") || "usuario";

const roleConfig = {
  usuario: { label: "Usuário", name: "Ana Silva", welcome: "Olá, Ana. Bom te ver!" },
  dono: { label: "Dono de comunidade", name: "Marina Lima", welcome: "Olá, Marina. Sua comunidade está ativa!" },
  admin: { label: "Administrador", name: "Equipe Comunidade", welcome: "Olá, equipe. Veja o que está acontecendo!" },
};

const currentRole = roleConfig[role] || roleConfig.usuario;
document.querySelector(".profile-mini strong").textContent = currentRole.name;
const initials = currentRole.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);
document.querySelector(".profile-mini .avatar").textContent = initials;
document.querySelector(".top-actions .avatar").textContent = initials;
const greeting = document.querySelector(".app-welcome h1");
greeting.innerHTML = role === "usuario"
  ? "Olá, Ana. <span>Bom te ver!</span>"
  : role === "dono"
    ? "Olá, Marina. <span>Sua comunidade está ativa!</span>"
    : "Olá, equipe. <span>Visão geral da plataforma.</span>";
document.querySelector(".app-welcome p:not(.eyebrow)").textContent = role === "admin"
  ? "Acompanhe comunidades, usuários e indicadores da plataforma."
  : role === "dono"
    ? "Gerencie seu espaço e acompanhe as pessoas que fazem parte dele."
    : "Encontre seu lugar e participe de conversas que fazem sentido para você.";

if (role === "usuario") {
  document.querySelector('[data-view="admin"]')?.remove();
} else if (role === "dono") {
  document.querySelector('[data-view="admin"]').innerHTML = "▤ <span>Gerenciar comunidade</span>";
} else if (role === "admin") {
  document.querySelector('[data-view="admin"]').innerHTML = "▤ <span>Administração</span>";
}

function showView(viewName) {
  const target = document.querySelector(`#${viewName}-view`);
  if (!target) return;
  views.forEach((view) => view.classList.toggle("active-view", view === target));
  document.querySelectorAll(".app-nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navItems.forEach((item) => item.addEventListener("click", () => showView(item.dataset.view)));
document.querySelectorAll(".join-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent === "Participar" ? "Participando ✓" : "Participar";
    button.classList.toggle("joined");
  });
});
let selectedCategory = "Todas";
let searchTerm = "";

function updateCommunityCards() {
  document.querySelectorAll(".app-community-card").forEach((card) => {
    const matchesCategory = selectedCategory === "Todas"
      || card.dataset.category === selectedCategory;
    const matchesSearch = !searchTerm
      || card.innerText.toLowerCase().includes(searchTerm);
    card.hidden = !matchesCategory || !matchesSearch;
  });
}

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("selected"));
    chip.classList.add("selected");
    selectedCategory = chip.textContent.trim();
    updateCommunityCards();
  });
});
document.querySelectorAll(".community-tabs button").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".community-tabs button").forEach((item) => item.classList.remove("selected"));
  tab.classList.add("selected");
}));
document.querySelector(".create-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector(".form-status").textContent = "Comunidade criada com sucesso!";
  event.currentTarget.reset();
});
document.querySelector("#global-search")?.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  updateCommunityCards();
});

document.querySelectorAll(".setting-row input").forEach((setting) => {
  setting.addEventListener("change", () => {
    if (setting.closest(".setting-row").textContent.includes("Alto contraste")) {
      document.body.classList.toggle("high-contrast", setting.checked);
    }
    if (setting.closest(".setting-row").textContent.includes("Texto maior")) {
      document.body.classList.toggle("large-text", setting.checked);
    }
  });
});
