// similar to css

// select the element or group of elements the you we want to affect
// decide the effect we want to apply to the selection

// many different ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable

const element = document.getElementById('element');

// do something

document.querySelector('element'); // do something;

// // window object
// console.log(window);

// returns a node object or a node list, which is an arraylike object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
console.log(btn);

// console.log(name);
// console.log(css);