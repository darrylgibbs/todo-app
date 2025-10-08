// Task list that grows
let taskList = [];

// Add a task to the list list when hitting SUBMIT
document.querySelector(".save").addEventListener("click", function () {
    // select input by ID & retrieve VALUE of the input field
    let newTask = document.getElementById("newTaskField").value;

    // add newTaskValue to array
    taskList.push(newTask);
    console.log(taskList);

    // show updated array: taskList
    updateList();

    // clear input for next task
    document.getElementById("newTaskField").value = "";
    
});

// Removing a task from the list
document.querySelector(".delete").addEventListener("click", function () {
    // select input by ID & retrieve VALUE of the input field
    let deadTask = document.getElementById("removeTaskField").value;

    let taskRemove = taskList.indexOf(deadTask);
    if (taskRemove > -1) {
        taskList.splice(taskRemove, 1);
    }   
    console.log(taskList);

    // show updated array: taskList
    updateList();

    document.getElementById("removeTaskField").value = "";
});

// Update tasklist with changes
function updateList() {
    // this requires a loop to run through the taskList and print each item on a new line, maybe with a <li> before it
    let numberOfTasks = taskList.length;
    let outputList = "";

    for (i = 0; i < numberOfTasks; i++) {
       outputList += i+1 + ". " + taskList[i] + "<br>"; // start the count from TASK #1 not #0.
       document.getElementById("currentTasks").innerHTML = outputList
    }
}