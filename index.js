//DESARROLLA AQUI TUS SOLUCIONES
//Ejercicio 1
// Función que obtiene un Pokémon aleatorio desde la PokeAPI
async function getRandomPokemon() {
  try {
    // Número máximo aproximado de Pokémon en la API
    const maxPokemon = 1025;

    // Elegir un ID aleatorio entre 1 y 1025
    const randomId = Math.floor(Math.random() * maxPokemon) + 1;

    // Llamar al endpoint de la PokeAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener el Pokémon con ID ${randomId}`);
    }

    // Convertir la respuesta a JSON
    const pokemon = await response.json();

    // Retornar el objeto del Pokémon
    return pokemon;
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

// Ejemplo de uso:
getRandomPokemon().then(pokemon => {
  console.log(`Tu Pokémon aleatorio es: ${pokemon.name} (ID: ${pokemon.id})`);
});


//Ejercicio 2
async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}

//Ejercicio 3

async function printImageAndName() {
  try {
    const pokemon = await getRandomPokemon();
    const name = pokemon.name;
    const imageUrl = pokemon.sprites.front_default;
    // Retornamos el string con la estructura HTML 
    return `
      <section>
        <img src="${imageUrl}" alt="${name}">
        <h1>${name}</h1>
      </section>
    `;
  } catch (error) {
    console.error("Error al imprimir el Pokémon:", error);
  }
}

//Ejercicio 4
async function getRandomDogImage () {
    const url = "https://dog.ceo/api/breeds/image/random"
    try {
        let response = await fetch(url);
        let data = await response.json();
        let result = data.message;
        return result
    }
    catch(error){
            console.log(`Error: ${error.stack}`)
        }
}
getRandomDogImage().then(data => console.log(data))

//Ejercicio 5
// Ejercicio 5: función async que retorna la URL de la imagen de un Pokémon aleatorio
async function getRandomPokemonImage() {
  try {
    const totalPokemons = 1025; // número aproximado hasta la Gen 9
    const randomId = Math.floor(Math.random() * totalPokemons) + 1;

    // Petición a la API de PokeAPI
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

    // Si hay error en la petición
    if (!response.ok) {
      throw new Error('No se pudo obtener el Pokémon');
    }

    // Convertimos la respuesta en JSON
    const data = await response.json();

    // Retornamos la URL de la imagen oficial
    return data.sprites.front_default;
  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
    return null;
  }
}

// Ejemplo de uso:
getRandomPokemonImage().then((url) => {
  if (url) {
    console.log('Imagen del Pokémon aleatorio:', url);
  } else {
    console.log('No se pudo obtener la imagen.');
  }
});

//Ejercicio 6
function printPugVsPikachu() {
  // Limpiar el contenido previo
  document.body.innerHTML = '';

  // Crear contenedor principal
  const battleContainer = document.createElement('div');
  battleContainer.style.display = 'flex';
  battleContainer.style.justifyContent = 'space-around';
  battleContainer.style.alignItems = 'center';
  battleContainer.style.marginTop = '50px';

  // Crear contenedores
  const pugDiv = document.createElement('div');
  pugDiv.innerHTML = `
    <h2>Pug 🐶</h2>
    <img src="https://placedog.net/200/200" alt="Pug" width="200" height="200">
    <p>¡Guau! Estoy listo para la batalla 💪</p>
  `;

  const pikachuDiv = document.createElement('div');
  pikachuDiv.innerHTML = `
    <h2>Pikachu ⚡</h2>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" width="200" height="200">
    <p>Pika Pika ⚡⚡</p>
  `;

  // Insertar los personajes al contenedor
  battleContainer.appendChild(pugDiv);
  battleContainer.appendChild(pikachuDiv);

  // Crear texto de batalla
  const battleText = document.createElement('h1');
  battleText.textContent = '🐶💥 ¡Batalla Épica: Pug vs Pikachu! ⚡';
  battleText.style.textAlign = 'center';
  battleText.style.marginTop = '20px';

  // Agregar todo al body
  document.body.appendChild(battleText);
  document.body.appendChild(battleContainer);
}

