(() => {
    const characterBox = document.querySelector("#character-box");
    const movieTemplate = document.querySelector("#film-template");
    const movieDescription = document.querySelector("#film-description");

    const baseURL = `https://swapi.dev/api/`;

    function getCharacters() {
                            // page 2 of 82
        fetch (`${baseURL}people?page=2`)
        .then(response => response.json())
        .then(function(response){
            // console.log(response.results);
            const character = response.results;
            const ul = document.createElement('ul');

            character.forEach(character => {
                // console.log(character['name']);
                // console.log(character['created']);
                const li = document.createElement('li'); 
                const a = document.createElement('a');
                a.textContent = character['name'];
                a.dataset.films = character.films[0];
                li.appendChild(a);
                ul.appendChild(li);           
             });

             characterBox.appendChild(ul);
        })
        .then(function(){
            const links = document.querySelectorAll('#character-box li a');
            links.forEach(link => {
                link.addEventListener("click", getFilm);
            })
        })
        .catch(error => {
            console.log(error);
        });
        }

        function getFilm(e) {
            // console.log("getMovie Called");
            // console.log(this.dataset.films);

            const filmID = this.dataset.films;
            fetch(`${filmID}`)
            .then(response => response.json())
            .then(function(response){
                console.log(response.title);
            })
            .catch();

        }
        

    getCharacters();
})();