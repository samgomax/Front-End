const user ={
    id: 1,
    'first name': 'Maksym',
    nickname: ['user1', 'user2', 'user3' ],
    active: true,
    address: {
        country: 'Germany',
        city: 'Berlin',
        stret: 'Achterstr',
        building: 2
    }
};

const status = 'active';
// console.log(user[status]);

// console.log(user.id);
// console.log(user.address);
// console.log(user['address']);
// console.log(user.address.country);
// console.log(user['address']['city']);
// console.log(user['first name']);


// 1. Напишите функцию, которая будет принимать в качестве аргументов объект и ключ и возвращать значение по переданному ключу

const getValue = (obj, key) => obj[key];

const product = {
    id: 1,
    title: 'Apple',
    price: 300
}

const student = {
    id: 5,
    first_name: 'Oleg',
    mark: 4.5
}

// console.log(getValue(product, 'id')); // 1
// console.log(getValue(product, 'title')); // Apple
// console.log(getValue(student, 'mark')); // 4.5

// const numbers = [1, 2, 3, 4, 5];
const strings = ['hello', 'hi', 'good morning'];
const random = [1, true, 'hello', 6];

const users = [
    {
        id: 1,
        first_name: 'Maksym',
        last_name: 'Ushanov',
        age: 27,
        city: 'Berlin',
        country: 'Germany'
    },
    {
        id: 2,
        first_name: 'Irina',
        last_name: 'Petrova',
        age: 17,
        city: 'Madrid',
        country: 'Spain'
    },
    {   id: 3,
        first_name: 'Olga',
        last_name: 'Ivanova',
        age: 63,
        city: 'Paris',
        country: 'France'},
    {
        id: 4,
        first_name: 'Petr',
        last_name: 'Shepelin',
        age: 41,
        city: 'Bremen',
        country: 'Germany'
    },
];

// console.log(users);
// console.log(users[1]);
// console.log(users[users.length - 1]);
// console.log(users[0].age);


// 1. Используя метод forEach(), вывести каждый элемент массива в консоль

// users.forEach(el => console.log(el));

// 2. Используя метод forEach(), вывести имя каждого юзера в консоль

     // users.forEach(el => console.log(el.first_name));


// 3. Создайте новый массив, в который попадут только совершеннолетние юзеры

const adult_users = users.filter(el => el.age >= 18)
// console.log(adult_users);


// 4. Найти элемент, у которого first_name Olga. Записать найденный элемент в отдельную переменную. Вывести переменную в консоль

//------------------------------------------------------------

         // .find() - возвращает первый элемент (один!), который подошел под переданное условие

// Найти число/а меньше 3

const numbers = [1, 2, 3, 4, 5];

const num = numbers.find(el => el < 3); //возвращает елемент
const num2 = numbers.filter(el => el < 3); // возвращает масстив елементами

// console.log(num);
// console.log(num2);

//5. Создайте новый массив с возрастами юзеров
// => [27, 17, 63, 41]

const age = users.map(el => el.age);
// console.log(age);

// 6. Создайте новый массив с возрастами совершеннолетних юзеров
// => [27, 63, 41]

const adult_age = users.filter(el => el.age >= 18).map(el => el.age);
// console.log(adult_age);

//-------------------------------------------------------

const user_name2 = users.find(el => el.first_name === 'Olga');
const user_name = users.filter(el => el.first_name === 'Olga')[0];

// console.log(user_name2);
// console.log(user_name);


//Напишите ф-цию, которая принимает 3 числа и возвращает большее из них. не используя Math.max
const max_num = (a, b, c) => Math.max(a, b, c);
// console.log(max_num(5, 17, 10));

const max_num2 = (a, b, c) => {
    if (a > b && a > c){
        return a;
    }else if (b > a && b > c){
        return b;
    }else {
        return c
    }
};
// console.log(max_num2(5, 17, 10));


                      //ДЗ
// 1. Сформировать массив из имен совершеннолетних пользователей

const adult_name = users.filter(el => el.age >=18).map(el => el.first_name);
// console.log(adult_name);

// 2. Сформировать массив из людей, которые живут в Германии
const country = users.filter(el => el.country === 'Germany');
// console.log(country);

// 3. Сформировать массив людей, чей возраст находится в диапазоне от 30 до 70 включительно

const age2 = users.filter(el => el.age > 30 && el.age <= 70 )
// console.log(age2);

// 4. *Сформировать массив из строк с информацией об полных именах юзеров
// => ['Igor Ushanov', 'Irina Petrova', 'Olga Ivanova', 'Petr Shepelin']

const full_name = users.map(el => `${el.first_name} ${el.last_name}`)
console.log(full_name);