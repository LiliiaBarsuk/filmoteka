import './modal-developers';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  exists,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore/lite';
import {
  getAuth,
  showLoginError,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  signOut,
  setPersistence,
} from 'firebase/auth';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  timeout: 2000,
});

const firebaseConfig = {
  apiKey: 'AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc',
  authDomain: 'filmoteka-bdb19.firebaseapp.com',
  projectId: 'filmoteka-bdb19',
  storageBucket: 'filmoteka-bdb19.appspot.com',
  messagingSenderId: '1051248700372',
  appId: '1:1051248700372:web:2dc6796345cd1c6fa94441',
};

const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(); //наша бд

const auth = getAuth();

const emptyInfo = document.querySelector('.info');
const movieListEl = document.querySelector('.movie-list');
const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');
const loadSpinner = document.querySelector('.loader');
const paginationBtn = document.querySelectorAll('.pagination-btn');
const mainPaginationBtn = document.querySelector('.pagination-btn__main');
const arrowLeftBtn = document.querySelector('.pagination-btn__arrow-left');
const arrowRightBtn = document.querySelector('.pagination-btn__arrow-right');
const paginationNumbers = document.querySelector('.pagination-list');
const pagination = document.querySelector('.pagination');
let pageNumber = 1;
let totalPages = 1;

renderStartLibrary();

loadSpinner.classList.add('is-hidden__spinner');

queueBtn.addEventListener('click', renderLibrary);
watchedBtn.addEventListener('click', renderLibrary);
arrowLeftBtn.addEventListener('click', () => {
  if (pageNumber <= 1) {
    return;
  }
  pageNumber -= 1;

  paginationPageChange();
});
arrowRightBtn.addEventListener('click', () => {
  if (totalPages <= pageNumber) {
    return;
  }
  pageNumber = Number.parseInt(pageNumber) + 1;

  paginationPageChange();
});
paginationNumbers.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.textContent && e.target.textContent !== '...') {
    pageNumber = e.target.textContent;

    paginationPageChange();
  }
});

function renderStartLibrary() {
  watchedBtn.classList.add('active-btn');
  queueBtn.classList.remove('active-btn');

  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      //   Отримуємо дані з БД
      const userData = readTheDoc(uid)
        .then(response => {
          return response;
        })
        .then(data => {
          let films = data.filmsWatched;
          if (films.length === 0) {
            pagination.classList.add(`is-stealth`);
            emptyInfo.classList.remove(`is-stealth`);
            checkWatched(films);
            return;
          } // масив з фільмами

          // -----------
          totalPages = Math.ceil(films.length / 20);
          if (totalPages === 1) {
            checkWatched(films);
            pageNumber = 1;
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          } else {
            let i = pageNumber * 20;
            let j = i - 20;
            films = data.filmsWatched.slice(j, i);
            checkWatched(films);
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
            return;
          }
        });
    }
  });
}

function renderLibrary(e) {
  pageNumber = 1;
  loadSpinner.classList.remove('is-hidden__spinner');
  if (e.target === watchedBtn) {
    loadSpinner.classList.add('is-hidden__spinner');
    watchedBtn.classList.add('active-btn');
    queueBtn.classList.remove('active-btn');
  } else if (e.target === queueBtn) {
    watchedBtn.classList.remove('active-btn');
    queueBtn.classList.add('active-btn');
    loadSpinner.classList.add('is-hidden__spinner');
  }

  const arrayName = e.target.id;

  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      //   Отримуємо дані з БД
      const userData = readTheDoc(uid)
        .then(response => {
          return response;
        })
        .then(data => {
          let filmsCollection = data[arrayName];
          if (filmsCollection.length === 0) {
            pagination.classList.add(`is-stealth`);
            emptyInfo.classList.remove(`is-stealth`);
            checkMovie(filmsCollection);
            return;
          }

          totalPages = Math.ceil(filmsCollection.length / 20);
          if (totalPages === 1) {
            checkMovie(filmsCollection);
            pageNumber = 1;
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          } else {
            let i = pageNumber * 20;
            let j = i - 20;
            filmsCollection = data[arrayName].slice(j, i);
            checkMovie(filmsCollection);
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          }
        });
    } else {
      console.log('user is logout');
    }
  });
}

//функція для отримання даних
async function readTheDoc(id) {
  const myDoc = await getDoc(doc(firestore, 'users', `${id}`));
  if (myDoc.exists()) {
    const data = myDoc.data();
    return data;
  }
}

