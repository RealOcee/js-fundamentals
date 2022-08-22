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

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red';
// console.log(headings.length);



// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// node-list = array-like object
// index, length property but not array methods

// const listItems = document.getElementsByClassName('special');
// listItems[1].style.color = 'blue';

// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection


// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

// const result = document.querySelector('#result');
// result.style.backgroundColor = 'blue';

// const item = document.querySelector('.special');
// // console.log(item);

// const lastItem = document.querySelector('li:last-child');
// // console.log(lastItem);


// const list = document.querySelectorAll('.special');

// list.forEach(function(item) {
//     console.log(item);
//     item.style.color = 'yellow'
// }
// );


// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

// const result = document.querySelector('#result');
// const allChildren = result.childNodes;
// console.log(allChildren);

// const children = result.children;
// console.log(children);

// console.log(result.children);


// parentElement

// const heading = document.querySelector('h2');
// const parent = heading.parentElement;
// parent.style.color = 'red'





// PreviousSibling
// nextSibling
// return whitespace

// const first = document.querySelector('.first');
// const second = (first.nextSibling.nextSibling.style.color = 'red');
// console.log(second);

// const last = document.querySelector('#last');
// const third = last.previousSibling.previousSibling;
// console.log(third);
// console.log(last.nextSibling.nextSibling);





// previousElementSibling
// nextElementSibling

// const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';
// const last = document.querySelector('#last');



// nodeValue
// textContent


// const item = document.getElementById('special');
// const value = item.firstChild.nodeValue;
// const easyValue = item.textContent;

// console.log(easyValue);




// getAttribute();
// setAttribute();

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('class');
// // console.log(classValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href');
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'I also have a class of first';
// console.log(last);

// const links = document.querySelectorAll('.first');
// console.log(links);





// className
// classList


// const first = document.getElementById('first');
// const second = document.getElementById('second');
// const third = document.getElementById('third');

// // const classValue = first.className;
// // console.log(classValue);

// second.className = 'colors text';

// // third.classList.add('colors');
// // third.classList.remove('text');
// third.classList.add('text', 'colors');
// third.classList.remove('text');


// let result = third.classList.contains('colors');
// if (result) {
//     console.log('hello world');
// } else {
//     console.log('does not have the class');
// }






// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// const result = document.querySelector('#result');

// // create empty element

// const bodyDiv = document.createElement('div');

// // create text node

// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue');

// result.appendChild(heading);

// console.log(result.children);




// createTextNode('text content')
// element.appendChild(childElement)


// insertBefore('element', 'location');

 const result = document.querySelector('#result');

// // create empty element

const bodyDiv = document.createElement('div');

// // create text node

const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);


const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');



console.log(result.children);

