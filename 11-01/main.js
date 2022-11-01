import Title from './title.js';

const title = new Title('peter');

document.body.innerHTML += title.render();
/*
document.body.innerHTML += title('Not Peter');
*/
