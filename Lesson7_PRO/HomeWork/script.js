const nums = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];

// 1. Сформируйте массив из положительных чисел, заканчивающихся на 3

const positive_nums = [];
nums.forEach(el => {
    if(el > 0 && el % 10 === 3){
        positive_nums.push(el)
    }
});
// console.log(positive_nums);

const arr_positive_nums = nums.filter(num => {
    if(num > 0 && num % 10 ===3){
        return typeof num === 'number'
    }
});
// console.log(arr_positive_nums);

// 2. Сформируйте массив положительных четных чисел

const positive_nums2 =[];
nums.forEach(el => {
    if(el > 0){
        positive_nums2.push(el)
    }
});
// console.log(positive_nums2);

const arr_positive_nums2 =nums.filter(num => {
    if(num > 0){
        return typeof num === 'number'
    }
});
// console.log(arr_positive_nums2);


// 3. Сформируйте массив из всех чисел, умноженных на 3

const mult_nums = [];
nums.forEach(el => mult_nums.push(el * 3));
// console.log(mult_nums);

// 4. Сформируйте массив из последних цифр каждого элемента массива
const last_nums = [];
nums.forEach(elem => last_nums.push(Math.abs(elem % 10)));
console.log(last_nums); 
