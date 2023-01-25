const nums = [-1, 0, 98, 3, 111, 18, 48, -22, -16];

// 1. Сформировать новый массив из положительных четных чисел

const new_nums = nums.filter(num => num > 0 && num % 2 === 0);
// console.log(new_nums);


// function XO(str) {
//     return str.match(/o/ig).length === str.match(/x/ig).length;
//    };
//    console.log(XO('ooXxXoO'));

// function XO(str) {
//     let p = str.match(/p/gi);
//     let w = str.match(/w/gi);
//     return (p && p.length) === (w && w.length);
//   }
//  console.log(XO('wWPP')); 

//  const prod_R = [];
// products.forEach((elem) => {
// if(/r$/.test(elem)){
//     prod_R.push(elem)
// }
// });

// const products [ beer, woor]
// console.log(prod_R);
// products.filter(i => /r$/.exect(i));

// 2. Сформировать новый массив из последних цифр положительных чисел 
// => [8, 3, 1, 8, 8]

const last_num = nums.filter(el => el > 0).map(el => el % 10);
// console.log(last_num);


//Оператор typeof
const firstname = 'Maksym';
const age = 35;
// console.log(typeof firstname,typeof age, typeof true);


const arr = [1, 'hello', true, 6, 8, 'good night', 33];

// 1. Сформируйте новый массив из чисел из массива arr => [1, 6, 8, 33];

const numbers_arr = arr.filter(el => typeof el === 'number');
// console.log(numbers);


// 2. Сформировать новый массив, в котором булевые значения будут заменены на строку 'boolean';
// => [1, 'hello', 'boolean', 6, 8, 'good night', 33]

const boolean_arr = arr.map(el => typeof el === 'boolean' ? 'boolean' : el);
// console.log(boolean_arr);


// 3. Сформировать новый массив, в котором все числовые значения будут увеличены в два раза.
// => [2, 'hello', true, 12, 16, 'good night', 66]

const mult_nums= arr.map(el =>typeof el === 'number' ? el * 2 : el);
//console.log(mult_nums);

                                                                      // Домашнее Задание:

const numbers = [44, 3, -10, 1, 98, 22, 2, -15, -32];

// 1. Дан массив numbers. Сформировать новый массив с положительными числами умноженными на 3

const mult_numbers = numbers.filter(el => el > 0).map(el => el * 3);
// console.log(mult_numbers);

// 2. Дан массив numbers. Сформировать новый массив, где все элементы больше 10 поделить на 2

const division_numbers = numbers.filter(el => el > 10).map(el => el / 2);
// console.log(division_numbers);

// 3. Дан массив numbers. Сформировать новый массив, где все элементы заканчивающиеся на 2 заменены на false

const change_numbers = numbers.map(el =>Math.abs(el % 10) === 2 ? 'false' : el);
// console.log(change_numbers);

// 4. Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность). 
//Напишите filter, который оставляет только активных пользователей (true). 
//Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки. 

let array = [
  ['Максим', 'Грибов', true], 
  ['Антон', 'Куликов', true], 
  ['Светлана', 'Иванова', false], 
  ['Ольга', 'Петрова', true], 
  ['Сидр', 'Сидоров', false]
]

const new_array = []
for (let i = 0; i < array.length; i++){
  for( let k = 0; k < array[i].length; k++){
    if(array[i][k] === true){
      new_array.push(array[i])
    }
  }
};
console.log(new_array);


const new_array2 = new_array.map(el => el.join(' '));
console.log(new_array2);