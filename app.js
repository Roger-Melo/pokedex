const getContent = async () => {
  for (let index = 1; index <= 150; index++) {
    try {
      let reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
      let pokemon = await reponse.json()
      showContent(pokemon)
    } catch (error) {
      console.log(error)
    }
  }
}

const showContent = pokemon => {  
  const types = pokemon.types.map(typeInfo => typeInfo.type.name)
  const main = document.querySelector('main')

  return main.innerHTML += `
  <div class="card ${types[0]}">
    <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
    <strong class="card-subtitle">${types.join(' e ')}</strong>
  </div>
  `
}

getContent()
