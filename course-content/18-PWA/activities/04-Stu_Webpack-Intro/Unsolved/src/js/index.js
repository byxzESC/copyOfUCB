// TODO: Add a comment explaining role of the index.js file and import statements
// important function from box and header, and add listeners to elements when they are clicked
import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
