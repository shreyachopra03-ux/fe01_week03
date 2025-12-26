
const addTaskBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('input-box');
const TasksList = document.querySelector('.task-list');
const ButtonComplete = document.getElementById('completeBtn');

// update counter function
function updateCounter() {
    const allTasks = TasksList.querySelectorAll('.task-item');
    const completedTasks = TasksList.querySelectorAll('.task-item .completed');
    document.getElementById('total-task').textContent = allTasks.length;
  document.getElementById('completed-task').textContent = completedTasks.length;
} 
     
// Add new tasks with a text input
addTaskBtn.addEventListener('click', function(e){
    e.preventDefault();
   
    const inputText = taskInput.value;
    if(inputText === "") return;

    const li = document.createElement("li");
    li.classList.add('task-item');

    li.innerHTML = `<input type="checkbox">
        <span class="listItem">${inputText}</span>
        <span class="delete">❌</span>`

      TasksList.appendChild(li);
        taskInput.value = "";

updateCounter();
// saveTasks();

});

// Mark tasks as complete/incomplete with checkboxes

TasksList.addEventListener('change', function(e){
    e.preventDefault();
    
    if(e.target.type === 'checkbox'){
        const taskText = e.target.nextElementSibling;

        if(e.target.checked){
            taskText.classList.add('completed');
        }
        else{
             taskText.classList.remove('completed');
        }  
        updateCounter();
        // saveTasks()
    }
});

//Delete individual tasks
TasksList.addEventListener('click', function(e){
   
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();

       updateCounter();
    //    saveTasks()
     }
    });

// Clear all completed tasks at once
ButtonComplete.addEventListener('click', function(){
const completedTasks = TasksList.querySelectorAll('.task-item .completed');
    completedTasks.forEach(function(checkbox){
        checkbox.parentElement.remove();
    })

    updateCounter();
    // saveTasks();
});
    


// to save new tasks in local storage
function saveTasks(){
   const  allTasks = [];
   const itemTask = document.querySelectorAll('.task-item');
   itemTask.forEach(function(e){
    const textContent = e.querySelector('.task-text').textContent;
    const completed = e.classList.contains('.completed');
    allTasks.push({textContent, state});
   });

   localStorage.setItem("allTasks", JSON.stringify(allTasks));
    
}


// function loadTasks(){
//     const savedTasks = JSON.parse(localStorage.getItem("allTasks")) || [];

//     savedTasks.forEach(function(task){
//         const li = document.createElement("li");
//          li.classList.add('task-item');

//          li.innerHTML = `<input type="checkbox">
//         <span class="listItem">${inputText}</span>
//         <span class="delete">❌</span>`;

//         if(task.completed){
//              li.classList.add("completed");
//         }

//         const input = document.createElement("input");
//         input.classList.add("task-checkbox");
//         input.type = "checkbox";
//         input.checked = task.completed;

//         input.addEventListener('change',function(e){
//             li.classList.toggle("completed",input.checked);
//              updateCounter();
//              saveTasks();
//         });

//         li.innerHTML = `<input type="checkbox">
//         <span class="listItem">${inputText}</span>
//         <span class="delete">❌</span>`;


//     });
        




    

// }


