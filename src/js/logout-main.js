import { initializeApp } from 'firebase/app';
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

const logOutMain = document.querySelector('#logout-main');

logOutMain.classList.add(`is-stealth`);

const firebaseConfig = {
  apiKey: 'AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc',
  authDomain: 'filmoteka-bdb19.firebaseapp.com',
  projectId: 'filmoteka-bdb19',
  storageBucket: 'filmoteka-bdb19.appspot.com',
  messagingSenderId: '1051248700372',
  appId: '1:1051248700372:web:2dc6796345cd1c6fa94441',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

logOutMain.addEventListener('click', logOut);

onAuthStateChanged(auth, user => {
  //перевіряємо чи користувач залогінений
  if (user) {
    logOutMain.classList.remove(`is-stealth`);
  } else {
    logOutMain.classList.add(`is-stealth`);
    console.log('user is logout');
  }
});

function logOut() {
  signOut(auth)
    .then(() => {
      location.href = '../filmoteka-team3/index.html';
      console.log('Sign-out successful.');
    })
    .catch(error => {
      console.log(qwe);
    });
}
