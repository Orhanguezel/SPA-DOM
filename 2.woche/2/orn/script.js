// soru -1

const changeTittle =document.getElementById('change-title');
changeTittle.addEventListener('click',function(){
    const mainTittle = document.getElementById('main-title');
    mainTittle.innerText = 'Tittle Changed!';
});

// soru -2
const toggleColor = document.getElementById('toggle-color');
const mainTittle = document.getElementById('main-title');
toggleColor.addEventListener('click',function(){
    mainTittle.style.backgroundColor='yellow' ;

});

// soru -3
const nameInput = document.getElementById('name-input');
nameInput.addEventListener('keyup',function(){
    const inputValue = nameInput.value;
    const nameDisplay = document.getElementById('name-display');
    nameDisplay.innerText = inputValue;
});

// soru -4
const allLi = document.querySelectorAll('ul>li');
allLi.forEach(li => {
    li.addEventListener('click',function(){
        console.log(li.innerText);
    });
});

// soru -5

const addItem = document.getElementById('add-item');
addItem.addEventListener('click', function () {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    // Listenin mevcut eleman sayısını kontrol et
    const currentItems = ul.children.length;
    const nextItemNumber = currentItems + 1;

    li.innerText = `Item ${nextItemNumber}`; // Sıraya uygun numara eklenir
    li.style.color= 'red';
    ul.appendChild(li);
});

const removeItem = document.getElementById('remove-item');
removeItem.addEventListener('click', function () {
    const ul = document.querySelector('ul');
    const lastLi = ul.lastElementChild;

    if (lastLi) {
        ul.removeChild(lastLi);
    } else {
        alert('List is already empty!');
    }
});

// soru -6
const externalLink = document.getElementById('external-link');
externalLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('Link tıklanması engellendi!');
});

// soru -7

const button = document.querySelectorAll('button');
button.forEach(btn=>{
    const firstBtn= btn.textContent;
    btn.addEventListener('mouseover',function(){
        btn.textContent = 'Mouse Over';
    });
    btn.addEventListener('mouseout',function(){
        btn.textContent = firstBtn;
    });
}
);

// soru -8
const dynamicList = document.getElementById('dynamic-list');
const dynamicInput = dynamicList.querySelectorAll('li')
dynamicInput.forEach(li=>{
    li.addEventListener('click',function(){
        li.innerText = 'Clicked!';
        console.log(li.innerText);
    });
});


// soru -9
const nameInput2 = document.getElementById('name-input');
const nameDisplay2 = document.getElementById('name-display');
nameInput2.addEventListener('focus',function(){
    nameDisplay2.style.color='blue';
});

// soru -10

nameInput2.addEventListener('blur', function () {
    nameDisplay2.style.color = 'black'; 
});





