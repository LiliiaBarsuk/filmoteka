import { API_KEY, API_URL, createModalCard } from './findMovies';

let addToLibrBtn;
let addToQueueBtn;

export async function showModal(e) {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  document.querySelector('.drop-box').classList.remove('drop-box--is-hidden');

  let url = `${API_URL}movie/${e.target.dataset.id}?api_key=${API_KEY}`;

  await fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);
      document
        .querySelector('.modal-thumb')
        .insertAdjacentHTML('beforeend', createModalCard(movie));
      document.querySelector('body').classList.add('overflow-hidden');
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
}
