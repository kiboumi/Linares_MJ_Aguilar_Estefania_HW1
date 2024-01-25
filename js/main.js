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
        })
        .then()
        .catch();
        }

    getCharacters();
})();