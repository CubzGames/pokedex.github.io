async function searchPokemon() {
    let pName = document.getElementById("name-input").value;

    let pokedex = `https://pokeapi.co/api/v2/pokemon/${pName}/`;
    fetch(pokedex)
    .then(res => res.json()

    ).then((data) => {
        console.log(data);

        document.getElementById('main-screen').style.backgroundImage = `url(${data.sprites.front_default})`;
        document.getElementById('name-screen').innerHTML = data.id; // I dont get this
        document.getElementById('type-screen').innerHTML = data.types[0].type.name
        document.getElementById('id-screen').innerHTML = data.height;
        
    }).catch(err => { 
        alert('No pokemon found with this name!')
    })
}


