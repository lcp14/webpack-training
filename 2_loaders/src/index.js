import Title from './components/title';
import Image from './components/image';
import Button from './components/button';
import warning from './templates/warning.html';
import './styles/warning.css';
import fraseText from './files/frase.txt';

const title = new Title();

title.create("Home");

const image = new Image();

image.insertBobImage();

const button = new Button();

button.create();

// Babel Spread
const obj = { a: 1, b: 2, c:3, d:4 }

let { a, b, ...teste } = obj;

console.log(a);
console.log(b);
console.log(teste);

// Import de html

const body = document.querySelector('body');
body.innerHTML += warning

// import txt

const frase = fraseText;

console.log(frase);