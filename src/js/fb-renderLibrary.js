import './modal-developers';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, exists, onSnapshot, updateDoc, arrayUnion, collection, query, where, getDocs, arrayRemove  } from 'firebase/firestore/lite';
import { getAuth, 
    showLoginError, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    AuthErrorCodes,
    signOut,
    setPersistence } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc",
    authDomain: "filmoteka-bdb19.firebaseapp.com",
    projectId: "filmoteka-bdb19",
    storageBucket: "filmoteka-bdb19.appspot.com",
    messagingSenderId: "1051248700372",
    appId: "1:1051248700372:web:2dc6796345cd1c6fa94441"
};
    
const firebaseApp = initializeApp(firebaseConfig);
    
const firestore = getFirestore(); //наша бд

const auth = getAuth();


const emptyInfo = document.querySelector('.info');
const movieListEl = document.querySelector('.movie-list');
const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');

renderStartLibrary() //рендер бібліотеки при переході з вкладки home (WatchedMovies)

queueBtn.addEventListener('click', renderLibrary);
watchedBtn.addEventListener('click', renderLibrary);

function renderStartLibrary() { //рендер бібліотеки при переході з вкладки home (WatchedMovies)
    watchedBtn.classList.add('active-btn');
    queueBtn.classList.remove('active-btn');

    onAuthStateChanged(auth, (user) => { //перевірка чи  user залогінений
        if (user) {
        // User is signed in
        const uid = user.uid; // id user
        //   Отримуємо дані з БД
        const userData =  readTheDoc(uid).then(response => { //отримуємо дані з firestore
           return response
        }).then(data => { //data це весь об`єкт з даними (email, filmsWatched, filmsQueue, id)
            const films = data.filmsWatched; //filmsWatched
            checkMovie(films) //створення та рендер розмітки
        })

       } else {
        console.log('user is logout');
        } 
})
};

function renderLibrary(e) {

    if (e.target === watchedBtn) {
    watchedBtn.classList.add('active-btn');
    queueBtn.classList.remove('active-btn');
    }
    else if (e.target === queueBtn) {
    watchedBtn.classList.remove('active-btn');
    queueBtn.classList.add('active-btn');
    }
   
    const arrayName = e.target.id; //id кнопки на яку нажали, і назва масиву, з якого будуть братись дані 

onAuthStateChanged(auth, (user) => { //перевірка чи  user залогінений
        if (user) {
        // User is signed in
        const uid = user.uid;
        //   Отримуємо дані з БД
        const userData =  readTheDoc(uid).then(response => { //отримуємо дані з firestore
           return response
        }).then(data => { //data це весь об`єкт з даними (email, filmsWatched, filmsQueue, id)
            const filmsCollection = data[arrayName];  //filmsWatched або filmsQueue

            // console.log(filmsCollection);
            checkMovie(filmsCollection) //створення та рендер розмітки
        })

       } else {
        console.log('user is logout');
        } 
})

}
async function readTheDoc (id) {
    const myDoc = await getDoc(doc(firestore, 'users', `${id}`));
        if (myDoc.exists()) { //якщо док існує дістаємо з нього необхідні дані. функція повертає проміс!
            const data = myDoc.data();
            return data
        } 
            
};



function checkMovie(collection) {
 
  movieListEl.innerHTML = '';
  if (collection.length < 1) {
    emptyInfo.classList.remove(`is-stealth`);
  } else {
    renderMovie(collection);
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

function checkAndCreateDate(release_date) {
  let date = 'Unknown date';
  if (release_date) {
    date = release_date.slice(0, 4);
  }

  return date;
}
