const pokedex = document.querySelector('[data-js="pokedex"]');
const tipoSelect = document.querySelector("#tipo-pokemon");
const pokemons = [];

tipoSelect.addEventListener("change", (event) => {
  const tipo = event.target.value;
  pokedex.innerHTML = "";
  getPokemonsByType(tipo);
});

processResponse = async (response) => {
  const pokemonJson = await response.json();
  const pokemon = {
    types: pokemonJson.types,
    name: pokemonJson.name,
    id: pokemonJson.id,
  };
  pokemons.push(pokemon);
  fillHTML(pokemon);
};

const getPokemonsByType = async (tipo) => {
  pokemons.forEach((pokemon) => {
    tipos = pokemon.types;
    for (let index = 0; index < tipos.length; index++) {
      const t = tipos[index];

      if (t.type.name == tipo) {
        console.log(pokemon);
        fillHTML(pokemon);
        break;
      }
    }
  });
};

const start = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => response.json())
    .then((json) => getPokemons(json.count));
};

const getPokemons = async (numberPokemons) => {
  for (let index = 1; index < 150; index++) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      processResponse(response);
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
  if (pokemon.types.length > 0) {
    pokemon.types.forEach((tipo) => {
      tipos.push(tipo.type.name);
    });
    return tipos.join(" | ");
  } else {
    tipos.push(tipo.type.name);
  }
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
