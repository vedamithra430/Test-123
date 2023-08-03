// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
function addTask() {
    // Get the task text from the input field
    const taskText = taskInput.value.trim();

    // Check if the input field is not empty
    if (taskText !== '') {
        // Create a new list item for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }
}

// Event listener for the "Add" button click
addTaskBtn.addEventListener('click', addTask);

// Event listener for the "Enter" key press in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});