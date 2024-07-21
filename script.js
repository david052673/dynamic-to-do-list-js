document. addEventListener("DOMContentLoaded", (Event)=>{
    parsed
});

const addButton=document.getElementById(id="add-task-btn")

const feedbackDiv = document. querySelector(.id);





function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}



document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});