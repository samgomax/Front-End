// 1. Функция принимает две строки и возвращает длину самой короткой строки. Выведите длину самой короткой строки в консоль

const getShortLength = (str1, str2) => {
    if (str1 < str2){
        return str1.length
    }else {
        return str2.length
    }
};
//console.log(getShortLength('hello', 'hello121345'));

//2.
const getShortLength2 = (str1, str2) => str1.length > str2.length ? str2.length : str1.length;
//3.
const getLongestString3 = (str1, str2) => Math.min(str1.length, str2.length);

// 2. Функция принимает 2 строки и возвращает самую длинную из них в верхнем регистре
//(console.log(getLongestString('hello', 'hello12345', 'hello123')); // HELLO12345)

const geLongestString = (str1, str2) => str1.length > str2.length ? str1.toUpperCase() : str2.toUpperCase();
//console.log(geLongestString('hello', 'hello12345'));//HELLO12345


// 2. Функция принимает 3 строки и возвращает самую длинную из них в верхнем регистре
//(console.log(getLongestString('hello', 'hello12345', 'hello123')); // HELLO12345)

const getLongestString2 = (str1, str2, str3) => {
    if (str1.length > str2.length && srt1.length > str3.length) {
      return str1.toUpperCase();
    } else if (str2.length > str1.length && str2.length > str3.length) {
        return str2.toUpperCase();
    } else {
        return str3.toUpperCase();
    }
};
//console.log(getLongestString2('hello', 'hello12345', 'hello123'));//самую длинную

const getLongestString4 = (string1, string2, string3) => { 
    const string = string1.length > string2.length && string1.length > string3.length ? string1 : string2.length > string1.length && string2.length > string3.length ? string2 : string3;
    return string.toUpperCase()
  };
  //console.log(getLongestString4('hello', 'hello12345', 'hello123'));

               //ЦИНКЛЫ//(начало цикла; конец цикла; с каким шагом)

//1. Вывести в консоль 10 раз 'hello'

for(let i = 1; i <= 10; i++){
    //console.log('hello');
}

//2. //3. Вывести в консоль числа от 0 до 10

for(let i = 0; i <= 10; i++){
    //console.log(i);
}

//3. Вывести в консоль числа от 45 до 55

for(let i = 45; i <= 55; i++){
    //console.log(i);
}


// 4. Вывести в консоль числа от 55 до 45
for(let i = 55; i >= 45; i--){
};

// 5. Вывести каждое третье число в диапазоне от 100 до 46 (100, 97, 94....)

//i++ => i +=1;


for(let i = 100; i >= 46; i -= 3){
    //console.log(i);
};

             // Остаток от деления
// console.log(9 % 10); //9
// console.log(9 % 4); //1
// console.log(9 % 3); //0

// 6. Вывести четные числа от 2 до 16 (2, 4, 6...)

for(let i =2; i <= 16; i++){
    if( i % 2 === 0){
        console.log(i); 
    }
};

// 7. Вывести нечетные числа от 2 до 16 (2, 4, 6...)

for(let i =2; i <= 16; i++){
    if( i % 2 === 1){
        console.log(i); 
    }
};