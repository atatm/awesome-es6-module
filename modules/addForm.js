const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');

const addForm = (awesomeBookShelf) => {
  const title = formTitle.value;
  const author = formAuthor.value;
  awesomeBookShelf.addBook(title, author);
  awesomeBookShelf.saveDataToLocalStorage();
};

export default addForm;