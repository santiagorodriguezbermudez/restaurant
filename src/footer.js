
const footer = (currentPage) => {
  const main = document.querySelector('#content');
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footer');
  footerContainer.classList.add(currentPage);
  const buildIcon = (classes, parent) => {
    const icon = document.createElement('i');
    icon.classList.add('fab');
    icon.classList.add(classes);
    parent.appendChild(icon);
  };

  main.appendChild(footerContainer);
  buildIcon('fa-twitter', footerContainer);
  buildIcon('fa-instagram', footerContainer);
  buildIcon('fa-facebook-f', footerContainer);
};

export default footer;