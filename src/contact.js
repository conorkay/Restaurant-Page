function createContent() {
  const container = document.createElement('div');

  const text = document.createElement('p');
  text.textContent = 'Phone: 978-360-0870';

  container.appendChild(text);

  return container;
}

function initializeContact() {
  const content = document.getElementById('content');
  content.appendChild(createContent());
}

export default initializeContact;
