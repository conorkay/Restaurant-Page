function createContent() {
  const container = document.createElement('div');

  const text = document.createElement('p');
  text.textContent = 'testtest';

  container.appendChild(text);

  return container;
}

function initializeMenu() {
  const content = document.getElementById('content');
  content.appendChild(createContent());
}

export default initializeMenu;
