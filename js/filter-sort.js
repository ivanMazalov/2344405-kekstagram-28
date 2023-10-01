import {getRandomArrayElement} from './util.js';

const filtersFormElement = document.querySelector('.img-filters__form');
const filterDiscussedElement = filtersFormElement.querySelector('#filter-discussed');
const filterDefaultElement = filtersFormElement.querySelector('#filter-default');
const filterRandomElement = filtersFormElement.querySelector('#filter-random');
const filterButtonElements = filtersFormElement.querySelectorAll('.img-filters__button');

const MAX_SORTED_COUNT = 10;

const updateFilter = (evt) => {
  filterButtonElements.forEach((item) => {
    item.classList.remove('img-filters__button--active');
  });
  evt.target.classList.add('img-filters__button--active');
};

const setFilterDefault = (photos, cb) => {
  filterDefaultElement.addEventListener('click', (evt) => {
    cb(photos);
    updateFilter(evt);
  });

};

const sortDiscussed = (a, b) => b.comments.length - a.comments.length;

const setFilterDiscussed = (photos, cb) => {
  filterDiscussedElement.addEventListener('click', (evt) => {
    const photosSorted = photos.slice().sort(sortDiscussed);
    cb(photosSorted);
    updateFilter(evt);
  });
};


const setFilterRandom = (photos, cb) => {
  filterRandomElement.addEventListener('click', (evt) => {
    const photosSorted = [];
    while (photosSorted.length < MAX_SORTED_COUNT) {
      const randomPhoto = getRandomArrayElement(photos);
      if (!photosSorted.includes(randomPhoto)) {
        photosSorted.push(randomPhoto);
      }
    }
    cb(photosSorted);
    updateFilter(evt);
  });
};

export { setFilterDefault, setFilterRandom, setFilterDiscussed };
