import GalleryComponent from './components/GalleryComponent';
import './css/main.css';

const body = document.querySelector('body');
new GalleryComponent({
    target: body,
});