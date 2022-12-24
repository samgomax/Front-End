const button = document.querySelector('button');
const p = document.querySelector('p');
button.style.boxShadow = '8px -3px 3px 2px black';

button.addEventListener('click', () => {
    p.style.backgroundColor = 'limegreen'; 
    
});

// Создать кнопку и пустой div. При клике на кнопку в div создается параграф с содержанием 'good morning!'. Текст должен быть красного цвета, а размер шрифта - 20px


const btn = document.querySelector('.btn');
const div = document.querySelector('.div');

btn.addEventListener('click', () =>{
    const newPar = document.createElement('p');
     div.prepend(newPar);

    newPar.innerText = 'Good morning';
    newPar.style.color = 'red';
    newPar.style.fontSize = '20px';
});

// Создать два параграфа. При клике на первый у второй меняется размер шрифта на 24px. А при клике на второй - у первого меняется цвет текста на зеленый и цвет заднего фона на розовый.

const par1 = document.querySelector('.par1');
const par2 = document.querySelector('.par2');

par1.addEventListener('click', () =>{
    par2.style.fontSize = '24px';
});

par2.addEventListener('click', () =>{
    par1.style.color = 'green';
    par1.style.backgroundColor = 'pink';
});