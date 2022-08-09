// String properties and methods
// Wrapper String Object.

// let text = ' Andrew Onaulogho';
// let result = text.length;
// console.log(result);

// console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('o'));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().toLowerCase().startsWith('andrew'));
// console.log(text.includes('rew'));
// console.log(text.slice(0, 2));
// console.log(text.slice(-5));



// Template Literals - ES6+
// Backtick characters '' - above tab (left from one)
// Interpolation ${} - insert expression(value)

// const name = 'andrew';
// const age = 25;
// const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';
// console.log(sentence);

// const value = `Hey it's ${name} and he is ${age}`;
// console.log(value);


// // Array Properties and Methods
// let names = ['andrew', 'ase', 'odus', 'lamosi', 'ik'];

// //length
// console.log(names.length);
// console.log(names[names.length -1]);

// //concat 
// const lastNames = ['rice', 'beans', 'yam'];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// //Reverse
// console.log(allNames.reverse());

// //unshift
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);

// //shift
// allNames.shift();
// allNames.shift();
// console.log(allNames);

// //push
// allNames.push('susy');
// console.log(allNames);

// //pop
// allNames.pop();
// console.log(allNames);

// //splice - mutates original array
// const specificNames = allNames.splice(0, 3);
// console.log(specificNames);
// console.log(allNames);


// // Arrays and for loop

// const names = ['anna', 'susy', 'bob']
// const lastName = 'vito'
// let newArray = [];

// //for loop
// for (let i = 0; i < names.length; i++) {
//     console.log(i);
//     console.log(names[i]);
//     const fullName = `${names[i]} ${lastName}`;
//     newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);




// // Functions, return, if, arrays, for loop
// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     if (total > 100) {
//         console.log(`Whoa! You are spending way too much`);
//         return total;
//     }
//     console.log(`You are good total is less than 100`);
    
//     return total;
// }


// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//     gas: gasTotal,
//     food: foodTotal,
//     random: randomTotal,
// });


// const person = {
//     name: 'andrew', // property
//     greeting() {
//         // method
//         console.log("Hey, I'm Peter");
//     },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();



// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undifined, Null,
// Arrays, Functions, Obijects = object
// typeof

// when assigning primitive data type value to variable any changes are made directly to that values, without affecting original value

// when assigning non-primitive data type value to the variable is done by reference so any changes will affect all the references. 

// const number = 1;
// let number2 = number;
// number2 = 7
// console.log(`the first value is ${number}`);
// console.log(`the second value is ${number2}`);

// let person = { name: 'bob' };
// let person2 = person;
// person2.name = 'susy';
// console.log(`the name of the first person is ${person.name}`);
// console.log(`the name of the second person is ${person2.name}`);



// Null and Undifined 
// both represent "no value"

// undifined - "javascript can not find value for this"


// variable without value 
// missing function arguments
// missing object properties


// null - "developer sets the values"

// let number = 20 + null; // 20 + 0;
// console.log(number);
// let number2 = 20 + undefined; //20 + 0;
// console.log(number2);




// Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undifined

// const bool1 = true;
// const bool2 = 2 > 1;

// const text = '';
// if (text) {
//     console.log('hey the value Truthy');
// } else {
//     console.log('hey the value Falsy');
// }

// if (true) {
//     console.log(`Hey it works!`);
// }
// if (2 > 1) {
//     console.log(`Hey it also works!`);
// }

// unary operator - typeof
// let text = 'some text';
// console.log(typeof text); // operand
// binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;
// ternary operator
// condition ? (runs if true) : (runs if false)

// const value = 2 < 1;

// value ? console.log('value is true') : console.log('value is false');

// if(value) {
//     console.log('value is true');
// } else{
//     console.log('value is false');
// }

// Global Scope vs Local Scope
// Any variable outside code block {} is said to be in Global Scope 
// can be access anywhere in the program
// Gotchas : name collisions, modify by mistake

// let name = 'bobo';
// name = 'peter';

// function calculate() {
//     // some other code...
//     console.log(name);
//     name = 'orange';
//     function inner() {
//         name = 'inner name value';
//         console.log(`this is from inner function ${name}`);
//     }
//     inner();
// }
// calculate();

// if (true) {
//     // some other code...
//     console.log(name);
//     name = 'pants';
// }

// console.log(`my name is ${name} and I'm awesome`);


//Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';


function calculate() {
    const name = 'john';
    const age = 24;
    // code goes here
    becomesGlobal = 'global variable'
}
calculate();
console.log(becomesGlobal);

if (true) {
    const name = 'john';
}

console.log(`my name is ${name} and I'm awesome`);