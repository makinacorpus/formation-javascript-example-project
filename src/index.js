/* eslint no-console: ["error", { allow: ["log"] }] */
/* global window */
import './script2';
import './styles/main.css';

const a = 'b';
const b = 'c';
const c = 'constant';
console.log(`Hello World ${a} ${b} ${c}`);
console.log(`Hello World ${window.a}${window.b}${window.c}`);

const myArray = ['pouet', 'pouic'];
const myArray2 = [...myArray, 'pouet2'];
const myObject = { destination: 'Paris', origine: 'Toulouse' };
const { destination, origine } = myObject;

console.log(destination, origine, myObject);
console.log(myArray2, myArray);

