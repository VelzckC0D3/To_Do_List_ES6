/* eslint-disable no-console */
import { JSDOM } from 'jsdom';
import 'jest-localstorage-mock';
import List from './modules/list.js';

describe('list', () => {
  // Stablished an empty document so we can use DOM when filled on line #33
  let document;
  // Stablished the document enviroment (DOM) that we're going to use, using JSDOM
  beforeAll(() => {
    const dom = new JSDOM(`<!DOCTYPE html>
        <html lang="en">
      
        <body>
      
            <section class="listCont">
                <form id="addToList">
                    <p id="listTitle" class="listElement">Today's To Do</p>
                    <div class="listElement addCont">
                        <div id="toDo">
                            <input class="addToInput" type="text" placeholder="Add to your list..."/></input>
                            <i id="addIcon" class="fa-solid fa-plus icon"></i>    
                        </div>
                    </div>
                </form>
                <ul class="toDoList"></ul>
                <button type="button" class="clear"><span>Clear all completed</span></button>
            </section>
        </body>
      
        </html>`);
    global.window = dom.window;
    document = dom.window.document;
    global.document = document;
    global.KeyboardEvent = dom.window.KeyboardEvent;
    global.MouseEvent = dom.window.MouseEvent;

    const list = new List();
    list.addTask();
  });

  // clear the jest-localstorage-mock each time it finish a test...
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  // test the add method for the List class
  describe('add', () => {
    // Check that the saveTask method works properly iwth the localstorage
    test('saveTask method', () => {
      const list = new List();
      list.saveTask('test', false, 111);
      expect(list.list.length).toBeGreaterThan(0);
      expect(list.list[0].description).toBe('test');
      expect(list.list[0].completed).toBe(false);
      expect(list.list[0].index).toBe(111);
    });

    // REQUIREMENT mocked HTML to check if added exactly 1 <li> item
    test('ul haves exactly 1 li (item added)', () => {
      const list = new List();
      list.saveTask('li added to ul', false, 1);
      list.showList(); // update the LI elements inside .toDoList UL
      const ul = global.document.querySelector('.toDoList');
      expect(ul.querySelectorAll('li').length).toBe(1);
    });
  });

  // test the delete method for the List class
  describe('deleteTask', () => {
    test('removeTask method', () => {
      const list = new List();
      list.list = [{ description: 'deleted', completed: false, index: 1 }];
      list.removeItem(1);
      expect(list.list.length).toBe(0);
    });

    test('ul haves exactly 0 li (item removed)', () => {
      const list = new List();
      const ul = global.document.querySelector('.toDoList');
      list.list = [{ description: 'deleted', completed: false, index: 1 }];
      list.removeItem(1);
      list.showList();
      expect(ul.querySelectorAll('li').length).toBe(0);
    });
  });

  // test edit task function
  describe('editTask', () => {
    test('edit a task', () => {
      const list = new List();
      list.saveTask('before edit 1', false, 1);
      list.showList();

      // Get the input element for the task to be edited
      const input = global.document.querySelector('.toDoTask');

      // Update the input value
      input.value = 'after edit 1';

      // Get the list item containing the task to be edited
      const listItem = input.closest('.listItem');

      // Get the index of the task to be edited
      const indexToEdit = list.list.findIndex(
        (task) => task.index === parseInt(listItem.id, 10),
      );

      // Edit the task using the updateTaskDescription method
      list.updateTaskDescription(input);

      expect(list.list[indexToEdit].description).toBe('after edit 1');
    });
  });

  describe('checkBoxChanger', () => {
    // Checks that the checkbox interacts with the DOM
    test('checkBox method', () => {
      const list = new List();
      list.saveTask('before edit 1', true, 1);
      list.showList();
      const checkBox = global.document.querySelector('.checkBox');
      expect(checkBox.checked).toBe(true);
    });

    // Check the complete status
    test('complete status (true)', () => {
      const list = new List();
      list.saveTask('before edit 1', false, 1);
      list.showList();
      const checkBox = global.document.querySelector('.checkBox');
      checkBox.dispatchEvent(new MouseEvent('click'));
      // To be noticed: this exxpects the actual change from the local storage, not just the DOM
      expect(list.list[0].completed).toBe(true);
    });
  });

  describe('clearAllCompleted', () => {
    test('clearAllCompleted method', () => {
      const list = new List();
      list.list = [
        { description: 'deleted', completed: false, index: 1 },
        { description: 'deleted', completed: true, index: 1 },
        { description: 'deleted', completed: true, index: 1 },
      ];
      list.clearCompleted();
      expect(list.list.length).toBe(1);
    });

    test('2 items after clear all (items removed)', () => {
      const list = new List();
      const ulItem = global.document.querySelector('.toDoList');
      list.list = [
        { description: 'deleted', completed: false, index: 1 },
        { description: 'deleted', completed: true, index: 1 },
        { description: 'deleted', completed: true, index: 1 },
        { description: 'deleted', completed: false, index: 1 },
      ];
      list.clearCompleted();
      list.showList();
      expect(ulItem.querySelectorAll('li').length).toBe(2);
    });
  });
});
