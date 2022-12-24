// let div = document.createElement('div');
// div.classList.add('block1');
// div.innerHTML = '<b> Hello </b> world!';
// document.body.append(div);

// let ol = document.querySelector('ol');
// ol.before('Before');
// ol.after('After');

// let liFirst = document.createElement('li');
// liFirst.innerText = 'First';
// ol.prepend(liFirst);

// let liLast = document.createElement('li');
// liLast.innerText = 'Last'
// ol.append(liLast);

document.querySelector('p').remove();
               //Задание
function clear(elem){
    let elements = document.querySelectorAll(elem);
    for(let list of elements){
        list.remove();
    }
}clear('li');

               // Задание: Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1.	Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2.	Создавайте элемент <li> и добавляйте его к <ul>.
// 3.	Продолжайте до тех пор, пока пользователь не отменит ввод (введя пустую строку).

// 1. Создать <ul>
// 2. Цикл, prompt
// 3. Условие, выход из цикла
// 4. Создать <li>
// 5. Инф. через prompt добавить в <li>

// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt('Enter text');

//     if (data==""){
//         break;
//     }
//     let li = document.createElement('li');
//     li.innerHTML = data;
//     ul.append(li);
// }



// console.log(document.body.className);
// // document.body.className = 'main_block';
//document.body.classList.add('article');  //добавление класса

// document.body.classList.remove('main'); // удаление

// document.body.classList.toggle('article'); // toggle('block')

// console.log(document.body.classList.contains('article'));

// let class_list = document.body.classList;

// for(let name of class_list){
//     console.log(name);
// }

// console.log(class_list);



function myFunc(callback){
    let a = [444, 111, 888];
    let element = document.querySelector('.paragraph');
    callback(element, a);
}
//array.join('-')
function out(elem, arr){
    elem.innerHTML = arr.join('-');
}
myFunc(out);