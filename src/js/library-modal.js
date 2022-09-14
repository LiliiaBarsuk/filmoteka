export function renderModalWatched(movie) {
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

export function renderModalQueue(movie) {
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

export function closeModal() {
  document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
  document.querySelector('.modal-thumb').innerHTML = '';
  document.querySelector('body').classList.remove('overflow-hidden');
  const btnQueueCondition = queueBtn.classList.contains('active-btn');
  location.reload();
}
