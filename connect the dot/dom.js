// // similar to css

// // select the element or group of elements the you we want to affect
// // decide the effect we want to apply to the selection

// // many different ways

// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'yellow';
// document.getElementById('btn').style.color = 'red';

// // assign to a variable

// const element = document.getElementById('element');

// // do something

// document.querySelector('element'); // do something;

// // // window object
// // console.log(window);

// // returns a node object or a node list, which is an arraylike object

// const btn = document.getElementById('btn');
// const name = btn.nodeName;
// const css = btn.style;
// console.log(btn);

// // console.log(name);
// // console.log(css);


// window object = browser api
// document 
// console.dir


// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection


// getElementById('element')

// const h1 = document.getElementById('title');
// h1.style.color = 'red';

// const btn = document.getElementById('btn');

// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';




// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
console.log(headings.length);



