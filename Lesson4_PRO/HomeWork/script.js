// 1. Напишите цикл for, который выводит нечетные числа в консоль от 100 до 60

for(let i = 100; i >=60; i--){
    if( i % 2 == !0){
        //console.log(i);
    }
};

// 2. В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.

const get_nums = (n,m) => {
    for(let i = m; i <= n; i++){
    if(i % 2 === 0){
        //console.log(i);
        }
    }
};
//get_nums(60, 25);

// 3. В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего. Неизвестно, какое из чисел большее.

const get_nums2 = (n, m) =>{ 
    if(n > m){
        for(let i = n; i >= m; i--){
            console.log(i);
        }
    }else {    
        for(let i = m; i >= n; i--){
            console.log(i);
        }
    }
};

const get_nums3 = (n, m) =>{
    for (let i = Math.max(n,m); i >= Math.min(n, m); i--){
        console.log(i);
    }
}

//get_nums3(5, 40);


// 4. * В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел от n до m.

// const get_sum = (n, m) =>{
//     let sum = 0;
//     if (n < m){
//         for(let i = n; i <= m; i++){
//             if(i % 2 === 0){
//                 sum += i
//             }
//         }
//     } else {
//         for(let i = m; i <= n; i++){
//             if(i % 2 === 0){
//                 sum += i
//             }
//         }
//     }
//     return sum;
// };
// console.log(get_sum(1, 7));
// console.log(get_sum(12,5));

// const get_sum = (n, m) => {
//     let sum = 0;
//     for(let i = Math.min(n, m); i <= Math.max(n, m); i++){
//         if(i % 2 === 0){
//         sum += i;
//         }
//     }
//     return sum;
// };
// // console.log(get_sum(4,1));
// // console.log(get_sum(1,6));

// 5. * В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). 

// let n3 = 10;
// let m3 = 20;
// let sum3 = 0;
// let sum_3 = 0

const get_two_sums = (n, m) =>{
    let sum1 = 0;
    let sum2 = 0
    for ( let i = Math.min(n, m); i <= Math.max(n, m); i++){
        if(i % 2 === 0){
            sum1 += i;
        }else {
            sum2 += i;
        }
    }
    // console.log(sum1);
    // console.log(sum2);
};
get_two_sums(1, 5);//2+4=6; 1+3+6=9

// 6. Напишите программу на JavaScript, чтобы суммировать числа 0 до 1000 - числа которые суммируются должны быть одновременно кратны 3 и 5

let sum4  = 0;
for( let i = 0; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        sum4 += i
    }
};
console.log(sum4);
