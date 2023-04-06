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

  // Test that when we click add button, a new index with the stalbished parametters is created
  test('addButton method', () => {
    const list = new List();
    const addButton = global.document.querySelector('#addIcon'); // Here, the error was that this was not on global as is established from  line 31 to line 33
    const inputField = global.document.querySelector('.addToInput'); // Same
    console.log(inputField.value); // Console.log actually visible on the commandline
    inputField.value = 'testing button 1'; // Test input 1
    console.log('Console log to check that inputField.value = \'testing button 1\' is assigned correctly', inputField.value); // Console.log actually visible on the commandline
    addButton.click();
    inputField.value = 'testing button 2'; // test input 2
    addButton.click();
    console.log('Loading the list.list (localStorage array) before loading the added one ', list.list); // show actual list array before being loaded
    list.loadTask();
    console.log('Loading the list.list(localStorage array) after loading the added one ', list.list); // show actual list array

    expect(list.list[0].description).toBe('testing button 1');
    expect(list.list[0].index).toBe(1);
    expect(list.list[1].description).toBe('testing button 2');
    expect(list.list[1].index).toBe(2);
  });

  // Check that the saveTask method works properly iwth the localstorage
  test('saveTask method', () => {
    const list = new List();
    list.saveTask('test', false, 111);
    expect(list.list.length).toBe(1);
    expect(list.list[0].description).toBe('test');
    expect(list.list[0].completed).toBe(false);
    expect(list.list[0].index).toBe(111);
  });
});
