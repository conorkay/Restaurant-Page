import initializeWelcome from './website';
import initializeContact from './contact';
import initializeMenu from './menu';

initializeWelcome();
addButtonListeners();

var currPage = 1;

function addButtonListeners() {
  console.log('Listeners');
  var welcome = document.getElementById('welcome');
  var menu = document.getElementById('menu');
  var contact = document.getElementById('contact');

  welcome.addEventListener('click', function (e) {
    if (currPage != 1) {
      wipeContent();
      initializeWelcome();
      currPage = 1;
      console.log('not 1');
    }
    console.log('1');
  });

  menu.addEventListener('click', function (e) {
    if (currPage != 2) {
      wipeContent();
      initializeMenu();
      currPage = 2;
      console.log('not 2');
    }
    console.log('2');
  });

  contact.addEventListener('click', function (e) {
    if (currPage != 3) {
      wipeContent();
      initializeContact();
      currPage = 3;
      console.log('not 3');
    }
    console.log('3');
  });
}

function wipeContent() {
  var content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}
