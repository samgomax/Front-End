//console.log("%cZERO!", "color: green; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");



//Task_1:

let d = 55;
console.log(d);
console.log(d**2);
console.log(d**3);

//Task_2:

let num = prompt('Positiv number');
if(num > 0){
num = num * 2;
}
console.log(num);

//Task_3:

let num1 = prompt("Enter your number");
if(num1 > 0){
    console.log("%cPositive!", "color: green; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
}else if(num1 == 0){
    console.log("%cZERO!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
}else{
    console.log("%cNegative!", "color: blue; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");
}

//Task_4:

let num2 = prompt('Numbers');
let num2_1 = prompt('Numbers')
num2 = Number(num2);
num2_1 = Number(num2_1);
if(num2 > num2_1){
    console.log(num2 + num2_1);
}else if(num2 < num2_1){
    console.log(num2 * num2_1);
}

//Task_5:

let a = prompt('Number');
if(a < 0){
    console.log(a**2);
    }
    else if(a > 0){
        console.log("%cERROR!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px");
}

//Task_6:

let students = prompt('Количетсво студентов');
students = Number(students);
let chair = prompt('Количетсво стульев');
chair = Number(chair);
if(students > chair){
    console.log('ВЫВОД: СТУЛЬЕВ НЕ ХВАТАЕТ');
}else if(students < chair){
    console.log('ВЫВОД: СУТЛЬЕВ ХВАТАЕТ');
}

//Task_7:

let a = prompt('Enter - "Start"');
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);
let b = prompt('Enter - "Finish"')
console.log();

Task_8:

let arr_num = [];
for(i = 0; i < 100; i++){
    arr_num.push(i);
    if(arr_num[i]%5==0){
        console.log(arr_num[i]);
    }
}

//Task_9:

let text = prompt('Number');
let arr = [];

for(i = 0; i < 7; i++){
        arr.push(arr.length+1);
} console.log(arr);

//Task_10:

let arr1 = [2,5,15,78,9,33,14,16,22,3,8,9,18,0,55];
for(i=0; i < arr1.length; i++){
    if(arr1[i]>=15){
        console.log(arr1[i]);
    }
}

//Task_11:

let arr2 = [1,5,22,2,42,77,13,21,22,112,155,99,20,31,47];
for(i=0; i < arr2.length; i++){
    if(arr2[i]%2 !== 0){
        console.log(arr2[i]);
    }
}

//Task_12:

let arr3 = [7,22,33,2,5,21,'$$$',12,47,68,91,89,'JS/HTML/CSS',58,0,888];
for(a = 1; a < arr3.length; a++){
    if(a % 3 == 0){
        console.log(arr3[a]);
    }
}

//Task_13:

let arr4 = [1,2,3,4,5];
let sum = 0;
for(i = 0; i < arr4.length; i++){
    if(arr4[i] = arr4[i]-1){
        sum = sum + arr4[i];
    }
}console.log('sum = ' + sum);

//ask_14:

let arr5 = [77, 52, -55, 2, 3, 111, 65, -7, 222, 15];
let sum_1 = 0;
for(i=0; i<arr5.length; i++){
    if(arr5[i]%2 ==!0){
       sum_1 = sum_1 + arr5[i];
    }
} console.log('sum = '+ sum_1);

//Task_15:

let arr6  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let sum_2 = 0;
let sum_3 = 0;
for(n = 0; n < arr6.length; n++){
    if(arr6[n]%2 ==!0){
        sum_2 = sum_2 +arr6[n]
    
    }if(arr6[n]%2 ==0){
        sum_3 = sum_3 + arr6[n]
    }
}
console.log(sum_2 - sum_3);