const header = document.querySelector('h1');
header.style.color = 'green';

const paragraphId = document.getElementById('block');


const paragraphId2 = document.querySelector('#block');

const paragraphTag = document.getElementsByTagName('p');

const paragraphTag2 = document.querySelectorAll('p');

const paragraphClass = document.getElementsByClassName('block');

paragraphId.style.color = 'red';
paragraphId2.style.color = 'blue';

const newPara = document.createElement('p');
newPara.innerText = 'Ich bin ein neuer Paragraph';
document.body.appendChild(newPara);

console.log(newPara.innerText);
console.log(newPara.innerHTML);
console.log(newPara.textContent);

newPara.innerText = "i ama innertext";
newPara.innerHTML = "i am a innerhtml";
newPara.textContent = "i am a textcontent";

newPara.innerText ="<span>Ich bin ein neuer Paragraph</span>";
newPara.innerHTML = "<span>Ich bin ein neuer Paragraph</span>";
newPara.textContent = "<span>Ich bin ein neuer Paragraph</span>";


