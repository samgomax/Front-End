let elements = document.querySelectorAll('ul > li:last-child');

//console.log(elements[0].innerHTML);

// for(let element of elements){
//     console.log(element.innerText);
// }

// let first_elem = document.querySelector('li');
// first_elem.innerText = "WOW";

// console.log(first_elem);

// написать программу,которая находит параграф по классу и заменяет в нем текст на "привет"

// let p = document.querySelectorAll('p');
// for(let p1 of p){
//     p1.innerText = 'ПРИВЕT'
// }

//найти элемент с идентификатором main и записать в него текст "Я главный элемент"
// document.querySelector('#main').innerText = 'Я главный элемент'

// document.querySelector('a').setAttribute('href','https://www.pinterest.com/')
// document.querySelector('a').setAttribute('target','_blank');

// console.log(document.querySelector('#link1').getAttribute('href'));

//Написать скрипт, который находит в блоке с классом main картинки и первым 5 меняет url на указанное значение

// let images = document.querySelectorAll('.main > img');
// let url = 'https://i.pinimg.com/564x/d3/4f/95/d34f95879acf1a6d87ca0654606a90b2.jpg';
//console.log(images);

// for(let i =0; i<5; i++){
//     images[i].setAttribute('src', url);
// }

let i = 0;
for(let img of images){
    if(i==5){
        break;
    }
    i++;
    img.setAttribute('src', url);
}