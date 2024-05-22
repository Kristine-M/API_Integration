async function fetchPokeData(pokemonName){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokeData = await response.json();
    return pokeData;
}

// document.addEventListener('DOMContentLoaded', async () =>{
//     let name = document.getElementById("name");
//     const pokemonData = await fetchPokeData(name);
//     const pokemonInfoElement = document.getElementById('pokemon-info');


//     pokemonInfoElement.innerHTML =`
//         <h2>${pokemonData.name}</h2>
//         <img src = "${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
//         <h3>Abilities:</h3>
//         <ul>
//             ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
//         </ul>
//         <h3>Base Experience:</h3>
//         <p>${pokemonData.base_experience}</p>
//     `;


// });

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pokeSearch');
     
    const pokemonInfoElement = document.getElementById('pokemon-info');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const pokemonName = document.getElementById('name').value;
        if (pokemonName) {
            const pokemonData = await fetchPokeData(pokemonName);
            if (pokemonData) {
                pokemonInfoElement.innerHTML = `
                    <h2 style="padding-top: 5%;" class="text-white">Pokemon Details:</h2>
                    <center>
                    <h2 class= "text-white" style="padding-top: 10px">${pokemonData.name} <img src="pictures/open_ball.png" alt="open ball" width="60"></h2>
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" width= "90">
                    <h3 class="text-white">Abilities <img src="pictures/abilities.jpg" alt="abilities" width="60" style="border-radius: 50%"></h3>
                    <ul class= "ability-list" style="color: white">
                        ${pokemonData.abilities.map(ability => `<b><li>${ability.ability.name}</li></b>`).join('')}
                    </ul>
                    <h3 class="text-white">Base Experience <img src="pictures/xp.png" alt="xp" width="50" style="border-radius: 50%"></h3>
                    <p class="text-white"><b>${pokemonData.base_experience}</b></p>
                    </center>
                    
                `;
            } else {
                pokemonInfoElement.innerHTML = `<p>Pokemon not found</p>`;
            }
        }
    });
});