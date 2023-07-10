document.addEventListener('DOMContentLoaded', () => {
    const key = '7283eef1';

    const name = document.querySelector('#movie-name');
    const year = document.querySelector('#year');
    const rating = document.querySelector('#rating');
    const length = document.querySelector('#length');
    const genre = document.querySelector('#genre');
    const plot = document.querySelector('#plot');
    const cast = document.querySelector('#cast');
    const img = document.querySelector('#image');

    document.querySelector('.search-form').onsubmit = (event) => {
        event.preventDefault();

        const movieName = document.querySelector('#search-bar').value;

        if(movieName == ''){
            name.innerHTML = (`Enter a valid movie title`);
            return;
        }


        fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${key}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            if(data.Response == 'False'){
                name.innerHTML = (`Enter a valid movie title`);
                return;
            }

            name.innerHTML = (`${data.Title}`);
            year.innerHTML = (`${data.Year}`);
            img.src = (`${data.Poster}`);
            rating.innerHTML = (`Rating: ${data.imdbRating}/10`);
            length.innerHTML = (`Runtime: ${data.Runtime}`);
            genre.innerHTML = (`Genre: ${data.Genre}`);
            plot.innerHTML = (`Plot: ${data.Plot}`);
            cast.innerHTML = (`Cast: ${data.Actors}`);

        })

        

    }


});


