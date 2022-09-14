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
  currentUser,
} from 'firebase/auth';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  timeout: 2000,
});

const emailReg = document.querySelector('#user-email-reg');
const passwordReg = document.querySelector('#user-password-reg');
const btnReg = document.querySelector('#btn-reg');
const emailAuth = document.querySelector('#user-email-auth');
const passwordAuth = document.querySelector('#user-password-auth');
const btnAuth = document.querySelector('#btn-auth');
const btnLibrary = document.querySelector('.library');
const btnSignIn = document.querySelector('.authorization');
const modalAuth = document.querySelector('.auth-modal');
const modalReg = document.querySelector('.registr-modal');
const body = document.querySelector('body');

btnSignIn.classList.add('is-stealth');
btnLibrary.classList.add('is-stealth');

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQAPWu6PN62rmzf-LlZS504qxL8csmmBc',
  authDomain: 'filmoteka-bdb19.firebaseapp.com',
  projectId: 'filmoteka-bdb19',
  storageBucket: 'filmoteka-bdb19.appspot.com',
  messagingSenderId: '1051248700372',
  appId: '1:1051248700372:web:2dc6796345cd1c6fa94441',
};

const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore();

// ________________________Реєстрація Авторизація__________________________

const auth = getAuth();

//створення запису в Бд
async function createDoc(email, id) {
  const docData = {
    email: email,
    id: id,
    filmsWatched: [],
    filmsQueue: [],
  };
  try {
    await setDoc(doc(firestore, 'users', `${id}`), docData, { merge: true });
  } catch (error) {
    console.log(error);
  }
}

//авторизація користувача
async function loginEmailPassword(event) {
  event.preventDefault();
  const loginEmail = emailAuth.value;
  const loginPassword = passwordAuth.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    btnLibrary.classList.remove('is-stealth');
    btnSignIn.classList.add('is-stealth');
    modalAuth.classList.remove('open');
    body.classList.remove('overflow-hidden');
    iziToast.success({
      title: 'OK',
      message: 'Successful login to the account!',
    });
  } catch (error) {
    console.log('error');
    iziToast.error({
      title: 'Error',
      message: 'Check the entered data or Sign up',
    });
  }
}

//створення акаунта
async function createAccaunt(event) {
  event.preventDefault();
  const regEmail = emailReg.value;
  const regPassword = passwordReg.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      regEmail,
      regPassword
    );
    const userId = userCredential.user.uid;
    createDoc(regEmail, userId);
    btnLibrary.classList.remove('is-stealth');
    btnSignIn.classList.add('is-stealth');
    modalReg.classList.remove('open');
    body.classList.remove('overflow-hidden');
    iziToast.success({
      title: 'OK',
      message: 'Account created successfully!',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Check the entered data or Sign in',
    });
  }
}

btnReg.addEventListener('click', createAccaunt);
btnAuth.addEventListener('click', loginEmailPassword);

onAuthStateChanged(auth, user => {
  if (user) {
    btnLibrary.classList.remove('is-stealth');
  } else {
    btnSignIn.classList.remove('is-stealth');
  }
});
