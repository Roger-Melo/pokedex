fillHTMLPokemon = (p) => {
  pokedexP.innerHTML = "";

  const tipos = getTypes(p);
  pokedexP.innerHTML = `<li " class="card ${p.types[0].type.name}">
      <img
        class="card-image"
        alt="${p.name}"
        src="https://pokeres.bastionbot.org/images/pokemon/${p.id}.png"
      />
      <h2 class="card-title">${p.id}. ${p.name} </h2>
      <p class="card-subtitle">${tipos}</p>
      <br/>
      <p class="card-subtitle">Altura: ${p.height}</p>
      <p class="card-subtitle">Peso: ${p.weight}</p>
      <p class="card-subtitle">HP: ${p.stats[0].base_stat}</p>
      <p class="card-subtitle">Attack: ${p.stats[1].base_stat}</p>
      <p class="card-subtitle">Defesa: ${p.stats[2].base_stat}</p>
    </li>`;
};

let pokedexP = document.querySelector('[data-js="pokemon"]');
var pokemon = localStorage.getItem("pokemon");
let pokemonJson = JSON.parse(pokemon);
fillHTMLPokemon(pokemonJson);
