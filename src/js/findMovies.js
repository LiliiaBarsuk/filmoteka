import { genres } from '../genres.json';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'afc22cf5c573169849cabd6217d3b7d3';
let requestMovie = '';
let pageNumber = 1;
let totalpages = 1;
let searchingFlag = false;

const inputEl = document.querySelector('.header__input');
const searchButtonEl = document.querySelector('.search-btn');
const movieListEl = document.querySelector('.movie-list');
const closeModalBtn = document.querySelector('.modal__button');
const paginationBtn = document.querySelectorAll('.pagination-btn');
const mainPaginationBtn = document.querySelector('.pagination-btn__main');
const arrowLeftBtn = document.querySelector('.pagination-btn__arrow-left');
const arrowRightBtn = document.querySelector('.pagination-btn__arrow-right');
const paginationNumbers = document.querySelector('.pagination-list');


showMovies(createCurrentUrl(pageNumber));


searchButtonEl.addEventListener('click', loadMovies);
inputEl.addEventListener('input', serchingParametr);
movieListEl.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', () => closeModal());
document.addEventListener("keydown", e => {        
        if (e.code === 'Escape') {
            closeModal();
        }
});
document.querySelector('.drop-box').addEventListener('click', e => {    
    if (!document.querySelector('.modal').contains(e.target)) {
        closeModal();
    }
});
arrowLeftBtn.addEventListener('click', () => {
    if (pageNumber <= 1) {
        return; 
    }
    pageNumber -= 1;    
    
    paginationPageChange();
});
arrowRightBtn.addEventListener('click', () => {
    if (totalpages <= pageNumber) {
        return;        
    }
    pageNumber += 1;
    
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



function createCurrentUrl(pageNumber) {
    return `${API_URL}trending/movie/week?api_key=${API_KEY}&page=${pageNumber}`;
}

function createSearchingUrl(requestMovie, pageNumber) {
    return `${API_URL}search/movie?api_key=${API_KEY}&query=${requestMovie.trim()}&page=${pageNumber}`;
}

function loadMovies(e) {   

    let check = checkforNotFoundNotification(requestMovie.trim().length < 1);

    if (check) {
        pageNumber = 1;
        searchingFlag = true;        
        showMovies(createSearchingUrl(requestMovie, pageNumber));
    }    
}

function showMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            console.log(movies);

            checkforNotFoundNotification(movies.results === undefined || movies.results.length < 1);
            
            if (movies.results.length !== 0) {
                clearPage();                
                totalpages = movies.total_pages;
                puginationNumeration(pageNumber, totalpages);                
                movieListEl.insertAdjacentHTML('beforeend', createMoviesList(movies));              
            }
            
                                
        })
        .catch(error => console.log(error));
}

function serchingParametr(e) {
    requestMovie = e.currentTarget.value;    
}

function createMoviesList(movies) {    
    return movies.results.map(({ poster_path, id, title, genre_ids, release_date }) => {        
        return `<li class="movie-item">
                    <img class="movie-img" src="${createImg(poster_path)}" data-id="${id}" alt="${title}" width="280">
                    <h2 class="movie-title">${title}</h2>
                    <p class="movie-description">${createGenresString(genre_ids)} | ${checkAndCreateDate(release_date)}</p>
                </li>`;
    }).join('');
}

function createImg(poster_path) {
    let posterPath = `https://image.tmdb.org/t/p/w300${poster_path}`;
    if (poster_path === null) {
        posterPath = 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';
    }
    return posterPath;
}

function createGenresString(genre_ids) {
    if (genre_ids.length < 1) {
        return 'Unknown genre';
    }

    if (genre_ids.length > 2) {
        return genre_ids.slice(0, 2).map(id => {
            for (let i = 0; i < genres.length; i += 1) {
                if (genres[i].id === id) {
                    return genres[i].name;
                }
            }
        }).join(', ') + ', others...'; 
    }
    return genre_ids.map(id => {
            for (let i = 0; i < genres.length; i += 1) {
                if (genres[i].id === id) {
                    return genres[i].name;
                }
            }
        }).join(', ');         
}

function checkAndCreateDate(release_date) {
    let date = 'Unknown date';
    if (release_date) {
        date = release_date.slice(0, 4);
    }

    return date;
}

function clearPage() {
    movieListEl.innerHTML = '';
}

function showNotFoundNotification() {
    document.querySelector('.not-found-notification').classList.remove('disabled');
}

function clearNotFoundNotification() {
    document.querySelector('.not-found-notification').classList.add('disabled');
}

function checkforNotFoundNotification(flag) {
    if (flag) {
        showNotFoundNotification();
        
    } else {
        clearNotFoundNotification();
    }
    return document.querySelector('.not-found-notification').classList.contains('disabled');
}

function showModal(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    }       

    document.querySelector('.drop-box').classList.remove('drop-box--is-hidden');

    let url = `${API_URL}movie/${e.target.dataset.id}?api_key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);      
            document.querySelector('.modal-thumb').insertAdjacentHTML('beforeend', createModalCard(movie));
            document.querySelector('body').classList.add('overflow-hidden');
                                            
        })
        .catch(error => console.log(error));
}

function closeModal() {
    document.querySelector('.drop-box').classList.add('drop-box--is-hidden');
    document.querySelector('.modal-thumb').innerHTML = '';
    document.querySelector('body').classList.remove('overflow-hidden');
}

function createModalCard(movie) {    
    return `<img class="modal__img" src="${createImg(movie.poster_path)}" alt="" width="240">
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
                                    <span class="movie-genre__item">${createModalGenresString(movie.genres)}</span>
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

function puginationNumeration(currentPage, totalpages) {    
    paginationBtn[0].textContent = Number.parseInt(currentPage) - 4 > 0 ? 1 : '';
    paginationBtn[1].textContent = Number.parseInt(currentPage) - 4 > 0 ? '...' : '';
    paginationBtn[2].textContent = Number.parseInt(currentPage) - 2 > 0 ? Number.parseInt(currentPage) - 2 : '';
    paginationBtn[3].textContent = Number.parseInt(currentPage) - 1 > 0 ? Number.parseInt(currentPage) - 1 : '';
    mainPaginationBtn.textContent = Number.parseInt(currentPage);
    paginationBtn[5].textContent = Number.parseInt(currentPage) + 1 <= Number.parseInt(totalpages) ? Number.parseInt(currentPage) + 1 : '';
    paginationBtn[6].textContent = Number.parseInt(currentPage) + 2 <= Number.parseInt(totalpages) ? Number.parseInt(currentPage) + 2 : '';
    paginationBtn[7].textContent = Number.parseInt(currentPage) + 4 <= Number.parseInt(totalpages) ? '...' : '';
    paginationBtn[8].textContent = Number.parseInt(currentPage) + 4 <= Number.parseInt(totalpages) ? Number.parseInt(totalpages) : '';
}

function paginationPageChange() {
    if (!searchingFlag){
            showMovies(createCurrentUrl(pageNumber));
        } else {
            showMovies(createSearchingUrl(requestMovie, pageNumber));
        }    
        window.scrollTo({ top: 0, behavior: 'smooth' });
}

