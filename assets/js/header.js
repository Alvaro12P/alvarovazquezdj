document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.getElementsByClassName("material-symbols-outlined");

  for (button of buttons) {
    button.addEventListener("click", (e) => {
      const botonMenu = e.target;
      const id = botonMenu.id;

      botonMenu.style.display = "none";

      if (id == "open-menu") {
        const boton = botonMenu.nextElementSibling;
        boton.style.display = "flex";
      } else {
        const boton = botonMenu.previousElementSibling;
        boton.style.display = "flex";
      }
    });
  }
});
