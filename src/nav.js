import home from './home';
import menu from './menu';
import contact from './contact';

const nav = () => {
  const navbar = document.querySelector('#navbar');
  const main = document.querySelector('#content');

  const navigation = document.createElement('ul');
  navbar.appendChild(navigation);

  const createLink = (linkText, callMethod) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    navigation.appendChild(listItem);

    const linkItem = document.createElement('a');
    linkItem.innerHTML = linkText;
    listItem.appendChild(linkItem);

    linkItem.addEventListener('click', () => {
      main.innerHTML = '';
      callMethod();
    });
  };

  createLink('Home', home);
  createLink('Menu', menu);
  createLink('Contact', contact);
};

export default nav;