import {renderPhotos} from './thumbnails.js';
import { initPhotoUpload } from './upload-form.js';
import { initEffects } from './effects.js';
import { fetchData } from './api.js';


fetchData(renderPhotos);

initPhotoUpload();
initEffects();
