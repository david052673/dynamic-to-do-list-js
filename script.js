document. addEventListener("DOMContentLoaded"), (e){Parsed},
function callback() {
    const addButton=document.getElementById(id='add-task-btn')
    const taskInput=document.getElementById(id='task-input')
    const taskList= document.getElementById('task-list')
    function addTask(
        const taskText =const taskInput.value
    ) {
        if (taskText="") {
            alert(Please enter a task)
            
        }else{
            
        }
        
    }

    const feedbackDiv = document. querySelector('id'); 
    
    






}



function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); 
}


function addTask(taskText, save = true) {
    

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}



document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    
});