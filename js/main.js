(() => {
    const characterBox = document.querySelector("#character-box");
    const movieTemplate = document.querySelector("#movie-template");
    const movieDescription = document.querySelector("#movie-description");

    const baseURL = `https://swapi.dev/api/`;

    function getCharacters() {
        fetch (`${baseURL}people`)
        .then(response => response.json())
        .then(function(response){
            console.log(response.results);

            // characters.forEach(character => {
            //     // Create a list item for each character
            //     const li = document.createElement('li');
                
            //     // Display the character name
            //     const name = document.createElement('h3');
            //     name.textContent = character.name;
            //     li.appendChild(name);

            //     // Display additional information about the character (you can customize this part)
            //     const gender = document.createElement('p');
            //     gender.textContent = `Gender: ${character.gender}`;
            //     li.appendChild(gender);

            //     const birthYear = document.createElement('p');
            //     birthYear.textContent = `Birth Year: ${character.birth_year}`;
            //     li.appendChild(birthYear);

            //     // Append the list item to the character box
            //     characterBox.appendChild(li);
            // });
        })
        .catch(error => {
            console.error('Error fetching characters:', error);
            // You may want to handle errors here, such as updating the DOM to indicate an error.
        });
    }

    getCharacters();
})();
