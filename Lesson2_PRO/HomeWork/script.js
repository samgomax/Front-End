//Создать кнопку, при клике на которую в консоль выводится сообщение 'Hello, world!'

const button = document.querySelector('.btn');
button.addEventListener('click', () => console.log('Hello, World!'));

//Создать кнопку и пустой div. При клике на кнопку в div создается два параграфа (текст произвольный). Один параграф синего цвета и размером шрифта 20px. Второй - красного цвета, шрифт 24px

const create  = document.querySelector('.create');
const div = document.querySelector('.div');


create.addEventListener('click',() =>{
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    div.append(p1,p2);

    p1.innerText= 'Firs paragraph Blue color';
    p1.style.color = 'blue';
    p1.style.fontSize = '20px';

    p2.innerText= 'Second paragraph Red color';
    p2.style.color = 'red';
    p2.style.fontSize = '24px';
});


//Написать функцию, которая принимает два числовых агрумента, а возвращает произведение (умножение) этих чисел. Вывести результат в консоль

const mult = (a, b) => a * b;
console.log(mult(-8, 50));
console.log(mult(250,180));

//Написать функцию, которая принимает числовой аргумент, а возвращает это число в 3 степени. Выведите результат в консоль

const cube = num => Math.pow(num, 3);
console.log(cube(20));

const cube2 = num => num ** 3;
console.log(cube2(9));

function cube3(num1, num2 = 3){
    return num1 ** num2
};
console.log(cube3(3));