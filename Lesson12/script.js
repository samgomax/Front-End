
//элемент.addEventListener(событие, функция);

// let button = document.querySelector('.click');
// button.style.height = '100px'
// button.style.width = '100px'
// button.style.backgroundColor = 'violet'

// button.addEventListener('click', function(){alert()});

// button.addEventListener('click', myFunc);
// button.addEventListener('click', myFunc2);
// //button.addEventListener('mouseover', myFunc);


// function myFunc(){
//     alert('JavaScript');
// }

// function myFunc2(){
//     alert('Happy New Year');
// }

//button.removeEventListener('mouseover', myFunc);//удаление,тот ф-ции,котрую создали

//Задание: Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello JavaScript”.
    // let button = document.querySelector('.click');
    // button.addEventListener('click', myFunc);
    // function myFunc(){
    //     console.log('Hello JavaScript!');
    // }

//Задание:

// let button = document.querySelector('.click');
// function onclick(){
//     document.querySelector('.num').innerText = Number(document.querySelector('.num').innerText) + 100;
// }
// button.addEventListener('click', onclick);

// let button = document.querySelector('.click');
// let num = Number(document.querySelector('.num').innerText);
// function onclick(){
//     document.querySelector('.num').innerText = num++;
// }
//++num и num++!

// button.addEventListener('click', onclick);

// Задание: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку:

let button1 = document.createElement('button');
button1.innerText = 'Plus';
button1.style.backgroundColor = 'blue'
button1.style.color = 'white';
button1.style.height = '50px';
button1.style.width = '50px';
button1.classList.add('plus');

let button2 = document.createElement('button');
button2.innerText = 'Minus';
button2.style.backgroundColor = 'orange'
button2.style.color = 'white';
button2.style.height = '50px';
button2.style.width = '50px';
button2.classList.add('plus');
button2.classList.add('minus');

document.body.append(button1, button2);
let num = 10

function plus(){
    console.log(num++);
}
function minus(){
    console.log(num--);
}

button1.addEventListener('click', plus);
button2.addEventListener('click', minus);

// let button = document.querySelector('.click');
// button.style.backgroundColor = 'green';
// button.style.color = 'white';
// button.style.fontSize = '20px'
// button.style.width = '100px';
// button.style.height = '60px';
// button.style.boxShadow = '10px -5px 3px red';

//button.style.height = ''; -> удаление


// // Задание: Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет (все шаги сделать с помощью JS).


// let div = document.createElement('div');
// document.body.append(div);
// div.style.margin = '20px 0px';
// div.style.border = '2px solid black';
// div.style.backgroundColor = 'blue';
// div.style.height = '100px';
// div.style.width = '100px';
// div.style.boxShadow = '10px -5px 5px';
// function changeColor(){
//     let newcolor = prompt('Enter the color for block');
//     div.style.backgroundColor= newcolor; 
// }
// div.addEventListener('mouseover', changeColor);


