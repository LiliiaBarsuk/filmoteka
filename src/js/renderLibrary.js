import './modal-developers';

let watchedMovie = JSON.parse(localStorage.getItem('watchedMoviesStorage'));
// console.log(watchedMovie);
let queueMovie = JSON.parse(localStorage.getItem('queueMoviesStorage'));
// console.log(queueMovie);
const emptyInfo = document.querySelector('.info');
const movieListEl = document.querySelector('.movie-list');
const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');
const loadSpinner = document.querySelector('.loader');
console.log(queueBtn);
console.log(watchedBtn);
checkWatched();
queueBtn.addEventListener('click', checkQueue);
watchedBtn.addEventListener('click', checkWatched);
 loadSpinner.classList.add('is-hidden__spinner');

function checkQueue() {
  watchedBtn.classList.remove('active-btn');
  queueBtn.classList.add('active-btn');
  movieListEl.innerHTML = '';
  if (localStorage.length === 0) {
    emptyInfo.classList.remove(`is-stealth`);
  } else {
    renderQueueMovie();
  }
}

function checkWatched() {
  watchedBtn.classList.add('active-btn');
  queueBtn.classList.remove('active-btn');
  movieListEl.innerHTML = '';
  if (localStorage.length === 0) {
    emptyInfo.classList.remove(`is-stealth`);
  } else {
    renderWatchedMovie();
  }
}

function renderWatchedMovie() {
  if (watchedMovie) {
    emptyInfo.classList.add(`is-stealth`);
    const markUpCards = watchedMovie
      .map(({ img, id, title, genres, release_date }) => {
        return `<li class="movie-item">
                    <img class="movie-img" src="${createImg(
                      img
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
    return;
  }
  emptyInfo.classList.remove(`is-stealth`);
}

function renderQueueMovie() {
  if (queueMovie) {
    emptyInfo.classList.add(`is-stealth`);
    const markUpCards = queueMovie
      .map(({ img, id, title, genres, release_date }) => {
        return `<li class="movie-item">
                    <img class="movie-img" src="${createImg(
                      img
                    )}" data-id="${id}" alt="${title}" width="280">
                    <h2 class="movie-title">${title}</h2>
                    <p class="movie-description">${createGenresString(
                      genres
                    )} | ${checkAndCreateDate(release_date)}</p>
                </li>`;
      })
      .join('');

    movieListEl.insertAdjacentHTML('beforeend', markUpCards);
    return;
  }
  emptyInfo.classList.remove(`is-stealth`);
}

function createImg(img) {
  let noposter = new Image();
  noposter.src = require('../images/noposter.jpg');
  let posterPath = img;
  if (img === null || img === '') {
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
