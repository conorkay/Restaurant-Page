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
  var date = new Date().getFullYear();
  text.textContent = '© ' + date + ' Goten of Japan';

  footer.appendChild(text);

  return footer;
}

function initializeWelcome() {
  const content = document.getElementById('content');
  content.appendChild(createContent());
  content.appendChild(createFooter());
}

export default initializeWelcome;
