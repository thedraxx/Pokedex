const poke_container = document.getElementById('poke-container');



const pokemon_count = 250;
const colors = {
    fire: '#FDDFDF',
    grass: '#D3FDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f3e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

const fetchPokemon = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemons(i);
    }
}

getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url)
    const data = await res.json();
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon');
    console.log(pokemon.abilities)

    let poke_types = pokemon.types[0].type.name;
    const type = main_types.find(type=> poke_types.indexOf (type) > -1)
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${pokemon.sprites.front_default}" alt="">
    </div>

    <div class="info">
        <span class="number">${pokemon.id}</span>
        <h3 class="name">${pokemon.name}</h3>
        <h3 class="name">${ poke_types} </h3>
        <small> ${pokemon.abilities[0].ability.name}</small>

    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);

}

fetchPokemon()