function checkMovie(collection) {
  movieListEl.innerHTML = '';

  if (collection.length < 1) {
    movieListEl.innerHTML = '';
    emptyInfo.classList.remove(`is-stealth`);
    pagination.classList.add(`is-stealth`);
    return;
  } else {
    emptyInfo.classList.add(`is-stealth`);
    renderMovie(collection);
    pagination.classList.remove(`is-stealth`);
    puginationNumeration(pageNumber, totalPages);
  }
}

function renderMovie(collection) {
  let markUpCards;

  markUpCards = collection
    .map(({ img, id, title, genres, date, vote_average }) => {
      return `<li class="movie-item">
                    <img class="movie-img" src="${createImg(
                      img
                    )}" data-id="${id}" alt="${title}" width="280">
                    <h2 class="movie-title">${title}</h2>
                    <p class="movie-description">${createGenresString(
                      genres
                    )} | ${date} <span class="modal-votes">${vote_average}</span></p>
                </li>`;
    })
    .join('');

  movieListEl.insertAdjacentHTML('beforeend', markUpCards);
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

function checkWatched(collection) {
  movieListEl.innerHTML = '';
  if (collection.length === 0) {
    emptyInfo.classList.remove(`is-stealth`);
  } else {
    emptyInfo.classList.add(`is-stealth`);
    renderMovie(collection);
  }
}

function puginationNumeration(currentPage, totalPages) {
  paginationBtn[0].textContent = Number.parseInt(currentPage) - 4 > 0 ? 1 : '';

  if (Number.parseInt(currentPage) - 3 === 1) {
    paginationBtn[1].textContent = 1;
  } else if (Number.parseInt(currentPage) - 3 > 0) {
    paginationBtn[1].textContent = '...';
  } else {
    paginationBtn[1].textContent = '';
  }

  paginationBtn[2].textContent =
    Number.parseInt(currentPage) - 2 > 0
      ? Number.parseInt(currentPage) - 2
      : '';
  paginationBtn[3].textContent =
    Number.parseInt(currentPage) - 1 > 0
      ? Number.parseInt(currentPage) - 1
      : '';
  mainPaginationBtn.textContent = Number.parseInt(currentPage);
  paginationBtn[5].textContent =
    Number.parseInt(currentPage) + 1 <= Number.parseInt(totalPages)
      ? Number.parseInt(currentPage) + 1
      : '';
  paginationBtn[6].textContent =
    Number.parseInt(currentPage) + 2 <= Number.parseInt(totalPages)
      ? Number.parseInt(currentPage) + 2
      : '';

  if (Number.parseInt(currentPage) + 3 === Number.parseInt(totalPages)) {
    paginationBtn[7].textContent = Number.parseInt(totalPages);
  } else if (Number.parseInt(currentPage) + 3 <= Number.parseInt(totalPages)) {
    paginationBtn[7].textContent = '...';
  } else {
    paginationBtn[7].textContent = '';
  }

  paginationBtn[8].textContent =
    Number.parseInt(currentPage) + 4 <= Number.parseInt(totalPages)
      ? Number.parseInt(totalPages)
      : '';

  if (!paginationBtn[5].textContent) {
    arrowRightBtn.classList.add('disabled');
  } else {
    arrowRightBtn.classList.remove('disabled');
  }

  if (!paginationBtn[3].textContent) {
    arrowLeftBtn.classList.add('disabled');
  } else {
    arrowLeftBtn.classList.remove('disabled');
  }
}

function paginationPageChange() {
  if (watchedBtn.classList.contains('active-btn')) {
    renderStartLibrary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  renderQueueLibrary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQueueLibrary() {
  watchedBtn.classList.remove('active-btn');
  queueBtn.classList.add('active-btn');
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      //   Отримуємо дані з БД
      const userData = readTheDoc(uid)
        .then(response => {
          return response;
        })
        .then(data => {
          let films = data.filmsQueue; // масив з фільмами
          if (films.length === 0) {
            pagination.classList.add(`is-stealth`);
            emptyInfo.classList.remove(`is-stealth`);
            checkWatched(films);
            return;
          }
          // -----------
          totalPages = Math.ceil(films.length / 20);
          if (totalPages === 1) {
            checkWatched(films);
            pageNumber = 1;
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          } else {
            let i = pageNumber * 20;
            let j = i - 20;

            films = data.filmsQueue.slice(j, i);
            checkWatched(films);

            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
            return;
          }
        });
    } else {
      console.log('user is logout');
    }
  });
}

// ----------------Модальне вікно---------------------------------------------

movieListEl.addEventListener('click', showModal);

