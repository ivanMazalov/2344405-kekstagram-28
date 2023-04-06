import {generateComments, generatePhotos} from './data';
import {renderPhotos} from './mini-photos';

generateComments();
generatePhotos();
renderPhotos(generatePhotos());
