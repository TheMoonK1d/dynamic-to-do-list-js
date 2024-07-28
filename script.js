document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new li element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');  // Use classList.add to add the class

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the li element
        taskItem.appendChild(removeButton);

        // Append the li element to the taskList
        taskList.appendChild(taskItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the addButton
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
