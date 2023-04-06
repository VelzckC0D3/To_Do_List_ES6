import './style.css';
import List from './modules/list.js';

const list = new List();
list.loadTask();
list.addTask();
list.removeTask();
list.editTask();
list.showList();