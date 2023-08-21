import {initUploadForm} from './form.js';
import { createPictures } from './data.js';
import { renderPictures } from './render-pictures.js';
import { initEffects } from './effects.js';

const photoData = createPictures();
renderPictures(photoData);

initUploadForm();
initEffects();
