// Se activa el menu del boton hamburguesa en screen menores a 768
const navBtn = document.querySelector("#nav-btn");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("is-active");
});

// en menú del nav se resalta el item activo
const path = window.location.pathname;

if (path.includes("cv.html")) {
  document.querySelector("#nav-cv").classList.toggle("is-active");
} else if (path.includes("proyectos.html")) {
  document.querySelector("#nav-proyectos").classList.toggle("is-active");
} else if (path.includes("contacto.html")) {
  document.querySelector("#nav-contacto").classList.toggle("is-active");
} else {
  document.querySelector("#nav-inicio").classList.toggle("is-active");
}