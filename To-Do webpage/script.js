function addNote() {
    const noteTitle = document.getElementById('noteTitle').value.trim();
    const noteInput = document.getElementById('noteInput').value.trim();
    const imageInput = document.getElementById('imageInput');
    const imageFile = imageInput.files[0];
  
    if (noteTitle !== '' || noteInput !== '' || imageFile) {
      const noteList = document.getElementById('noteList');
      const listItem = document.createElement('li');
  
      if (noteTitle !== '') {
        const title = document.createElement('h3');
        title.textContent = noteTitle;
        listItem.appendChild(title);
      }
  
      if (noteInput !== '') {
        const noteText = document.createElement('p');
        noteText.textContent = noteInput;
        listItem.appendChild(noteText);
      }
  
      if (imageFile) {
        const image = document.createElement('img');
        image.src = URL.createObjectURL(imageFile);
        image.style.maxWidth = '100%';
        listItem.appendChild(image);
      }
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        noteList.removeChild(listItem);
      };
  
      listItem.appendChild(deleteButton);
      noteList.appendChild(listItem);
  
      document.getElementById('noteTitle').value = '';
      document.getElementById('noteInput').value = '';
      imageInput.value = null;
    } else {
      alert('Please enter a title, note, or select an image!');
    }
  }

  function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
  
    if (todoText !== '') {
      const todoList = document.getElementById('todoList');
      const listItem = document.createElement('li');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      listItem.appendChild(checkbox);
    
      const label = document.createElement('label');
      label.textContent = todoText;
      listItem.appendChild(label);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        listItem.remove();
      };
      listItem.appendChild(deleteButton);
  
      todoList.appendChild(listItem);
      todoInput.value = '';
    } else {
      alert('Please enter a to-do item!');
    }
  }
  
