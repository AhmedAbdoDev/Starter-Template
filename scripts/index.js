let toggle = document.querySelector(".nav .toggle");

toggle.addEventListener("click", () => {
  let menu = document.querySelector(".nav .toggle-menu");
  menu.classList.toggle("open");
});
