(() => {
    const characterBox = document.querySelector("#character-box");
    const movieTemplate = document.querySelector("#movie-template");
    const movieDescription = document.querySelector("#movie-description");

    const baseURL = `https://swapi.dev/api/`;

    function getCharacters() {
        fetch (`${baseURL}people`)
        .then(response => response.json())
        .then(function(response){
            // console.log(response.results);
            const character = response.results;
            const ul = document.createElement('ul');

            character.forEach(character => {
                console.log(character['name']);
                console.log(character['created']);
                const li = document.createElement('li'); 
                const a = document.createElement('a');
                a.textContent = character['name'];
                li.appendChild(a);
                ul.appendChild(li);           
             });

             characterBox.appendChild(ul);

            //  video 65
        })
        .then()
        .catch();
        }

    getCharacters();
})();