import { createPictures } from './data.js';
import { createUserPhotos } from './thumbnail.js';

const photoData = createPictures();
createUserPhotos(photoData);
