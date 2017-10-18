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

class HelloClass {
  myProperty = 'Hey it\'s me !';

  afficher(message) {
    console.log(message, this.myProperty);
  }
}

const newClass = new HelloClass();
newClass.afficher('Hello World');

{
  let maVariableLet = 'a';
  const maVariableConstante = 'b';
  var maVariableVar = 'c';
  {
      console.log(maVariableLet); // 'a'
      console.log(maVariableConstante); // 'b'
      console.log(maVariableVar); // 'c'
      maVariableLet = 'ab';
      // maVariableConstante = 'bc';
      maVariableVar = 'cd';
      {
        console.log(maVariableLet); // undefined
        let maVariableLet = 'aLocale';
        console.log(maVariableLet); // 'aLocale'
      }
      console.log(maVariableLet); // 'ab'
      console.log(maVariableConstante); // 'b'
      console.log(maVariableVar); // 'cd'
  }
  console.log(maVariableLet); // 'ab'
  console.log(maVariableConstante); // 'c'
  console.log(maVariableVar); // 'cd'

}
