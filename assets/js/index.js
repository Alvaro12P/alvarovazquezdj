document.addEventListener("DOMContentLoaded", () => {
  const ico = document.getElementById("instagram");
  const txt = document.getElementsByClassName("txt");


  let value = "close";

  ico.addEventListener("click", () => {
    if (value == "close") {
      txt.style.width = "115px";
      value = "open";
    } else {
      txt.style.width = "0";
      value = "close";
    }
  });
});

/* DESTRIPAR ARRAY DE OBJETOS PARA FUNCION
DEL JS */