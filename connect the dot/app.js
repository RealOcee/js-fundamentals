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




// Functions, return, if, arrays, for loop
const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}


const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
});















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



















