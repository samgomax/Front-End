function getMassage() {
    console.log('function 1');
};
//getMassage();

function getSum() {
    return 2 + 8
}
const a = getSum();
// console.log(a);


const getMassage_2 = () => console.log('function 2');
//getMassage_2();

const getSum_2 = () => 2 + 8;

const b = getSum_2();
// console.log(b);

// 1. Написать функцию, которая возвращает результат умножения 10 на 12. Вывести результат в консоль

const getMult = () => 10 * 12
//console.log(getMult());


const getMult2 = (num) => num * 10;
// console.log(getMult2(3));
// console.log(getMult2(5));

// 3. Написать функцию, которая принимает два аргумента и возвращает результат сложения двух полученных аргументов

const get_sum = (a, b) => a + b;
console.log(get_sum(20, 10));
console.log(get_sum(25, 25));