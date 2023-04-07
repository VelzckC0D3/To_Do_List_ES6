class List {
  // Establish how the task are going to be created inside the list
  constructor() {
    this.list = [];
    this.length = 0;
    const storedList = localStorage.getItem('list');
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      this.length = parsedList[parsedList.length - 1].index;
    }
  }

  // Add a new task to the List constructor
  addTask() {
    const addTask = document.querySelector('#toDo');
    const addInput = document.querySelector('.addToInput');
    const addTaskIcon = document.querySelector('#addIcon');

    // Saved when pressed "Enter" Key
    addTask.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const inputValue = addInput.value;
        if (inputValue !== '') {
          const description = inputValue;
          const completed = false;
          const index = this.list.length > 0
            ? this.list[this.list.length - 1].index + 1
            : 1;
          /* console.log(this.list); */
          this.saveTask(description, completed, index);
          e.preventDefault();
          this.showList();

          // Animate the icon when clicking
          const addTaskIcon = document.querySelector('#addIcon');
          addTaskIcon.classList.add('addIconEnter');
          setTimeout(() => {
            addTaskIcon.classList.remove('addIconEnter');
          }, 500);

          addInput.value = '';
        } else {
          e.preventDefault();
          const addTaskIcon = document.querySelector('#addIcon');
          addTaskIcon.classList.add('addIconError');
          setTimeout(() => {
            addTaskIcon.classList.remove('addIconError');
          }, 500);
        }
      }
    });

    // Saved wen pressed "+" Icon
    addTaskIcon.addEventListener('click', () => {
      const inputValue = addInput.value;
      if (inputValue !== '') {
        const description = inputValue;
        const completed = false;
        const index = this.list.length > 0 ? this.list[this.list.length - 1].index + 1 : 1;
        /* console.log(this.list); */
        this.saveTask(description, completed, index);
        this.showList();
        addInput.value = '';
      }
    });
  }

  removeTask() {
    const listGroup = document.querySelector('.toDoList');
    listGroup.addEventListener('click', (event) => {
      const removeIcon = event.target.closest('.removeIcon');
      if (removeIcon) {
        const listItem = removeIcon.closest('.listItem');
        const indexToRemove = parseInt(listItem.id, 10);
        this.removeItem(indexToRemove);

        // Check if list is empty and delete it
        if (this.list.length === 0) {
          localStorage.removeItem('list');
        } else {
          // Update the index of the remaining tasks
          this.list.forEach((task, i) => {
            task.index = i + 1;
          });
          // Update the local storage
          localStorage.setItem('list', JSON.stringify(this.list));
        }
        // Update the list
        this.showList();
      }
    });
  }

  removeItem(indexToRemove) {
    const filteredList = this.list.filter(
      (task) => task.index !== indexToRemove,
    );
    this.list = filteredList;
  }

  // Edit Task
  editTask() {
    const listGroup = document.querySelector('.toDoList');
    listGroup.addEventListener('keydown', (event) => {
      const editInput = event.target.closest('.toDoTask');
      if (editInput && event.key === 'Enter') {
        this.updateTaskDescription(editInput);
      }
    });
    listGroup.addEventListener('focusout', (event) => {
      const editInput = event.target.closest('.toDoTask');
      if (editInput && document.activeElement !== editInput) {
        this.updateTaskDescription(editInput);
      }
    });
  }

  // Update edited Task
  updateTaskDescription(editInput) {
    const listItem = editInput.closest('.listItem');
    const indexToEdit = this.list.findIndex(
      (task) => task.index === parseInt(listItem.id, 10),
    );
    const updatedDescription = editInput.value;
    const updatedTask = this.list[indexToEdit];
    updatedTask.description = updatedDescription;
    localStorage.setItem('list', JSON.stringify(this.list)); // update local storage
    this.showList();
  }

  // Checkbox completed
  checkBoxChanger(listTask, task) {
    // Checkbox function to change the status of "completed"
    const checkbox = listTask.querySelector('.checkBox');
    const actualTask = listTask.querySelector('.toDoTask');
    if (checkbox.checked) {
      listTask.classList.add('checked');
      actualTask.classList.add('taskChecked');
    }
    checkbox.addEventListener('click', () => {
      task.completed = checkbox.checked;
      if (checkbox.checked) {
        listTask.classList.add('checked');
        actualTask.classList.add('taskChecked');
        /* console.log(task); */
      } else {
        listTask.classList.remove('checked');
        actualTask.classList.remove('taskChecked');
        /* console.log(task); */
      }
      localStorage.setItem('list', JSON.stringify(this.list));
    });
  }

  // Clear all checked task
  clearCompleted() {
    const originalLength = this.list.length;
    this.list = this.list.filter((task) => !task.completed);
    if (this.list.length < originalLength) {
      // Update task indices
      for (let i = 0; i < this.list.length; i += 1) {
        this.list[i].index = i + 1;
      }
      localStorage.setItem('list', JSON.stringify(this.list));
      if (this.list.length === 0) {
        localStorage.removeItem('list');
      }
      // Call showList to update the UI
      this.showList();
    }
  }

  // Save the task on the local storage
  saveTask(description, completed, index) {
    const newTask = { description, completed, index };
    this.list.push(newTask);
    if (!localStorage.getItem('list')) {
      localStorage.setItem('list', JSON.stringify(this.list));
    } else {
      const savedList = JSON.parse(localStorage.getItem('list'));
      savedList.push(newTask);
      localStorage.setItem('list', JSON.stringify(savedList));
    }
  }

  // Save the List of task on the Local storage
  loadTask() {
    if (localStorage.getItem('list')) {
      const savedList = JSON.parse(localStorage.getItem('list'));
      savedList.forEach((task) => {
        this.list.push({
          description: task.description,
          completed: task.completed,
          index: task.index,
        });
      });
    }
  }

  // Show List
  showList() {
    // Add the list to the HTML
    const listGroup = document.querySelector('.toDoList');
    listGroup.innerHTML = '';
    this.list.forEach((task) => {
      const listTask = document.createElement('li');
      listTask.classList = 'listItem listElement dragListLi';
      listTask.id = `${task.index}`;
      listTask.innerHTML = `
        <input type="checkbox" class="checkBox" ${task.completed ? 'checked' : ''}>
        <input type="text" class="toDoTask" value="${task.description}">
        <i class="fa-regular fa-trash-can removeIcon"></i>
        <i class="fa-solid fa-ellipsis-vertical moveIcon draggable"></i>
      `;

      this.checkBoxChanger(listTask, task);

      //  Clear Button
      const clearButton = document.querySelector('.clear');
      clearButton.addEventListener('click', () => {
        this.clearCompleted();
      });

      listGroup.appendChild(listTask);
    });
  }
}

export default List;
