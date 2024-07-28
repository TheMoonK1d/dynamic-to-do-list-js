document.addEventListener('DOMContentLoaded', () => {
    // Select the "Add Task" button, the input field, and the task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to add a task
    function addTask(taskText, save = true) {
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert user to enter a task if empty
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text content to the task text

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text to "Remove"
        removeButton.className = 'remove-btn'; // Set the class name directly

        // Assign an onclick event to the remove button to remove the list item
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
            // Update Local Storage after removing the task
            updateLocalStorage();
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // If save is true, update Local Storage
        if (save) {
            updateLocalStorage();
        }

        // Clear the task input field
        taskInput.value = '';
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to update Local Storage with the current tasks in the task list
    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(item => {
            tasks.push(item.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add event listener to the "Add Task" button to call addTask on click
    addButton.addEventListener('click', () => addTask(taskInput.value.trim()));

    // Add event listener to the input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(taskInput.value.trim());
        }
    });
});
