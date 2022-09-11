import './modal-developers';

let watchedMovie = JSON.parse(localStorage.getItem('watchedMoviesStorage'));
// console.log(watchedMovie);
const emptyInfo = document.querySelector('.info');
const movieListEl = document.querySelector('.movie-list');

checkStorage();

function checkStorage() {
  if (watchedMovie.length < 1) {
    emptyInfo.classList.remove(`is-stealth`);
  } else {
    renderWatchedMovie();
  }
}

function renderWatchedMovie() {
  const markUpCards = watchedMovie
    .map(({ poster_path, id, title, genres, release_date }) => {
      return `<li class="movie-item">
                    <img class="movie-img" src="${createImg(
                      poster_path
                    )}" data-id="${id}" alt="${title}" width="280">
                    <h2 class="movie-title">${title}</h2>
                    <p class="movie-description">${createGenresString(
                      genres
                    )} | ${checkAndCreateDate(release_date)}</p>
                </li>`;
    })
    .join('');

  // console.log(markUpCards);
  movieListEl.insertAdjacentHTML('beforeend', markUpCards);
}

function createImg(poster_path) {
  let noposter = new Image();
  noposter.src = require('../images/noposter.jpg');
  let posterPath = `https://image.tmdb.org/t/p/w300${poster_path}`;
  if (poster_path === null) {
    posterPath = noposter.src;
  }
  return posterPath;
}

function createGenresString(genres) {
  if (genres === '') {
    return 'Unknown genre';
  }
  if (genres.includes(',')) {
    const genresArray = genres.split(',');
    if (genresArray.length > 2) {
      return genresArray.slice(0, 2).join(', ') + ', others...';
    } else {
      return genresArray.join(', ');
    }
  }
  return genres;
}

function checkAndCreateDate(release_date) {
  let date = 'Unknown date';
  if (release_date) {
    date = release_date.slice(0, 4);
  }

  return date;
}
