import footer from './footer';

const home = () => {
  const main = document.querySelector('#content');
  const hero = document.createElement('div');
  hero.classList.add('hero-container');
  hero.classList.add('restaurant-picture');
  const heroTitle = document.createElement('h1');
  heroTitle.innerHTML = "Mono's pizza";
  const heroCopy = document.createElement('h3');
  heroCopy.innerHTML = 'The best pizza in town. Come on in and grab a slice';
  const heroCta = document.createElement('button');
  heroCta.innerHTML = 'Book your table';
  heroCta.classList.add('cta');

  main.appendChild(hero);
  hero.appendChild(heroTitle);
  hero.appendChild(heroCopy);
  hero.appendChild(heroCta);
  footer('home');
};

export default home;