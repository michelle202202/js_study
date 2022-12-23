// Get references to the form, input field, and to-do list
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-items');

// Add an event listener for the form submission
form.addEventListener('submit', function(e) {
  // Prevent the form from refreshing the page
  e.preventDefault();

  // Get the value of the input field
  const todoText = input.value;

  // Create a new list item with the to-do text
  const todoItem = document.createElement('li');
  todoItem.innerHTML = todoText;

  // Add a click event listener to the to-do item
  todoItem.addEventListener('click', function() {
    // Toggle the "completed" class for the to-do item
    this.classList.toggle('completed');
  });

  // Add the to-do item to the list
  todoList.appendChild(todoItem);

  // Clear the input field
  input.value = '';
});
