document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.getElementsByClassName("material-symbols-outlined");
  const mobileMenu = document.getElementById("mobile-menu");

  for (button of buttons) {
    button.addEventListener("click", (e) => {
      const botonMenu = e.target;
      const id = botonMenu.id;

      botonMenu.style.display = "none";

      if (id == "open-menu") {
        const boton = botonMenu.nextElementSibling;
        boton.style.display = "flex";
        mobileMenu.style.height = "120px";
      } else {
        const boton = botonMenu.previousElementSibling;
        boton.style.display = "flex";
        mobileMenu.style.height = "0";
      }
    });
  }
});
