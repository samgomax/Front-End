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
// console.log(new_array);


const new_array2 = new_array.map(el => el.join(' '));
// console.log(new_array2);

const activ_users = array.filter(el => el[2]).map(el => `${el[0]} ${el[1]}`);
console.log(activ_users);