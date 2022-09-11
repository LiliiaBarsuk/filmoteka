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
          let films = data.filmsWatched; // масив з фільмами

          // -----------
          totalPages = Math.ceil(films.length / 20);
          if (totalPages === 1) {
            checkWatched(films);
            pageNumber = 1;
            console.log(totalPages);
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          } else {
            let i = pageNumber * 20;
            let j = i - 20;
            console.log(i);
            films = data.filmsWatched.slice(j, i);
            checkWatched(films);
            console.log(totalPages);
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
            return;
          }
          // ///////------
          // checkWatched(films);
          // totalPages = Math.ceil(films.length / 20);
          // console.log(totalPages);
          // pagination.classList.remove(`is-stealth`);
          // puginationNumeration(pageNumber, totalPages);
        });
    } else {
      console.log('user is logout');
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

          // console.log(filmsCollection);

          totalPages = Math.ceil(filmsCollection.length / 20);
          if (totalPages === 1) {
            checkMovie(filmsCollection);
            pageNumber = 1;
            console.log(totalPages);
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          } else {
            let i = pageNumber * 20;
            let j = i - 20;
            console.log(i);
            filmsCollection = data[arrayName].slice(j, i);
            checkMovie(filmsCollection);
            console.log(totalPages);
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
    emptyInfo.classList.remove(`is-stealth`);
  } else {
    emptyInfo.classList.add(`is-stealth`);
    renderMovie(collection);
    pagination.classList.remove(`is-stealth`);
    puginationNumeration(pageNumber, totalPages);
  }
}

function renderMovie(collection) {
  const markUpCards = collection
    .map(({ img, id, title, genres, date }) => {
      return `<li class="movie-item">
                    <img class="movie-img" src="${createImg(
                      img
                    )}" data-id="${id}" alt="${title}" width="280">
                    <h2 class="movie-title">${title}</h2>
                    <p class="movie-description">${createGenresString(
                      genres
                    )} | ${date}</p>
                </li>`;
    })
    .join('');

  // console.log(markUpCards);
  movieListEl.insertAdjacentHTML('beforeend', markUpCards);
}

// function renderQueueMovie() {
//   const markUpCards = queueMovie
//     .map(({ img, id, title, genres, release_date }) => {
//       return `<li class="movie-item">
//                     <img class="movie-img" src="${createImg(
//                       img
//                     )}" data-id="${id}" alt="${title}" width="280">
//                     <h2 class="movie-title">${title}</h2>
//                     <p class="movie-description">${createGenresString(
//                       genres
//                     )} | ${checkAndCreateDate(release_date)}</p>
//                 </li>`;
//     })
//     .join('');

// console.log(markUpCards);
//   movieListEl.insertAdjacentHTML('beforeend', markUpCards);
// }

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
  // watchedBtn.classList.add('active-btn');
  // queueBtn.classList.remove('active-btn');
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
  // paginationBtn[1].textContent = Number.parseInt(currentPage) - 3 > 0 ? Number.parseInt(currentPage) - 3 === 1 ? 1 : '...' : '';
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
  // paginationBtn[7].textContent = Number.parseInt(currentPage) + 4 <= Number.parseInt(totalPages) ? '...' : '';
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

          // -----------
          totalPages = Math.ceil(films.length / 20);
          if (totalPages === 1) {
            checkWatched(films);
            pageNumber = 1;
            console.log(totalPages);
            pagination.classList.remove(`is-stealth`);
            puginationNumeration(pageNumber, totalPages);
          } else {
            let i = pageNumber * 20;
            let j = i - 20;
            console.log(i);
            films = data.filmsQueue.slice(j, i);
            checkWatched(films);
            console.log(totalPages);
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
