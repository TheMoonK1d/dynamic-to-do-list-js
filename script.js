document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from Local Storage
    loadTasks();

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Create a new li element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');  // Use classList.add to add the class

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            // Remove the task from the DOM
            taskList.removeChild(taskItem);

            // Remove the task from Local Storage
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the li element
        taskItem.appendChild(removeButton);

        // Append the li element to the taskList
        taskList.appendChild(taskItem);

        // Save the task to Local Storage
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the task input field
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add event listener to the addButton
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText); // Pass the taskText to addTask and save it
        } else {
            alert('Please enter a task');
        }
    });

    // Add event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText); // Pass the taskText to addTask and save it
            } else {
                alert('Please enter a task');
            }
        }
    });
});
