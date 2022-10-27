//recogiendo inputs
const name$$ = document.querySelector(".name");
const race$$ = document.querySelector(".race");
const img$$ = document.querySelector(".img");
const universe$$ = document.querySelector(".universe");
const transform$$ = document.querySelector(".transform");
const genre$$ = document.querySelector(".genre");

// recojo el botón
const button$$ = document.querySelector(".enviar");

const enviarFormulario = async () => {
  transform$$.value === "on"
    ? (transform$$.value = true)
    : (transform$$.value = false);

  const datos = {
    name: name$$.value,
    race: race$$.value,
    img: img$$.value,
    universe: universe$$.value,
    transform: transform$$.value,
    genre: genre$$.value,
  };

  const datosAEnviar = JSON.stringify(datos);

  const respuesta$$ = document.createElement("p");

  try {
    await fetch("http://localhost:3000/characters/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: datosAEnviar,
    });
    respuesta$$.textContent = "SE HA CREADO EL PERSONAJE CORRECTAMENTE";
  } catch (error) {
    respuesta$$.textContent = "NO SE HA PODIDO CREAR EL PERSONAJE"
  }

  document.body.appendChild(respuesta$$);
};


button$$.addEventListener("click", enviarFormulario);
