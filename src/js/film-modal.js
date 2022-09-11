import { API_KEY, API_URL, createImg, checkAndCreateDate, } from './findMovies';

let addToLibrBtn;
let addToQueueBtn;

const buttonUpEl = document.querySelector('.button-up');
const watchedMoviesStorageName = 'watchedMoviesStorage';
const watchedMoviesButtonName = '.add-watched-btn';
const queueMoviesStorageName = 'queueMoviesStorage';
const queueMoviesButtonName = '.add-queue-btn';

export async function showModal(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  document.querySelector('.drop-box').classList.remove('drop-box--is-hidden');
  buttonUpEl.classList.add('is-hidden');
  let url = `${API_URL}movie/${e.target.dataset.id}?api_key=${API_KEY}`;

  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);
      document
        .querySelector('.modal-thumb')
        .insertAdjacentHTML('beforeend', createModalCard(movie));
      document.querySelector('body').classList.add('overflow-hidden');

      
      

      // document
      //   .querySelector('.add-watched-btn')
      //   .addEventListener('click', onClickWatchedBtn);
      // document
      //   .querySelector('.add-queue-btn')
      //   .addEventListener('click', onClickWatchedBtn);
      checkButton(movie, watchedMoviesStorageName, watchedMoviesButtonName);
      checkButton(movie, queueMoviesStorageName, queueMoviesButtonName);
      writeToStorage(movie, watchedMoviesStorageName, watchedMoviesButtonName);
      writeToStorage(movie, queueMoviesStorageName, queueMoviesButtonName);
    })
    .catch(error => console.log(error));

  addToLibrBtn = document.querySelector('.add-watched-btn');
  addToQueueBtn = document.querySelector('.add-queue-btn');
  console.log(addToLibrBtn);
  console.log(addToQueueBtn);
}

export function closeModal() {
  document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
  document.querySelector('.modal-thumb').innerHTML = '';
  document.querySelector('body').classList.remove('overflow-hidden');
  buttonUpEl.classList.remove('is-hidden');
  // document.querySelector('.movie-list').removeEventListener('click', showModal);
  // document.querySelector('#modal-btn').removeEventListener('click', closeModal);
}

export function createModalCard(movie) {
  return `<img class="modal__img" src="${createImg(
    movie.poster_path
  )}" alt="" width="240">
                <div class="modal__description-thumb">
                    <h2 class="modal__title">${movie.title}</h2>
                    <ul class="movie-data">
                        <li>
                            <ul class="movie-data__name">
                                <li>Vote / Votes</li>
                                <li>Popularity</li>
                                <li>Original Title</li>
                                <li>Genre</li>
                            </ul>
                        </li>
                        <li>
                            <ul class="movie-data__content">
                                <li class="movie-data__item">
                                    <span class="movie-votes__first">${
                                      movie.vote_average
                                    }</span> / <span class="movie-votes__sec">${
    movie.vote_count
  }</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-popularity__item">${
                                      movie.popularity
                                    }</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-orig-title__item">${
                                      movie.original_title
                                    }</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-genre__item">${createModalGenresString(
                                      movie.genres
                                    )}</span>
                                </li>
                            </ul>
                        </li>  
                    </ul>
                    
                    <p class="movie-about">About</p>
                    <p class="movie-about-text">${movie.overview}</p>
                    <ul class="modal-btns">
                        <li class="modal-btns__item">
                            <button class="button add-watched-btn" type="button">Add to Watched</button>
                        </li>
                        <li class="modal-btns__item">
                            <button class="button add-queue-btn" type="button">Add to queue</button>
                        </li>
                    </ul>
                </div>`;
}

function createModalGenresString(genres) {
  return genres.map(genre => genre.name).join(', ');
}

function writeToStorage(movie, storageName, buttonName) {
  document.querySelector(buttonName).addEventListener('click', e => {
    const movieItem = {
      id: movie.id,
      title: movie.title,
      img: createImg(movie.poster_path),
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      popularity: movie.popularity,
      original_title: movie.original_title,
      genres: createModalGenresString(movie.genres),
      overview: movie.overview,
      date: checkAndCreateDate(movie.release_date),
    };
    if (localStorage.getItem(storageName)) {
      const savedwatchedMovies = JSON.parse(localStorage.getItem(storageName));
      for (let i = 0; i < savedwatchedMovies.length; i += 1) {
        if (savedwatchedMovies[i].id === movieItem.id) {
          e.target.textContent = `Add to ${e.target.textContent.split(' ')[2]}`;
          savedwatchedMovies.splice(i, 1);
          localStorage.setItem(storageName, JSON.stringify(savedwatchedMovies));
          return;
        }
      }

      savedwatchedMovies.push(movieItem);
      localStorage.setItem(storageName, JSON.stringify(savedwatchedMovies));
      
      e.target.textContent = `Delete from ${e.target.textContent.split(' ')[2]}`;
    } else {
      const savedwatchedMovies = [movieItem];
      localStorage.setItem(storageName, JSON.stringify(savedwatchedMovies));
    }
  });
}

// function onClickWatchedBtn(e) {
//   let textBtn = e.target.textContent;
//   // console.log(e.target.textContent);
//   if (textBtn === 'Add to Watched') {
//     e.target.textContent = 'Delete from wathed';
//   } else if (textBtn === 'Delete from wathed') {
//     e.target.textContent = 'Add to Watched';
//   }
// }

function checkButton(movie, storageName, buttonName) {
  if (localStorage.getItem(storageName)) {
    const savedwatchedMovies = JSON.parse(localStorage.getItem(storageName));
    for (let i = 0; i < savedwatchedMovies.length; i += 1) {
      if (savedwatchedMovies[i].id === movie.id) {          
        document.querySelector(buttonName).textContent = `Delete from ${document.querySelector(buttonName).textContent.split(' ')[2]}`;          
      }
    }
  }
}
