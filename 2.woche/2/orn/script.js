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
