import { renderPhotos } from './thumbnails.js';
import { initPhotoUpload } from './upload-form.js';
import { initPhotoEffectsSlider } from './effects.js';
import { fetchData } from './api.js';
import { setFilterDefault, setFilterDiscussed, setFilterRandom } from './filter-sort.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

fetchData((photos) => {
  renderPhotos(photos);
  setFilterDefault(photos, debounce(renderPhotos, RERENDER_DELAY));
  setFilterDiscussed(photos, debounce(renderPhotos, RERENDER_DELAY));
  setFilterRandom(photos, debounce(renderPhotos, RERENDER_DELAY));
});

initPhotoUpload();
initPhotoEffectsSlider();


