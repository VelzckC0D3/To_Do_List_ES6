import './style.css';

const mylist = [
  {
    description: 'clean room',
    completed: false,
    index: 1,
  },
  {
    description: 'learn JavaScript',
    completed: false,
    index: 2,
  },
  {
    description: 'today projects',
    completed: true,
    index: 3,
  },
  {
    description: 'learn Webpack',
    completed: false,
    index: 4,
  },
];

const getMyList = () => {
  const listGroup = document.querySelector('.toDoList');
  mylist.forEach((item) => {
    const listTask = document.createElement('li');
    listTask.classList = 'listItem listElement';
    listTask.id = `${item.index}`;
    listTask.innerHTML = `
      <input type="checkbox" class="checkBox">
      <input type="text" class="toDoTask" value="${item.description}">
      <i id="move" class="fa-solid fa-ellipsis-vertical moveIcon" style="color: rgba(0, 0, 0, 0.3);"></i>
    `;
    const checkbox = listTask.querySelector('.checkBox');
    const task = listTask.querySelector('.toDoTask');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        listTask.classList.add('checked');
        task.classList.add('taskChecked');
      } else {
        listTask.classList.remove('checked');
        task.classList.remove('taskChecked');
      }
    });
    listGroup.appendChild(listTask);
  });
};

window.addEventListener('load', getMyList);
