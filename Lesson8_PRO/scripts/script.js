// const nums = [1, 2, 3, 6, 4];
// const array = [[1, 2], [3, 4], [5, 6]];
// // Найти самое большое число в массиве

// console.log(nums);
// console.log(...nums);
// console.log(...array);

// console.log(Math.max(...nums));
// // console.log(Math.max(1, 2, 3, 6, 4));
                
                
                
                // Методы массива

// forEach() - ничего не возвращает,  выполняет указанную функцию один раз для каждого элемента массива

// map() - возвращает новый массив, выполняет указанную функцию один раз для каждого элемента массива. не меняет длинну

// filter() - возвращает новый массив, может менять длинну массива, проверяет елемент на соответствие условию и добавляет в новый массив

const nums = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];

// 1. Сформируйте массив из всех чисел, умноженных на 3

const mult_nums = [];
nums.forEach(el => mult_nums.push(el * 3));


const nums_map = nums.map(el => el * 3);
// console.log(nums_map);

// 2. Сформируйте массив из последних цифр каждого элемента массива
const last_nums = [];
nums.forEach(elem => last_nums.push(Math.abs(elem % 10)));
// console.log(last_nums);

const last_nums2 = nums.map(num =>(Math.abs(num % 10)));
// console.log(last_nums2);

const num = [40, -5, 7, 87, 153, -101, 77];

// 3. Сформировать новый массив, в который попадут все отрицательные числа из массива num => [-5, -101]

//  НЕ ПРВИЛЬНО 
const num_map = num.map(el => {
    if(el < 0){
        return el
    }
});
// console.log(num_map);

//ПРАВИЛЬНО
const num_filter = num.filter(el => el < 0);
// console.log(num_filter);

// 4. Сформируйте новый массив из последних цифр элементов массива => [0, 5, 7, 7, 3, 1, 7]

const last_num = num.map(el =>Math.abs(el % 10));
// console.log(last_num);


// 5. Сформировать массив, в котором числа больше 70 будут заменены на строку '>70', а числа меньше 70 будут заменены на строку '<70'

// const num_5 = [];
// for(let i = 0; i < num.length; i++){
//   if(num[i] > 70){
//     num_5.push('>70')
//   } else {
//     num_5.push('<70')
//   }
// };

// for(let i = 0; i < num.length; i++) {
//     num[i] > 70 ? num_5.push('>70') : num_5.push('<70')
//   };

const num_2 = num.map(el => el > 70 ? '>70' : '<70');
// console.log(num_2);

// 6. Дан массив nums_2. Извлечь квадратный корень из чисел массива nums_2 и сформровать из них новый массив

const nums_2 = [4, 9, 16, 25]; // [2, 3, 4, 5]

const new_nums_2 = [];
for(let i = 0; i < nums_2.length; i++){
  new_nums_2.push(Math.sqrt(nums_2[i]))
};

const nums_sqrt = nums_2.map(el => Math.sqrt(el));
// console.log(nums_sqrt);

// 7. Сформировать массив положительных четных чисел
const positive_nums_even = nums.filter(el => el > 0 && el % 2 === 0);
// console.log(positive_nums_even);


const  greetings = ['hello', 'hi', 'good morning', 'good night', 'good evening'];

// 1. Сформировать новый массив, в который попадут строки длинее 6 символов

const new_greetings = greetings.filter(el => el.length > 6)
console.log(new_greetings);
