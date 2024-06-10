console.log(document.getElementById('first-list'));
console.log(document.getElementsByClassName('heading'));

const heading = document.getElementsByClassName('heading')

for(let i=0; i<heading.length;i++){
  console.log(heading[i]);
}

console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

const headingCSS = document.querySelectorAll('.heading')

for(let i = 0; i < headingCSS.length ;i++){
  console.log(headingCSS[i]);
}

const p = document.createElement('p');
p.textContent ='こんにちは';

document.querySelector('div').appendChild(p);