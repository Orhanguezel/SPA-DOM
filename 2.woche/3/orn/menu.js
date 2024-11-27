document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const nestedLists = menu.querySelectorAll('ul');

    nestedLists.forEach((ul) => {
        ul.style.display = 'none'; 
    });

    menu.addEventListener('click', (event) => {

        if (event.target.tagName === 'LI' && event.target.querySelector('ul')) {
            const childUl = event.target.querySelector('ul');
            if (childUl.style.display === 'none') {
                childUl.style.display = 'block'; 
            } else {
                childUl.style.display = 'none'; 
            }
        }
    });
    menu.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.fontWeight = 'bold';
            event.target.style.backgroundColor = 'yellow';
            event.target.style.color = 'red';

        }
    });



});