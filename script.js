document. addEventListener("DOMContentLoaded", (e),{Parsed},
function callback() {
    const addButton = document.getElementById(id ='add-task-btn');
    const taskInput = document.getElementById(id ='task-input');
    const taskList = document.getElementById('task-list');
    function addTask(
         taskText = taskInput.value.trim()
    ) {
        if (taskText="") {
            alert("Enter a task");
            
        }else{
            const ul = document.querySelector("ul"); 
            const li = document.createElement("li");
            li.textContent = "taskTest";
            ul.appendChild(li);
            
            const newbutton =document.createElement("button");
            const div = document.getElementById("todo-app");
            newbutton.textContent="Remove"
            div.appendChild (newbutton);
            newbutton. className ='remove-btn'


        }
        
    }

    const feedbackDiv = document. querySelector('id'); 
    
    






});



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