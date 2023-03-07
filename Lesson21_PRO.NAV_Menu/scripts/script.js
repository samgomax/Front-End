const menu_icon = document.querySelector('#menu_icon');
const nav_menu = document.querySelector('.nav_menu');

menu_icon.addEventListener('click', () => nav_menu.classList.toggle('active'))


// при клике на аккаунт добавлять div.popup  класс active
//при клике на кретстик удалять класс activ

const accountBtn = document.querySelector('.account');
const popup = document.querySelector('.popup');
const crossIcon = document.querySelector('.cross_icon')

accountBtn.addEventListener('click', () => popup.classList.add('window'));

crossIcon.addEventListener('click', () => popup.classList.remove('window'));