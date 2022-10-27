const personajes$$ = document.querySelector(".personajes");
const select$$ = document.querySelector(".select");
const button$$ = document.querySelector("button");

const peticion = () => {
  fetch("http://localhost:3000/characters/getbyname/" + select$$.value)
    .then((res) => res.json())
    .then((character) => pintar(character));
};

const getCharacters = () => {
  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((characters) => rellenarSelect(characters));
};

const rellenarSelect = (characters) => {

  for (const character of characters) {

    const option$$ = document.createElement("option");

    option$$.value = character.name;
    option$$.textContent = character.name;

    select$$.appendChild(option$$);

  }
};

const pintar = (character) => {
  personajes$$.innerHTML = "";
  const personaje$$ = document.createElement("div");
  const name$$ = document.createElement("h3");
  const img$$ = document.createElement("img");

  personaje$$.classList.add("personaje");
  name$$.textContent = character.name;
  img$$.src = character.img;

  personaje$$.appendChild(name$$);
  personaje$$.appendChild(img$$);
  personajes$$.appendChild(personaje$$);
};

button$$.addEventListener("click", peticion);
getCharacters();
