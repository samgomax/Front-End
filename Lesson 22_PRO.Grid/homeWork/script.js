const random_back = document.querySelector('div');

const random_num = () => Math.round(Math.random() * 255);

random_back.addEventListener('click', event => {
  event.target.style.backgroundColor = `rgb(${random_num()}, ${random_num()}, ${random_num()})`
});