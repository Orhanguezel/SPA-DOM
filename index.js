/*
alert('Black Friday Sale! 50% off on all products');
document.addEventListener('DOMContentLoaded', () =>{
    console.log('DOM fully loaded and parsed');
    alert('Black Friday Sale! 50% off on all products');

});

window.addEventListener('beforeunload', () => {
    alert('Are you sure you want to leave?');
});

*/

// Maus events

const main = document.querySelector('main');
main.addEventListener('click', (e) => {
    console.log('main clicked', e);
});

main.addEventListener('mouseenter', (e) => {
    console.log('main mouse enter', e);
});

main.addEventListener('mousemove', (e) => {
    console.log('main mouse move', e);
    main.innerText =`x: ${e.pageX}, y: ${e.pageY}`;
});

// Keyboard events

const input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    console.log('input keyup', e);
    console.log(e.target.value);
});

// Form events
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop form submit doing the default behaviour
    // which is the browser sending the form to the server
   
    const blue = Math.floor(Math.random() * 255); 
    const green = Math.floor(Math.random() * 255); 
    const red = Math.floor(Math.random() * 255); 
    main.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})';
    console.log('form submit', e);
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.elements);
    console.log(e.target.elements[0].value);
    console.log(e.target.elements[1].value);
    console.log(e.target.elements.username.value);
    console.log(e.target.elements.password.value);
});


const main1 = document.querySelector('main');
main1.addEventListener('click', (e) => {

    const blue = Math.floor(Math.random() * 255); 
    const green = Math.floor(Math.random() * 255); 
    const red = Math.floor(Math.random() * 255);

    const main1 = document.querySelector('main'); 

    main1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
});
