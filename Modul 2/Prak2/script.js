let todos = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const todo = input.value.trim();
  if (todo) {
    todos.push({ id: Date.now(), text: todo });
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  const newText = prompt("Edit task:", todo.text);
  if (newText !== null && newText.trim() !== "") { // Memastikan input tidak kosong
    todo.text = newText.trim();
    renderTodos();
  }
}

function renderTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${todo.text}
            <div>
                <button class="edit-btn" onclick="editTodo(${todo.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;
    todoList.appendChild(li);
  });
}

// Initial render
renderTodos();
