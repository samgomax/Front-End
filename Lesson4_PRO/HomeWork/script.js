// 1. Напишите цикл for, который выводит нечетные числа в консоль от 100 до 60

// for(let i = 100; i >=60; i--){
//     if( i % 2 == !0){
//         //console.log(i);
//     }
// };

// 2. В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.

// //let n = 100;
// //let m = 30;
// for(let i = n; i >= m; i--){
//     if(i % 2 === 0){
//         // console.log(i);
//     }
// };

// 3. В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего. Неизвестно, какое из чисел большее.

// let n1 = 65;
// let m1 = 45;
// for(let i = n; i >= m; i--){
//     if(n > m){
//         console.log(i);
//     }else (n < m) 
//         console.log(i);
// };



// 4. * В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел от n до m.

// let n2 = 10;
// let m2 = 15;
// let sum = 0;
// for(let i = n2; i <= m2; i++){
//     if(i % 2 === 0){
//         sum += i;
//     }
// };
// console.log(sum);

// 5. * В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). 

let n3 = 10;
let m3 = 20;
let sum3 = 0;
let sum_3 = 0
for ( let i = n3; i <= m3; i++){
    if(i % 2 === 0){
        sum3 += i;
    }
    if(i % 2 ==! 0){
        sum_3 += i;
    }
};
console.log(sum3);
console.log(sum_3);

// 6. Напишите программу на JavaScript, чтобы суммировать числа 0 до 1000 - числа которые суммируются должны быть одновременно кратны 3 и 5

// let sum4  = 0;
// for( let i = 0; i <= 1000; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         sum4 += i
//     }
// };
// console.log(sum4);