// Ejemplo de uso:
printPugVsPikachu();

//Ejercicio 7
async function getRandomCharacter() {
  try {
    // La API tiene actualmente 826 personajes (puede variar)
    const totalCharacters = 826;
    const randomId = Math.floor(Math.random() * totalCharacters) + 1;

    // Petición a la API
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);

    // Si la petición falla
    if (!response.ok) {
      throw new Error('No se pudo obtener el personaje');
    }

    // Convertimos la respuesta a JSON
    const character = await response.json();

    // Retornamos el objeto personaje
    return character;
  } catch (error) {
    console.error('Error al obtener personaje:', error);
    return null;
  }
}

// Ejemplo de uso:
getRandomCharacter().then((character) => {
  if (character) {
    console.log(`Personaje aleatorio: ${character.name}`);
    console.log(character);
  } else {
    console.log('No se pudo obtener el personaje.');
  }
});

//Ejercicio 8
// Ejercicio 8: función async que retorna información detallada de un personaje aleatorio
async function getRandomCharacterInfo() {
    const randomNumber = Math.floor(Math.random()*826) + 1;
    const url = `https://rickandmortyapi.com/api/character/${randomNumber}`
 try{
        let response = await fetch(url);
        let data = await response.json();
        const img = data.image;
        const name = data.name;
        const episodes = data.episode;
            let primerEpisodio = episodes[0];
            let episodioResponse = await fetch(primerEpisodio);
            let episodioData = await episodioResponse.json();
            const firstEpisode = episodioData.name;
            const dateEpisode = episodioData.air_date;
        return {img, name, episodes, firstEpisode, dateEpisode}
    }
catch(error){
        console.log(`Error: ${error.stack}`)
    }
}
getRandomCharacterInfo().then(data => console.log(data))
//Ejercicio 9
// Ejercicio 9: pintar los datos del personaje aleatorio en el DOM
async function printRandomCharacterInfo() {
  // Limpiamos el documento antes de pintar
  document.body.innerHTML = '';

  // Título
  const title = document.createElement('h1');
  title.textContent = '👽 Personaje aleatorio de Rick and Morty';
  title.style.textAlign = 'center';
  document.body.appendChild(title);

  // Contenedor principal
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.marginTop = '20px';
  document.body.appendChild(container);

  // Llamar a la función del ejercicio anterior
  const info = await getRandomCharacterInfo();

  if (!info) {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'No se pudo obtener la información del personaje 😢';
    container.appendChild(errorMsg);
    return;
  }

  // Crear imagen
  const img = document.createElement('img');
  img.src = info.img;
  img.alt = info.name;
  img.width = 200;
  img.height = 200;
  img.style.borderRadius = '10px';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

  // Crear texto descriptivo
  const name = document.createElement('h2');
  name.textContent = info.name;

  const episodes = document.createElement('p');
  episodes.textContent = `📺 Aparece en ${info.episodes} episodios`;

  const firstEpisode = document.createElement('p');
  firstEpisode.textContent = `🎬 Primer episodio: "${info.firstEpisode}"`;

  const dateEpisode = document.createElement('p');
  dateEpisode.textContent = `📅 Fecha de emisión: ${info.dateEpisode}`;

  // Agregar al contenedor
  container.appendChild(img);
  container.appendChild(name);
  container.appendChild(episodes);
  container.appendChild(firstEpisode);
  container.appendChild(dateEpisode);

  // Botón para generar otro personaje aleatorio
  const button = document.createElement('button');
  button.textContent = '🔁 Mostrar otro personaje';
  button.style.marginTop = '20px';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.addEventListener('click', printRandomCharacterInfo);
  container.appendChild(button);
}

// Ejemplo de uso:
printRandomCharacterInfo();
