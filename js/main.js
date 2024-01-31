(() => {
    const characterBox = document.querySelector("#character-box");
    const filmTemplate = document.querySelector("#film-template");
    const filmCon = document.querySelector("#film-con");

    const baseURL = `https://swapi.dev/api/`;

    function getCharacters() {
                            // page 2 of 82
        fetch (`${baseURL}people?page=2`)
        .then(response => response.json())
        .then(function(response){
            const character = response.results;
            const ul = document.createElement('ul');

            character.forEach(character => {
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

            const filmID = this.dataset.films;
            fetch(`${filmID}`)
            .then(response => response.json())
            .then(function(response){
                filmCon.innerHTML = "";

                console.log(response.title);
                const template = document.importNode(filmTemplate.content, true);

                const reviewTitle = template.querySelector(".film-title");
                const reviewImage = template.querySelector(".film-image");
                const reviewEpisode = template.querySelector(".film-episode");
                const reviewDescription = template.querySelector(".film-description");


                reviewTitle.innerHTML = response.title;
                reviewImage.src = `images/${response.episode_id}.jpg`;
                reviewEpisode.innerHTML = "Episode " + response.episode_id;
                reviewDescription.innerHTML = response.opening_crawl;

                filmCon.appendChild(template);
                reviewEpisode.appendChild(template);
                reviewDescription.appendChild(template);

            })

            .catch(error => {
                console.log(error);
            })

        }
        

    getCharacters();


    gsap.fromTo(
        ".loading-page",
        { opacity: 1 },
        {
          opacity: 0,
          display: "none",
          duration: 1.5,
          delay: 3.5,
        }
      );
      
      gsap.fromTo(
        ".logo-name",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.5,
        }
      );
      
})();