const projects = [
  {
    title: "Landing page para cafeteria",
    description:
      "Pagina responsiva com foco em conversao, cardapio e chamada para contato.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    title: "Lista de tarefas",
    description:
      "Aplicacao simples para organizar atividades do dia, com salvamento local.",
    tech: "JavaScript, LocalStorage"
  },
  {
    title: "Tela de login",
    description:
      "Interface com validacao basica de formulario e mensagens de erro amigaveis.",
    tech: "HTML, CSS"
  },
  {
    title: "Dashboard de estudos",
    description:
      "Painel para acompanhar horas de estudo e progresso semanal.",
    tech: "JavaScript, Chart.js"
  }
];

const projectsList = document.getElementById("projectsList");

// Monta os cards de projeto com base no array acima.
projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card fade-in";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p class="project-meta">Tecnologias: ${project.tech}</p>
  `;

  projectsList.appendChild(card);
});

const currentYear = document.getElementById("currentYear");
currentYear.textContent = new Date().getFullYear();

const copyEmailButton = document.getElementById("copyEmail");
const emailLink = document.getElementById("emailLink");

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailLink.textContent);
    copyEmailButton.textContent = "E-mail copiado";
    setTimeout(() => {
      copyEmailButton.textContent = "Copiar e-mail";
    }, 1600);
  } catch (error) {
    copyEmailButton.textContent = "Copie manualmente";
  }
});

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
