const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskContent) {
    const li = document.createElement('li');
    li.textContent = taskContent;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskContent = taskInput.value.trim();
    if (taskContent !== '') {
        createTaskItem(taskContent);
        taskInput.value = '';
    }
});
