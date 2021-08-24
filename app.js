const fetchPokemon = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemonPromises = [];

  for (let index = 1; index <= 150; index++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(index))
        .then(response => response.json())
    );
  }

  Promise.all(pokemonPromises)
    .then(pokemons => {
      // console.log(pokemons);

      const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
        accumulator += `<li>${pokemon.name}<li>`;
        return accumulator;
      }, '');
      console.log(lisPokemons);

    })
}

fetchPokemon();