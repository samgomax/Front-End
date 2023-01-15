// Дан массив чисел
const numbers = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];
// 1. Сформируйте массив из отрицательных чисел

const arr = [];
for(let i = 0; i < numbers.length; i++){
if(numbers[i] < 0) {
    arr.push(numbers[i]);
    }
};
// console.log(arr); // [-200, -11 ,-43]

// 2. Сформируйте массив из положительных чисел, заканчивающихся на 3

const arr1 = [];
for(let i = 0; i < numbers.length; i++){
if(numbers[i] > 0 && numbers[i] % 10 === 3){
    arr1.push(numbers[i]);
}
};
// console.log(arr1); // 73, 23, 3

// 3. Сформируйте массив положительных четных чисел

const arr2 = [];
for(let  i = 0; i < numbers.length; i++){
if( numbers[i] > 0 && numbers[i] %2 === 0){
    arr2.push(numbers[i]);
}
};
//console.log(arr2); // 544, 74, 2 

// 4. Сформируйте массив из всех чисел, умноженных на 3

const multipleArr = (arr) => {
const arr3 = [];
for(let  i = 0; i < arr.length; i++){
    arr3.push(arr[i] * 3);
}
return arr3;
};
//console.log(multipleArr(numbers));

//Вариант 2

const multipleArr_2 = numbers.map(i => i * 3);
//console.log(multipleArr_2);

//Вариант 3

const nums_mult = [];
for(let  i = 0; i < arr.length; i++){
    nums_mult.push(numbers[i] * 3)
};
// console.log(nums_mult);

// 5. Вывести в консоль последний элемент массива

//  console.log(numbers[numbers.length - 1]);

// 6. Сформируйте массив из последних цифр каждого элемента массива

const arr4 =[];
for(let i = 0; i < numbers.length; i++){
arr4.push(Math.abs(numbers[i] % 10));
};
// console.log(arr4);


                                // Дан массив строк
const products = ['bread', 'milk', 'butter', 'water', 'juice', 'apple', 'tomato', 'Beer'];

// 7. Сформировать массив из продуктов, длина которых равна 5

const prodLength = [];
for(let  i =0; i < products.length; i++){
if(products[i].length === 5){
    prodLength.push(products[i]);
}
};
// console.log(prodLength); // ['bread', 'water', 'juice', 'apple']

// 8. Сформировать массив из строк, которые начинаются на букву 'b'. Регистр может быть любым. Строка должна быть приведена к верхнему регистру

const prodUpperCase = [];
for(let i = 0; i < products.length; i++){
if(products[i][0].toLowerCase() === 'b'){
    prodUpperCase.push(products[i].toUpperCase())
    }
};
// console.log(prodUpperCase);




// 9. Сформировать массив из строк, которые заканчиваются на букву 'r'

const prod_R = [];
products.forEach((elem) => {
if(/r$/.test(elem)){
    prod_R.push(elem)
}
});
// console.log(prod_R);
// products.filter(i => /r$/.exect(i));

const prod_r = [];
for(let i =0; i < products.length; i++){
    if(products[i].slice(-1) == 'r'){
        prod_r.push(products[i])
    }
};
// console.log(prod_r);

const r_prod = [];
for(let i =0; i < products.length; i++){
    if(products[i][products[i].length - 1] === 'r'){
        r_prod.push(products[i])
    }
// };console.log(r_prod);


                    // Дан массив с разными типами данных

const array = ['hello', 9, true, false, 5, 67, undefined, null, 0];
// 10. Сформировать массив из чисел

const sortArray = array.filter((num) => {return typeof num === 'number'});
// console.log(sortArray);

//Вариант 2

const nums_fromArr = [];
for(let i =0; i < products.length; i++){
    if(typeof array[i] === 'number'){
        nums_fromArr.push(array[i])
    }
};
// console.log(nums_fromArr);

//Вариаинт 2

const new_arr = [];
for(let i =0; i < products.length; i++){
    if(typeof array[1] === 'number')
    new_arr.push(array[i])
    }
};console.log(new_arr);

// 11. Сформировать новый массив, в котором все булевые значения будут заменены на строку 'boolean', а числовые значения - на строку 'number'

// const arr_1 = []; 
// const sortItem = array.filter((numbers, boolean) => {
// if( typeof array[i] === 'number'){
//     return arr_1.push('Number');
// }else{typeof array[i] === 'boolean'
//     return arr_1.push('Boolean');
// }
// });
// console.log(arr_1);

//Вариаинт 2

const new_arr2 = [];
for(let i =0; i < products.length; i++){
    if(typeof array[i] === 'boolean'){
        new_arr2.push('Bollean')
    }else if (typeof array[i] === 'number'){
        new_arr2.push('Number')
    }else {
        new_arr2.push(array[i])
    }
};console.log(new_arr2);