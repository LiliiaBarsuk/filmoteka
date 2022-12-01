import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
} from 'firebase/auth';

const logOutBtn = document.querySelector('#logout-lib');

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

function logOut() {
  signOut(auth)
    .then(() => {
      location.href = 'https://liliiabarsuk.github.io/filmoteka';
    })
    .catch(error => {
      console.log(error);
    });
}

logOutBtn.addEventListener('click', logOut);
