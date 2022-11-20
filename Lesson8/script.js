//Array

// let fruits = ['Apple', 'Banana'];

//console.log(fruits.length); //длянна массива

// let fruit1 = fruits[0]; //Apple

//console.log(fruit1);

// let fruit2 =fruits[1];

//console.log(fruit2); //Banana

// let new_fruits = fruits.push('Orange');//Добавление элемента в конец массива

// let del_last = fruits.pop();//Удаление последнего элемената массва

// fruits.unshift('Orange');//Добавление элемента в начало массива

// fruits.shift();//Удаление первого элемената массва

// fruits.push('Mango');

// console.log(fruits);

// console.log(fruits.indexOf('Mango'));//Поиск номера элетента в массиве

//let removeditem = fruits.splice(1,1);//удаление по индексу и колличество/можно добавить элемент

// fruits.push('Papaya', 'Durian')

// console.log(fruits);

// let removeditem = fruits.splice(1,4);

// console.log(fruits);
// console.log(removeditem);

// let arr = [];

// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// let num3 = Number(prompt('Enter the number'));

// arr.push(num1, num2, num3);

// console.log(arr);

// arr[2] = 5; //замена значений в массиве

// let styles = ['Jazz', 'Bluz'];
// styles.push('Rock-n-Roll')
// styles[Math.floor((styles.length - 1)/2)] = 'Classic';
// // console.log(styles.shift());
// console.log(styles.splice(0,1));
// console.log(styles);
// styles.unshift('Rap', 'Reggae');

// console.log(styles);

// Math.floor // Округление в меньшую сторону(2.6=>2)
// Math.ceil // Округление в большую сторону(2.4=>3
// Math.round // Округление до ближайшего целого(2.5=>3)
// let new_arr = [arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2];

// let arr = [1, 4, 2, 5, 3];
// let new_arr = [];

// for(let i = 0; i < 5; i++){
//     // new_arr.push(arr[i]**2);
//     if (i==2) {
//        continue;  //break
//     }
//     console.log(i);
// }
// console.log(arr);
// console.log(new_arr);

// let arr =[];

// for(let num =0; num < 3; num++){
//     arr.push(Number(promt('Array')));
// }

// console.log(arr);

// let arr = [12, 15, 20, 21, 33, 36, 78];
// for(let i = 0; i < 7; i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

//Цикл, который  выведет только "+" числа массива

// let arr = [10,7,-25,0,-12,-111,34,-888,-45,101,-1];
// for(let i = 0; i < 11; i++){
//     if(arr[i]>0){
//         console.log(arr[i]);
//     }
// }

// for(let i = 10; i>0; i-=1.5){
//     console.log(i);
// }

// let arr = [1,2,3,4,5];
// let sum = 0;

// for(let i = 0; i<5; i++){
//     sum = sum +arr[i];
// }
// console.log(sum);

// let arr = [1,5,-5,12,-7,3,4,-2,16,2,110,-88];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         sum = sum +arr[i];
//     }
// }

// for(let i =0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         sum += arr[i];
//     }
// }
// console.log('sum = ' + sum);