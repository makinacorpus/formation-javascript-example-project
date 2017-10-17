/* eslint no-console: ["error", { allow: ["log"] }] */
/* global window */
import './script2';

const a = 'b';
const b = 'c';
const c = 'constant';
console.log(`Hello World ${a} ${b} ${c}`);
console.log(`Hello World ${window.a}${window.b}${window.c}`);
