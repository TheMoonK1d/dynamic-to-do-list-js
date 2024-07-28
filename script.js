document.addEventListener('DOMContentLoaded', () => {
    // Select the "Add Task" button, the input field, and the task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

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
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button to call addTask on click
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask();
        }
    });
});
