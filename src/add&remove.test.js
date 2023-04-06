/* eslint-disable no-console */
import { JSDOM } from 'jsdom';
import 'jest-localstorage-mock';
import List from './modules/list.js';

describe('add', () => {
  let document;

  // Here, we staclished the document enviroment (DOM) that we're going to use, using JSDOM
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

    const list = new List();
    list.addTask();
  });

  // Check that the saveTask method works properly iwth the localstorage
  test('saveTask method', () => {
    const list = new List();
    console.log('This console log', list.list);
    list.saveTask('test', false, 111);
    console.log('This console log', list.list);
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
    console.log(
      '.toDoList <ul> contains ',
      ul.querySelectorAll('li').length,
      ' <li> elements',
    );
    expect(ul.querySelectorAll('li').length).toBe(1);
  });
});

describe('deleteTask', () => {
  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
  });

  test('removeTask method', () => {
    const list = new List();
    list.list = [{ description: 'deleted', completed: false, index: 1 }];
    console.log('This array, will be deleted', list.list);
    list.removeItem(1);
    console.log('Succesfully deleted', list.list);
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
