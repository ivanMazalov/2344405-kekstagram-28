import { renderPhotos } from './photo-render.js';
import { initPhotoUpload } from './photo-upload.js';
import { initPhotoEffectsSlider } from './photo-effects-slider.js';
import { fetchData } from './api.js';
import { setFilterDefault, setFilterDiscussed, setFilterRandom } from './filter-sort.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

const debouncedRenderPhotos = debounce(renderPhotos, RERENDER_DELAY);

fetchData((photos) => {
  debouncedRenderPhotos(photos);
  setFilterDefault(photos, debouncedRenderPhotos);
  setFilterDiscussed(photos, debouncedRenderPhotos);
  setFilterRandom(photos, debouncedRenderPhotos);
});

initPhotoUpload();
initPhotoEffectsSlider();
