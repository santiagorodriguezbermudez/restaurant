
const menu = () => {
  const main = document.querySelector('#content');
  const background = document.createElement('div');
  background.classList.add('hero-container');
  background.classList.add('menu-picture');
  main.appendChild(background);

  const addContainer = (name, parentElement) => {
    const container = document.createElement('div');
    container.classList.add(name);
    parentElement.appendChild(container);
    return container;
  };

  const menuSection = addContainer('menu-section', background);
  const menuPizza = addContainer('menu-pizza', menuSection);
  const wrapper = addContainer('wrapper', menuSection);
  const menuWine = addContainer('side-menu', wrapper);
  const menuDesert = addContainer('side-menu', wrapper);

  const addItemsToMenu = (titleString, element, numberofItems, itemName) => {
    const title = document.createElement('p');
    title.innerHTML = titleString;
    element.append(title);

    const randomItemsArray = [...Array(numberofItems)].map(() => `${itemName}....$${Math.floor(Math.random() * 100)}`);
    randomItemsArray.forEach(item => {
      const newItem = document.createElement('p');
      newItem.innerHTML = item;
      element.appendChild(newItem);
    });
  };

  addItemsToMenu("Our Pizza's", menuPizza, 15, 'Surprise Pizza Flavour');
  addItemsToMenu('Wines', menuWine, 8, 'Surprise Wine');
  addItemsToMenu('Deserts', menuDesert, 3, 'Surprise Dulce');
};

export default menu;