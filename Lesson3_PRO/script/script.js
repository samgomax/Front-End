// 1. Создайте функцию, которая принимает два аргумента - имя и возраст. Функция возвращает строку с приветствием в формате: 'Hello <ИМЯ>! You are <ВОЗРАСТ> years old.'. Выведите результат в консоль

const show_greatting = (name, age) => `Hello ${name}! Your age ${age}.`

// console.log(show_greatting('Maksym', 35));
// console.log(show_greatting('Olga', 28));


// const getInfo = (name, age) => 'Hello ' + name + '!' + "You are " + age + " years old.";
// console.log(getInfo("Nadya", 35)); ------//конкатенация

//let massage_2 = `Hello ${name1}. Your age ${age1}.`; ----//интепроляция
//  \n - перенос на другую сторку


// console.log(1 + 1); //2
// console.log(typeof 1);
// console.log('1'+'1'); //11
// console.log('1'+ 1); //11
// console.log('1' - 1); //0
// console.log('1h' - 1); // NaN - not a number


// 2. Создать функцию, которая принимает два числа и одну строку и возвращает строку в формате: 'Слово: <STRING>, сумма чисел: <NUM1 + NUM2>'

const showInfo = (str, num1, num2) => `Word:${str}, sum of number: ${num1+num2}`; // сумма: ${num1} + ${num2} = ${num1 + num2};

//console.log(showInfo('Table', 10, 15));
//console.log(showInfo('BOx', 5, 25));


const getMassage_2 = (name, age) => {
    if(age >= 18) {
        return `Hello, ${name}`
    } else {
        return `Hi, ${name}`
    }
};
 // Тернарный оператор:
const getMassage_3 = (name,age) => age >= 18 ? `Hello, ${name}` : `Hi, ${name}`

//Условие(В1) ? Выражение 2 : Выражение 3

//B1 - условие
//В2 - что произойдет, если условие верно
//В3 - что произойдет, если условие неверно

// console.log(getMassage_3('Inna', 25));
// console.log(getMassage_3('Ivan', 15));

// 4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение.
// Если числа равны, вернуть строку 'The number are equal'. Выведите результат в консоль.

const showNum = (a, b) => {
    if(a > b) {
        return a;
    }else(b > a)
        return b;
};
// console.log(showNum(15, 12));
// console.log(showNum(3, 10));

const showNum2 = (a, b) => a > b ? a : b > a ? b : 'The number are equal'
// console.log(showNum2(6.4, 6));
// console.log(showNum2(50, 30));
// console.log(showNum2(11, 11));

//==================================================

//Обьект Math

let a = Math.max(1,2,4,56,0,504); // 504
let b = Math.min(1,2,4,56,0,504); // 0

let c = Math.abs(4); //4
let d = Math.abs(-4); //4

let e = Math.ceil(6.23); // 7
let f = Math.floor(6.23); // 6
let g = Math.round(6.23); // 6

let h = Math.pow(2, 3); //2**3 = 8
let i = Math.sqrt(16); //4

let j = Math.random(); //

//console.log(j);
//console.log(i);
// console.log(g);

let random_num = Math.round(Math.random() * 100);

let random_1 = Math.random(); //
let random_2 = random_1 * 100;
let random_3 = Math.round(random_2);

// console.log(random_1);
// console.log(random_2);
// console.log(random_3);
//console.log(random_num);


// ДЗ:
// 1. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. 
// 2. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них.
// 3. Реализуйте функцию, которая принимает в качестве аргумента число и возвращает его абсолютное значение. Выведите результат в консоль.
// 4. Напишите функцию, которая принимает три аргумента: имя, фамилию и возраст. Если возраст больше или равен 18, то функция возвращает строку в формате: 'Здравствуйте, <Имя> <Фамилия>'. Если возраст меньше 18, то функция возвращает строку в формате: 'Привет, <Имя> <Фамилия>'. Выведите результат в консоль.
// 5. * Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.
// 6. * Напишите функцию, которая принимает в качестве аргумента строку и возвращает ее же, но со всеми буквами в верхнем регистре. Выведите результат в консоль.
// 7. * Напишите функцию, которая примает две строки и возвращает наиболее длинную из них. Выведите результат в консоль.
