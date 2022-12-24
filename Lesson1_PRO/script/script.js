const text = document.querySelector('.text');

const all_text = document.querySelectorAll('.text');

const text_2 = document.querySelector('.text_2')

const changeBtn = document.querySelector('.change_btn');

// console.log(text);
// console.log(all_text);

//text.style.color = 'red';

changeBtn.addEventListener('click', () => {
    text.style.color = 'magenta';
    text_2.style.fontSize = " 30px";
});

// // Создать два параграфа. При клике на первый параграф, у второго меняется задний фон на розовый (pink). При клике на второй параграф у первого меняется цвет текста на зеленый (green);

const paragraph_1 = document.querySelector('.paragraph_1');
const paragraph_2 = document.querySelector('.paragraph_2');

paragraph_1.addEventListener('click', () => {
    paragraph_2.style.backgroundColor = 'pink';
});

paragraph_2.addEventListener('click', () => {
    paragraph_1.style.color = 'green';
});

// Создать кнопку и пустой div. При клике на кнопку в div создается параграф с текстом 'New paragraph'

const add_par_btn  = document.querySelector('.add_paragraph_btn');
const par_cont = document.querySelector('.paragarph_cont');

add_par_btn.addEventListener('click', () => {
   const new_par =  document.createElement('p');
   new_par.innerText = 'PARAGRAPH';
   par_cont.append(new_par);
});

// Создать кнопку и пустой div. При клике на кнопку будет создаваться два параграфа (первый зеленого цвета, второй - красного). Текст параграфов произвольный

const add_par_btn2  = document.querySelector('.add_par_btn2');
const paragarph_cont2 = document.querySelector('.paragarph_cont2');

add_par_btn2.addEventListener('click', () => {
    const new_par1 =  document.createElement('p');
    const new_par2 =  document.createElement('p');
    

    new_par1.innerText = 'Paragraph 1';
    new_par2.innerText = 'Paragraph 2';
    
    new_par1.style.backgroundColor = 'green';
    new_par1.style.boxShadow = '10px -5px 5px 2px red';
    new_par2.style.backgroundColor = 'red';
    new_par2.style.boxShadow = '10px -5px 5px 2px green';


    paragarph_cont2.append(new_par1, new_par2);
});