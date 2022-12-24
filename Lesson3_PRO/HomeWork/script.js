// 1. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. 

const num_sqrt = (num, num1 = 2) => num ** num1;
//console.log(num_sqrt(4));


// 2. Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них.

const arr_num = (a, b, c, d, e) => Math.max(a, b, c, d, e); 

console.log(arr_num(2, 55, 45, 31, 444));


// 3. Реализуйте функцию, которая принимает в качестве аргумента число и возвращает его абсолютное значение. Выведите результат в консоль.
const absNum = n => Math.abs(n); 
 //console.log(absNum(-88));


// 4. Напишите функцию, которая принимает три аргумента: имя, фамилию и возраст. Если возраст больше или равен 18, то функция возвращает строку в формате: 'Здравствуйте, <Имя> <Фамилия>'. Если возраст меньше 18, то функция возвращает строку в формате: 'Привет, <Имя> <Фамилия>'. Выведите результат в консоль.

const fullName = (str1,str2, age) =>{
    if (age > 18) {
        return `Здравствуйте, ${str1} ${str2}`
    } else {
        return `Привет, ${str1} ${str2}`
    }
}
// console.log(fullName('Maksym', 'Samohorodskyi', 35));
// console.log(fullName('Maksym', 'Samohorodskyi', 15));

const fullName_2 = (str1, str2, age) => age > 18 ? `Здравствуйте, ${str1} ${str2}` : `Привет, ${str1} ${str2}`;

// console.log(fullName_2('Maksym','Samohorodskyi', 20));
// console.log(fullName_2('Maksym','Samohorodskyi', 10));

                // let age = prompt("Сколько Вам лет?");

                 // let welcome = (age < 18) ? () => alert('Привет!') : () => alert("Здравствуйте!");

                 // welcome(18);


// 5. * Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.

const strLength = string => string.length;

//console.log(strLength('ASDFGHJKLqwertyuiop123456'));

// 6. * Напишите функцию, которая принимает в качестве аргумента строку и возвращает ее же, но со всеми буквами в верхнем регистре. Выведите результат в консоль.

let str = 'some text, need change to upper case';
const getString = (str) =>{
    let srt_1 = str.toUpperCase()
    return srt_1
};
console.log(getString(str));
          //const getString = str => str.toUpperCase;
         //console.log(getString('hello'));

// 7. * Напишите функцию, которая примает две строки и возвращает наиболее длинную из них. Выведите результат в консоль.

let string_1 = 'RrgtkRGfveetVVVV';
let string_2 = 'GthtfveRTGrrtgrtttgGGG';
const long_str = () => {
    if (string_1.length > string_2.length){
        return string_1;
    }else ( string_2.length > string_1.length)
        return string_2;
};
//console.log(long_str(string_1, string_2));

                 // const getLongestString = (str1, str2) => string_1.length > string_2.length ? str1 : str2;
                 //console.log();


            // console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
