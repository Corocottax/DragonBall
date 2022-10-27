const personajes$$ = document.querySelector(".personajes");

const peticion = () => {
  fetch("https://dragonball-backend.vercel.app/characters")
    .then((res) => res.json())
    .then((characters) => pintar(characters));
};

const pintar = (characters) => {

  for (const character of characters) {
    const personaje$$ = document.createElement("div");
    const name$$ = document.createElement("h3");
    const img$$ = document.createElement("img");

    personaje$$.classList.add("personaje")
    name$$.textContent = character.name;
    img$$.src = character.img;

    personaje$$.appendChild(name$$);
    personaje$$.appendChild(img$$);
    personajes$$.appendChild(personaje$$);
  }
};

peticion();
