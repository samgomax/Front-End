// let user = {
//     name: "John", 
//     age: 20,
//     "likes car": true,
//     street: 'Moskovyan',
//     home: 26
//     };

    // delete user['likes car']
    // let key = 'street';

    // user[key] = prompt('street');
    // console.log(user);

    // for(let key in user){
    //     console.log(key);
    //     console.log(user[key]);
    // }

    // let codes = {
    //     "+49": 'Германия',
    //     "+41": "Швейцария",
    //     "+44": "Великоботания",
    //     "+1": "США"
    // };

    // for(let code in codes){
    //     console.log(code);
    // }

    // let user = {};
    // user.name = "John";
    // user.surname = "Smith";
    // user.name = "Pete";
    // delete user.name;
    // console.log(user);

    //Есть обеъкт, в котором храняться зарплаты команды.
    //Напишиье код для суммирования всех зарплат и сохранить  в переменной sum

    // let salaries = {
    //     John: 100,
    //     Ann: 160,
    //     Pete: 130
    // }

    // let sum = 0;
    // for(let key in salaries){
    //     sum = sum + salaries[key]; //sum += salaries[key]; (-=,*=,/=)
    // }
    // console.log(sum);

    //alert("Hello world")
                                ////ФУНКЦИИ////

    // function showMessage(){       // showMassage - это имя функции
    //     alert("Hello world!")   //тело функции
    // }
    // showMessage();

    // let massage = 'Hello world';
    // function showMassage(){
    //     console.log(massage);
    // }
    // showMassage();
    // console.log(massage);
     // showMassage('Anna', 'Hello');

    // function sum(a, b){
    //     return a+b;
    // }
   
    // let num1 = Number(prompt('Enter the number'));
    // let num2 = Number(prompt('Enter the number'));

    // console.log(sum(num1, num2));

    // function checkAge(age){
    //     if (age > 18){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // let user_age = prompt('How old are you?');

    // if(checkAge(user_age)){
    //     alert('Доступ получен')
    // }
    // else{
    //     alert('Доступ закрыт')
    // }

    // function test_num(a){
    //     if (a%2 == 0){
    //         alert('Yes');
    //     }
    //     else {
    //         alert('No')
    //     }
    // }
    // let num = prompt('Enter number');
    // test_num(num)

    //функция min(a,b), которая возвращает меньшее число из а и b.
    // min(2, 5) ==2;  min(3, -1) == -1; min(1, 1) == 1.

    // function min(a, b){
    //     if(a < b){
    //         alert(a);
    //     }
    //     else {
    //         alert(b);                //решение №1
    //     }
    // }
    // let num1 = prompt('Input number');
    // let num2 = prompt('Input number')
    // min(num1, num2);

    // let num1 = 9
    // let num2 = 0
    // function min(a, b){
    //     if(a < b){
    //         return a;              //рещение №2
    //     }else{
    //         return b;
    //     }
    // }
    // console.log(min(num1, num2));
    // функция pow(x,n) которая возвращает х в стенпени n. То есть уменожает x на себя n раз и возвращает результат:

    // let num1 = 4 //promp("")
    // let num2 = 4.5 //promt("")

    // console.log('are you working');
    // function pow(x, n){
    //     let new_num = 1;
    //     if (n > 0){
    //         if(n%1 ==0){
    //             for(let i = 1; i <= n; i++){
    //                 new_num *= x
    //             }
    //             return new_num;               //Решение №1
    //         }
    //     }
    //     return "ERROR"
    // }
    // console.log(pow(num1, num2));

    // function pow(x, n){
    //     let result =x;

    //     for( let i = 1; i < n; i++){
    //         result *= x;
    //     }
    //     return result;
    // }

    // let x = prompt('X?');
    // let n = prompt('N?');

    // if (n < 1){
    //     alert('ERROR');
    // }
    // else{
    //     alert(pow(x, n));
    // }