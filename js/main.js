import {initUploadForm} from './form.js';
// import { createPictures } from './data.js';
import { renderPictures } from './render-pictures.js';
import { initEffects } from './effects.js';
import { getData } from './api.js';
import { showAlert } from './functions.js';


initUploadForm();
initEffects();

getData().
  then((photos) =>{
    renderPictures(photos);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


