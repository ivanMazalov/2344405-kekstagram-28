import { renderPhotos } from './photo-render.js';
import { initPhotoUpload } from './photo-upload.js';
import { initPhotoEffectsSlider } from './photo-effects-slider.js';
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