async function showModal(e) {
  const movieId = e.target.dataset.id;

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  document.querySelector('.modal-thumb').innerHTML = '';
  document.querySelector('.drop-box').classList.remove('drop-box--is-hidden');
  document.querySelector('.button-up').classList.add('is-hidden');

  //   Отримуємо дані з БД

  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      //   Отримуємо дані з БД
      const userData = readTheDoc(uid)
        .then(response => {
          return response;
        })
        .then(data => {
          let films;
          if (watchedBtn.classList.contains('active-btn')) {
            films = data.filmsWatched; // масив з фільмами

            const mov = films.find(film => film.id === Number(movieId));

            renderModalWatched(mov);
            const watchedDeleteBtn = document.querySelector(
              '#filmsWatchedDelete'
            );
            function delWatched() {
              updateDoc(doc(firestore, 'users', uid), {
                filmsWatched: arrayRemove(mov),
              });
              watchedDeleteBtn.disabled = true;
              watchedDeleteBtn.classList.add('button-disabled');
              iziToast.success({
                title: 'DELETE',
                message: 'Successfully delete record!',
              });
              setTimeout(() => {
                renderStartLibrary();
              }, 100);
              // renderStartLibrary();
            }
            watchedDeleteBtn.addEventListener('click', delWatched);
          } else if (queueBtn.classList.contains('active-btn')) {
            films = data.filmsQueue; // масив з фільмами

            const mov = films.find(film => film.id === Number(movieId));

            renderModalQueue(mov);

            function delQueue() {
              updateDoc(doc(firestore, 'users', uid), {
                filmsQueue: arrayRemove(mov),
              });
              queueDeleteBtn.disabled = true;
              queueDeleteBtn.classList.add('button-disabled');
              iziToast.success({
                title: 'DELETE',
                message: 'Successfully delete record!',
              });
              setTimeout(() => {
                renderQueueLibrary();                
              }, 100);
              // renderQueueLibrary();
            }
            const queueDeleteBtn = document.querySelector('#filmsQueueDelete');
            queueDeleteBtn.addEventListener('click', delQueue);
          }
        });
    } else {
      console.log('user is logout');
    }
  });
}

function renderModalWatched(movie) {
  document
    .querySelector('.modal-thumb')
    .insertAdjacentHTML('beforeend', createModalCardWatched(movie));
  document.querySelector('body').classList.add('overflow-hidden');
}
function createModalCardWatched(movie) {
  return `<img class="modal__img" src="${movie.img}" alt="" width="240">
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
                                    <span class="movie-votes__first">${movie.vote_average}</span> / <span class="movie-votes__sec">${movie.vote_count}</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-popularity__item">${movie.popularity}</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-orig-title__item">${movie.original_title}</span>
                                </li>
                                <li class="movie-data__item">
                                    <span class="movie-genre__item">
                                      ${movie.genres}
                                    </span>
                                </li>
                            </ul>
                        </li>  
                    </ul>
                    
                    <p class="movie-about">About</p>
                    <p class="movie-about-text">${movie.overview}</p>
                    <ul class="modal-btns">
                        <li class="modal-btns__item">
                            <button class="button add-watched-btn delete" type="button" id="filmsWatchedDelete">Delete from Watched</button>
                        </li>
                        
                    </ul>
                </div>`;
}

function renderModalQueue(movie) {
  document
    .querySelector('.modal-thumb')
    .insertAdjacentHTML('beforeend', createModalCardQueue(movie));
  document.querySelector('body').classList.add('overflow-hidden');
}
function createModalCardQueue(movie) {
  return `<img class="modal__img" src="${movie.img}" alt="" width="240">
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
                                  <span class="movie-votes__first">${movie.vote_average}</span> / <span class="movie-votes__sec">${movie.vote_count}</span>
                              </li>
                              <li class="movie-data__item">
                                  <span class="movie-popularity__item">${movie.popularity}</span>
                              </li>
                              <li class="movie-data__item">
                                  <span class="movie-orig-title__item">${movie.original_title}</span>
                              </li>
                              <li class="movie-data__item">
                                  <span class="movie-genre__item">
                                    ${movie.genres}
                                  </span>
                              </li>
                          </ul>
                      </li>  
                  </ul>
                  
                  <p class="movie-about">About</p>
                  <p class="movie-about-text">${movie.overview}</p>
                  <ul class="modal-btns">
                      <li class="modal-btns__item">
                          <button class="button add-watched-btn delete" type="button" id="filmsQueueDelete">Delete from queue</button>
                      </li>
                  </ul>
              </div>`;
}
const closeModalBtn = document.querySelector('#modal-btn');
function closeModal() {
  document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
  document.querySelector('body').classList.remove('overflow-hidden');
}
closeModalBtn.addEventListener('click', () => closeModal());
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
document.querySelector('.drop-box').addEventListener('click', e => {
  if (!document.querySelector('.modal').contains(e.target)) {
    closeModal();
  }
});
