import footer from './footer';

const contact = () => {
  const main = document.querySelector('#content');
  const background = document.createElement('div');
  background.classList.add('hero-container');
  background.classList.add('contact-picture');

  const contactInfo = document.createElement('h1');
  contactInfo.classList.add('contact-info');
  contactInfo.innerHTML = 'Get in touch! Send us an email at mono@pizza.co';

  main.appendChild(background);
  background.appendChild(contactInfo);
  footer('contact');
};

export default contact;