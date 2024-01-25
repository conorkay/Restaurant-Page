function createHeader() {
  const header = document.createElement('header');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('image-container');

  header.appendChild(titleContainer);
  header.appendChild(createNav());

  return header;
}

/*
function createNav() {
  const container = document.createElement('div');
  container.classList.add('header-container');

  const homeButton = document.createElement('button');
  homeButton.classList.add('header-btn');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('header-btn');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.classList.add('header-btn');
  contactButton.textContent = 'Contact';

  return container;
}
*/

function createContent() {
  const container = document.createElement('div');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const image = document.createElement('img');
  image.src =
    'file:///home/conorkay/repos/Restaurant-Page/src/Goten-outside.png';

  const testimonial = document.createElement('div');
  testimonial.classList.add('testimonial');

  const test = document.createElement('p');
  test.classList.add('test');
  test.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  container.appendChild(imageContainer);
  imageContainer.appendChild(image);
  container.appendChild(testimonial);
  testimonial.appendChild(test);

  return container;
}

function createFooter() {
  const footer = document.createElement('footer');
  const text = document.createElement('p');
  text.textContent = '© ${new Date().getFullYear()} Goten of Japan';

  footer.appendChild(text);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById('content');
  //content.appendChild(header);
  content.appendChild(createContent());
  content.appendChild(createFooter());
}

export default initializeWebsite;
