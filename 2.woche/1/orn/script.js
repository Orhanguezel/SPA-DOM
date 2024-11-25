// görev-1: header.main-header elementinin arka plan rengini lightblue yapınız.
const header = document.querySelector('header.main-header');
header.style.backgroundColor = 'lightblue';

// görev-2
/*
const childH1 =header.children[0];
childH1.style.fontSize = '3rem';
childH1.style.color = 'darkgreen';
*/

const childH1 = header.querySelector('h1');
childH1.style.fontSize = '3rem';
childH1.style.color = 'darkgreen';

/*
const childH1 = header.firstElementChild;
childH1.style.fontSize = '3rem';
childH1.style.color = 'darkgreen';

const childH1 = header.getElementsByTagName('h1')[0];
childH1.style.fontSize = '3rem';
childH1.style.color = 'darkgreen';

for (const child of header.children) {
  if (child.tagName === 'H1') {
    child.style.fontSize = '3rem';
    child.style.color = 'darkgreen';
  }
}
*/
// görev-3
const nav = document.querySelector('ul.nav-list');
const firstChild = nav.firstElementChild;
const lastChild = nav.lastElementChild;
firstChild.style.backgroundColor = 'red';
firstChild.style.color = 'white';
lastChild.style.backgroundColor = 'blue';
lastChild.style.color = 'white';

// görev-4
const main = document.querySelector('main');
const children = main.children;

for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
}

/*
const main = document.querySelector('main');

for (const child of main.children) {
    console.log(child);
}

const main = document.querySelector('main');

Array.from(main.children).forEach((child) => {
    console.log(child);
});

const main = document.querySelector('main');

[...main.children].forEach((child) => {
    console.log(child);
});

const main = document.querySelector('main');
let i = 0;

while (i < main.children.length) {
    console.log(main.children[i]);
    i++;
}
const main = document.querySelector('main');

main.childNodes.forEach((node) => {
    if (node.nodeType === 1) { // Sadece element düğümleri
        console.log(node);
    }
});

const main = document.querySelector('main');
[...main.children].forEach(console.log);
*/

// görev-5
const infoPackage = document.querySelectorAll('.info-package');

infoPackage.forEach((element) => {
    element.style.border = '1px solid red';
});
console.log(infoPackage.previousElementSibling);

// görev-6

infoPackage.forEach((element) => {
    const description = element.querySelector('.description');

    // Eğer `.description` öğesi mevcutsa ve metin kontrolü sağlanıyorsa
    if (description.textContent.includes("Explore the unknown")) {
      description.style.color = 'blue'; // Sadece `.description` öğesine renk uygula
    }
  });

// görev-7

const destination = document.querySelector('.destination-list');
const listDestination = destination.querySelectorAll('li');
listDestination.forEach((element) => {
    element.classList.add('destination-item');
});

// görev-8


// Yeni bir `<li>` öğesi oluşturuyoruz
const newListItem = document.createElement('li');

// Yeni `<li>` öğesinin içeriğini belirliyoruz
newListItem.textContent = 'Amazon Rainforest';

// Yeni `<li>` öğesine stil ekliyoruz
newListItem.style.color = 'green';

// Yeni `<li>` öğesini `destination-list` öğesine ekliyoruz
destination.appendChild(newListItem);

// görev-9
const destinationAny = document.querySelector('.destination-list');
const parentDestination = destinationAny.parentElement;
parentDestination.style.backgroundColor = 'lightyellow';

// görev-10
/*
const pFooter = document.querySelector('footer');
const paragraph = pFooter.querySelector('p');
paragraph.textContent = 'Extreme Travel - Your Gateway to Adventure';
*/

document.querySelector('footer p').textContent = 'Extreme Travel - Your Gateway to Adventure';



