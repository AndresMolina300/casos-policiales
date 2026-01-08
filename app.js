// Home: tarjetas clicables
document.querySelectorAll(".case-card").forEach(card => {
  const href = card.getAttribute("data-href");
  if (!href) return;
  card.addEventListener("click", () => window.location.href = href);
  const btn = card.querySelector(".btn.primary");
  if (btn) btn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = href;
  });
});

// Tabs (solo en museo.html)
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".pane");
if (tabs.length && panes.length) {
  tabs.forEach(t => t.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    panes.forEach(p => p.classList.remove("active"));
    t.classList.add("active");
    const id = t.getAttribute("data-tab");
    const pane = document.getElementById(id);
    if (pane) pane.classList.add("active");
  }));
}

// Modal simple
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

const MODALS = {
  "perfil-curador": {
    title: "Ficha — Alejandro Montalvo",
    body: `
      <p><strong>Rol:</strong> Curador principal.</p>
      <p><strong>Motivo (beneficio):</strong> Prestigio profesional.</p>
      <p><strong>Nota:</strong> Responsable de catalogación y control técnico de la colección (sin concluir culpabilidad).</p>
    `
  },
  "perfil-directora": {
    title: "Ficha — Beatriz Lemaire",
    body: `
      <p><strong>Rol:</strong> Dirección del museo.</p>
      <p><strong>Motivo (beneficio):</strong> Control institucional.</p>
      <p><strong>Nota:</strong> Decide comunicación interna/externa y gestiona incidentes.</p>
    `
  },
  "perfil-seguridad": {
    title: "Ficha — Tomás Roldán",
    body: `
      <p><strong>Rol:</strong> Encargado de seguridad (cierre).</p>
      <p><strong>Motivo (beneficio):</strong> Dinero.</p>
      <p><strong>Nota:</strong> Coordina rondas y supervisión operativa durante el cierre.</p>
    `
  },
  "perfil-restauradora": {
    title: "Ficha — Lucía Ferrer",
    body: `
      <p><strong>Rol:</strong> Restauración y conservación.</p>
      <p><strong>Motivo (beneficio):</strong> Dinero (encargo externo).</p>
      <p><strong>Nota:</strong> Maneja materiales y procesos técnicos relacionados con conservación.</p>
    `
  },
  "nota-curador": {
    title: "Nota técnica — Cierre de sala",
    body: `
      <p><strong>Hora:</strong> 19:14</p>
      <p><strong>Observación:</strong> Se detectan inconsistencias materiales en la pieza expuesta (sospecha de sustitución).</p>
      <p><strong>Acción:</strong> Se solicita revisión interna y preservación de registros.</p>
    `
  },
  "protocolo-cierre": {
    title: "Protocolo — Cierre de sala (extracto)",
    body: `
      <ol>
        <li>18:55 — Inicio de verificación de sala.</li>
        <li>19:00 — Desalojo total de visitantes.</li>
        <li>19:05 — Registro de cierre (firma responsable).</li>
        <li>19:10 — Revisión final de vitrinas y checklist.</li>
      </ol>
      <p class="muted">*Extracto provisional para prototipo.*</p>
    `
  }
};

function openModal(key){
  if (!modal) return;
  const data = MODALS[key];
  if (!data) return;
  modalTitle.textContent = data.title;
  modalBody.innerHTML = data.body;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(){
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.getAttribute("data-open")));
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
