import {renderPhotos} from './thumbnails.js';
import { initPhotoUpload } from './upload-form.js';
import { initPhotoEffectsSlider } from './effects.js';
import { fetchData } from './api.js';

initPhotoUpload();
initPhotoEffectsSlider();

fetchData(renderPhotos);
