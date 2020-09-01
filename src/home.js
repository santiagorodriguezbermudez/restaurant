
const home = () => {
  const main = document.querySelector('#content');
  const hero = document.createElement('div');
  const heroImg = document.createElement('img');
  heroImg.src = '../src/images/hero_img.jpg';
  const heroTitle = document.createElement('h1');
  heroTitle.innerHTML = 'Hero Delivery';
  const heroCopy = document.createElement('h3');
  heroCopy.innerHTML = "We'll always deliver food on time with the highest quality standards";
  const heroCta = document.createElement('button');
  heroCta.innerHTML = 'Order now';

  main.appendChild(hero);
  hero.appendChild(heroImg);
  hero.appendChild(heroTitle);
  hero.appendChild(heroCopy);
  hero.appendChild(heroCta);
};

export default home;