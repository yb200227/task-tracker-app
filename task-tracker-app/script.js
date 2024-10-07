let tasks = [];


const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable").querySelector('tbody');


function handleSubmission(event) {
    event.preventDefault(); 
   
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (!taskName || !taskDeadline){
        alert('Task name and deadline are required!');
        return;
    }

    //updates the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });


    //clears form inputs
    taskForm.reset();

    render();
}


function render(){
    taskTable.innerHTML = '';


    tasks.forEach((task, index) => {
        const row = `
            <tr>
                <td>${task.name}</td>
                <td>${task.description}</td>
                <td>${task.deadline}</td>
                <td><button onclick="markTaskComplete(${index})">Complete</button></td>
                <td><button onclick="removeTask(${index})">Remove</button></td>
            </tr>
        `;
        taskTable.innerHTML += row;
    });
}


//function to mark as complete
function markTaskComplete(index){
    alert(`Task "${tasks[index].name}" marked as complete!`);
}


//function to remove a task
function removeTask(index){
    tasks.splice(index, 1); 
    render(); 
}


//for submisison
taskForm.addEventListener('submit', handleSubmission);


function init(){
    taskTable.innerHTML = ''; //clears the table
    tasks = []; 
    render(); 
}


init();
