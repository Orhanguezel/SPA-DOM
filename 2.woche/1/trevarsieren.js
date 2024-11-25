const target = document.getElementById('red');
console.log(target); // element, <p id="red">...</p>, p#red
console.log(target.nodeName);// element name, p
console.log(target.nodeType);// element type, 1
console.log(target.nodeValue);// element value, null
console.log(target.textContent);// element text, "....."
console.log(target.innerHTML);// element html, "....."
console.log(target.outerHTML);// element html, "<p id="red">.....</p>"
console.log(target.attributes);// element attributes, NamedNodeMap {0: id, id: id, length: 1}
console.log(target.getAttribute('id'));// element attribute, red
console.log(target.parentElement);// 
console.log(target.parentNode);// 
console.log(target.childNodes);//
console.log(target.children);//
console.log(document.querySelector('main').children);// 
document.querySelector('main').lastElementChild.style.color = 'red';

document.querySelector('main').firstElementChild.style.color = 'blue';

document
.querySelector('main')
.querySelectorAll('p').forEach((p) => {
    p.style.color = 'green';
    p.style.border= '1px solid blue';
});

console.log('live', document.querySelector('main').getElementsByTagName('p'));

const newPara2 = document.createElement('p');
newPara2.innerText = 'Live Testen';

document.querySelector('main').append(newPara2);
console.log(document.querySelector('main').querySelectorAll('p'));

console.log(document.querySelector('main').children);

