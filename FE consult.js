// 1) Работа над существующими элементами
//-- Определение элемента
// document.body.firstElementChild.firstElementChild.firstElementChild.innerText ="1987"
// console.log(document.body.firstElementChild.firstElementChild);

// firstElementChild      - первый ребенок
// lastElementChild       - последный ребенок
// previousElementSibling - предыдущий братский узел
// nextElementSibling     - следующий братский узел
// parentNode             - родительски   тег

//== Определение элемента

// .div        (class = 'div')
// #div        (id = 'div')
// div         (<div></div>)
// div.elemnt  (<div class = "elenent"> <div>)

// let p = document.querySelector('.text2')
// p.innerText = 'Hello Wello'
// console.log(p);
//____________________________________________________

// 2) Создание новых элементов

// Правило, которое не запутает в рамках создание нового элемента
// 1) Создать элемент
// 2) Заполнить элемент
// 3) Вставить заполненный элемент в разметку

// 1)  
let btn = document.createElement('button');
// 2)
btn.className = 'btn_elem';
btn.innerText = 'Test';

//btn.removeAttribute('class')

// 3)
let p_1 = document.querySelector('.text1');
// after();     - добавить как  следующий братсктий узел
// before();    - добавить как прeдыдущий братсктий узел
// append();    - добавить как последнего ребенка
// prepend();   - добавить как первого ребенка
// replaceWith  - заменяет значение

p_1.after(btn);
//перенос элемента при указании нового метода,новый не создаем
document.body.append(btn);
//________________________________________________________

console.log(btn);



//innerText - сво-во, которое заполнить в нутри тега текст(не учитыв. разметку)
//innerHTML - сво-во, которое заполнить в нутри тега текст(учитыв. разметку)
// let div = document.querySelector('#elem1');
// console.log(div);
// console.log(div.querySelector('.text1'));
//_________________________________________________________

//Создание картинки

let img = document.createElement('img')
img.src = 'https://learn.javascript.ru/article/modifying-document/before-prepend-append-after.svg'
document.body.append(img);
//____________________________________________________________

//Создание 500 li элементов внутри ul

function handler(){
    let ul = document.createElement('ul');
    document.body.prepend(ul);
    for(i = 1; i <= 500; i++){
        let li = document.createElement('li')
        li.innerText = `Элемент ${i}`
        ul.append(li)
}
}
______________________________________________________________
(function() {

	let text;
			let ul = document.createElement("ul");
			let txt = document.createTextNode("Create List");
			document.body.appendChild(txt);
			document.body.appendChild(ul);
	  do {

		text = prompt("please enter text", "");

		if (text !== "" && text != null) {
		 	let li = document.createElement("li");
		 	li.appendChild(document.createTextNode(text));
		 	ul.appendChild(li);
	 	}

	 } while(text !== "" && text != null);

}());