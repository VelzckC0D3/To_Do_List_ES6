import List from './modules/list';
import 'jest-localstorage-mock';

const list = new List();
list.sum();
/* 
test('sum calculator', () => {
  const result = list.sum(3, 3);
  expect(result).toBe(6);
});

test('sum calculator', () => {
    const result = list.sum(3, 4);
    expect(result).toBe(6);
  }); */

  test('add new task', () => {
    const list = new List();
    list.saveTask('test', false, 999);
    expect(list.list.length).toBe(1);
    expect(list.list[0].description).toBe('test');
    expect(list.list[0].completed).toBe(false);
    expect(list.list[0].index).toBe(999);
  });
  