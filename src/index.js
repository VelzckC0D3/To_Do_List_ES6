import './style.css';
import List from './modules/list.js';

const list = new List();
list.loadTask();
list.addTask();
list.removeTask();
list.editTask();
list.showList();

const buttonClear = document.querySelector('.clear');

buttonClear.addEventListener('click', () => {
  const listLength = list.length;
  console.log(listLength, 'test', list.sum(3, 3));
});
