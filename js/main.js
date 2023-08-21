import {initUploadForm} from './form.js';
import { createPictures } from './data.js';
import { renderPictures } from './render-pictures.js';


const photoData = createPictures();
renderPictures(photoData);

initUploadForm();
