const pokedex = document.querySelector('[data-js="pokedex"]');

const start = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => response.json())
    .then((json) => getPokemons(json.count));
};

const getPokemons = async (numberPokemons) => {
  for (let index = 1; index < numberPokemons; index++) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      const pokemonJson = await response.json();
      const pokemon = {
        types: pokemonJson.types,
        name: pokemonJson.name,
        id: pokemonJson.id,
      };
      fillHTML(pokemon);
    } catch (error) {
      console.log(error);
    }
  }
};

const getPokemon = async (nome) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  return response;
};

getTypes = (pokemon) => {
  const tipos = [];
  pokemon.types.forEach((tipo) => {
    tipos.push(tipo.type.name);
  });
  return tipos.join(" | ");
};

const fillHTML = (p) => {
  const tipos = getTypes(p);
  pokedex.innerHTML += `<li class="card ${p.types[0].type.name}">
      <img
        class="card-image"
        alt="${p.name}"
        src="https://pokeres.bastionbot.org/images/pokemon/${p.id}.png"
      />
      <h2 class="card-title">${p.id}. ${p.name} </h2>
      <p class="card-subtitle">${tipos}</p>
    </li>`;
};

start();
