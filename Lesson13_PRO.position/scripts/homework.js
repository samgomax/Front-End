// Задан массив users. Для каждого пользователя создать карточку c аватаром, именем, фамилией и мэйлом. Карточка должна включать отображение фото. Почта кликабельна, при нажатии должно открывать приложение почты по умолчанию. Формат почты - Email: example@gmail.com

const users = [
    {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
    }
  ];

  const rootElem = document.querySelector('.root');

  users.forEach(({email,first_name,last_name,avatar}) => {
    const cardElem = document.createElement('div');
    const firstNmaeElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const avatarElem = document.createElement('img');
    const emailElem = document.createElement('a');
    const emailText = document.createElement('p');


    firstNmaeElem.innerText = `Firstname: ${first_name}`;
    lastNameElem.innerText = `Lastname: ${last_name}`;
    emailText.innerText  = `Email:`;
    emailElem.innerText = email;

    cardElem.classList.add('users');
    emailElem.classList.add('email');
    
    avatarElem.setAttribute('src', avatar);
    avatarElem.setAttribute('alt', `${first_name} ${last_name}`);
    emailElem.setAttribute('href', `mailto: ${email}`);

    cardElem.append(avatarElem,firstNmaeElem,lastNameElem,emailText,emailElem);
    rootElem.append(cardElem);
  });
