document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".submit-btn");
  const inputs = document.querySelectorAll(".input");
  const form = document.forms["send-message"];

  const errorMsg = (text) =>
    Swal.fire({ title: "¡Error!", icon: "error", text });

  const regex = {
    name: {
      regex: /^[a-z ,.'-À-ÖØ-öø-ÿ]{6,}$/i,
      message: "El nombre no puede contener carácteres especiales",
    },
    phone: {
      regex: /^(\+34)?(6\d{2}|7[1-9]\d{1})\d{6}$/,
      message: "El formato de número de teléfono es: 666123456",
    },
    date: {
      regex: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      message:
        "La fecha introducida no es válida, debe ser posterior a la actual",
    },
    message: {
      regex: /.*/g,
      message: "",
    },
  };

  for (const input of inputs) {
    input.addEventListener("input", (e) => {
      const { target } = e;
      const { name, value } = target;
      if (value !== "")
        target.classList.toggle("error", !regex[name].regex.test(value));
      else target.classList.toggle("error", false);
    });
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let message = "";
    let error = false;
    for (const input of inputs) {
      if (Array.from(input.classList).includes("error")) {
        error = true;
        message += regex[input.name].message + "\n";
      }
    }
    if (error) {
      Swal.fire({
        title: "¡Error!",
        icon: "error",
        html: `<pre style="white-space: pre-wrap;">${message}</pre>`,
      });
    } else {
      const empty = Array.from(inputs)
        .map((e) => e.value === "")
        .reduce((r, current) => (r = current || r), false);
      if (!empty) {
        const data = new FormData(form);
        const body = {};
        data.forEach((value, key) => (body[key] = value));

        fetch("https://api.alvarovazquezdj.es/api/message", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((r) => {
            if (r.status !== 200)
              errorMsg(
                "Un error inesperado ha ocurrido, pruebe de nuevo más tarde."
              );
            else {
              Swal.fire({
                title: "Mensaje enviado correctamente",
                icon: "success",
              });
            }
          })
          .catch((e) =>
            errorMsg(
              "Un error inesperado ha ocurrido, pruebe de nuevo más tarde."
            )
          );
      } else errorMsg("No pueden haber campos vacíos en el formulario.");
    }
  });
});
