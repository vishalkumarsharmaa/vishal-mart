const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const dueDateInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskContent, dueDate, priority) {
    const li = document.createElement('li');
    
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    
    const taskText = document.createElement('span');
    taskText.textContent = taskContent;
    taskDetails.appendChild(taskText);
    
    const dueDateSpan = document.createElement('span');
    dueDateSpan.textContent = 'Due Date: ' + dueDate;
    taskDetails.appendChild(dueDateSpan);
    
    const prioritySpan = document.createElement('span');
    prioritySpan.textContent = 'Priority: ' + priority;
    taskDetails.appendChild(prioritySpan);
    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function() {
        const newTaskContent = prompt('Edit task:', taskContent);
        if (newTaskContent !== null) {
            taskText.textContent = newTaskContent;
        }
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(taskDetails);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
}

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskContent = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    if (taskContent !== '') {
        createTaskItem(taskContent, dueDate, priority);
        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'low';
    }
});

// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        createTaskItem(task.content, task.dueDate, task.priority);
    });
}

// Function to save tasks to local storage
function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll('.task-details');
    taskItems.forEach(function(item) {
        const taskContent = item.querySelector('span').textContent;
        const dueDate = item.querySelector(':nth-child(2)').textContent.substring(10);
        const priority = item.querySelector(':nth-child(3)').textContent.substring(10);
        tasks.push({ content: taskContent, dueDate: dueDate, priority: priority });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

// Save tasks to local storage before page is unloaded
window.addEventListener('beforeunload', function() {
    saveTasks();
});
