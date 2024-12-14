// Select the container to display characters
const charactersContainer = document.getElementById("characters-container");

// Fetch data from the Rick and Morty API
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // Iterate over the results array in the response
    data.results.forEach(character => {
      // Create a card for each character
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
        <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
        <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
      `;
      // Append the card to the container
      charactersContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching characters:", error);
    charactersContainer.innerHTML = "<p>Failed to load characters. Please try again later.</p>";
  });

