let api_key = '438399c13cc2afefcd3b5f0d7eb23f6e';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200';

document.getElementById('searchButton').addEventListener('click', searchMovie);

let resultContainer = document.getElementById('results')
let loader = document.getElementById('loader')

function searchMovie() {

    resultContainer.innerHTML = '<p class= "text-search">Cargando...</p>'
    loader.style.display = 'block';
    let searchInput = document.getElementById('searchInput').value;

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => {
            displayMovies(response.results);
            loader.style.display = 'none';
        })
        .catch(error => {

            console.error('Error:', error);
            loader.style.display = 'none';
        });

}

function displayMovies(movies) {


    resultContainer.innerHTML = ''

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p class= "text-search">No se encontraron resultados para tu búsqueda</p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    });
}
