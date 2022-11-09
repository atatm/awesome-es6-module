import BookShelf from './modules/bookShelf.js';
import { showList, showAdd, showContact } from './modules/showMenu.js';
import addForm from './modules/addForm.js';
import { DateTime } from './modules/luxon.js';

const linkAdd = document.querySelector('#link-add');
const linkList = document.querySelector('#link-list');
const linkContact = document.querySelector('#link-contact');
const bookAddButton = document.querySelector('#book-add-button');
const dateTime = document.querySelector('.date-time');

const awesomeBookShelf = new BookShelf();

linkList.addEventListener('click', () => {
  showList();
});

linkAdd.addEventListener('click', () => {
  showAdd();
});

linkContact.addEventListener('click', () => {
  showContact();
});

bookAddButton.addEventListener('click', () => {
  addForm(awesomeBookShelf);
});

const timer = () => {
  const now = DateTime.now();
  dateTime.innerHTML = now.toLocaleString(DateTime.DATETIME_MED);
};

setInterval(timer, 1000);

window.onload = () => {
  awesomeBookShelf.loadDataFromLocalStorage();
  showList();
};
