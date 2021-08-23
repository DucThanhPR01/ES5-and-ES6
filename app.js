// const name = "Ducthanhpr";
// let experiece = 100;
// var wizardlevel = false;

// if (experiece > 90) {
//    var wizardlevel = true;
// }


//Destructuring

// const obj = {
//     player: "Ducthanhpr",
//     experience: 100,
//     wizardlevel: false
// }

//object properties: thuoc tinh doi tuong
// const name = "Ducthanhpr";

// const obj = {
//     // [name]: 'hello',
//     // [1 + 2]: 'hihi'
// }

//teamplate strings
// const ten = "ducthanhpr";
// const age = 34;
// const pet = "horse";
// // const greeting = "hello" + ten + "you seem to be doing" + greeting + "!";

// const greetingBest = 'hello ${ten} you seem to be ${age-10}. What a lovely ${pet} you have?';

//default arguments
// function greet (name='', age = 20, pet = 'cat'){
//     return 'hello ' + name + ' you seem to be ' + (age-10) + ' . What a lovely ' + pet + ' you have?';
// }

// Symbol
// let sym1 = Symbol();
// let sym2 = Symbol('foo');
// let sym3 = Symbol('foo');

// test 
// sym2 === sym3;

//arrow function 
function total (a, b) {
    return a + b;
}

const total2 = (a,b) => a + b;

console.log(total(5, 6));
console.log(total2(5, 6));

//advanced function
const first = () => {
    const greet = 'hi';

    const second = () => {
        const name = "body";
        alert (greet);
    }
    return second;
}

const newFunc = first();
newFunc(); 

//Currying
const multiply = (a, b) => a * b;
const curriedMyltiply = (a) => (b) => a * b;
curriedMyltiply(3)(4);

const multiplyBy5 = curriedMyltiply(5);

//Compose 
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num+1;

compose(sum, sum)(5);

// Avoiding side effect. functional purity.
