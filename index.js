// Task list that grows
let taskList = [];

// shortened code
const saveButton = document.querySelector(".save");
const newInputField = document.getElementById("newTaskField");
const deleteButton = document.querySelector(".delete");
const deleteField = document.getElementById("removeTaskField");

// Save new task
function handleSave() {
    // select input by ID & retrieve VALUE of the input field
    let newTask = newInputField.value.trim();

    // check for empty field
    if (newTask === "") {
        alert("Task field cannot be empty!");
        return; // stop the function here
    } else {
        // add newTaskValue to array
        taskList.push(newTask);
        console.log(taskList);
    
        // show updated array: taskList
        updateList();
    }
    
    // clear input field for new task
    newInputField.value = "";
}

// Handle button click
saveButton.addEventListener("click", handleSave);

// Handle pressing Enter in input
newInputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleSave();
    }
});

// Delete task
function handleDelete() {
    // select input by ID & retrieve VALUE of the input field
    let deadTask = deleteField.value.trim();

    // check for empty field
    if (taskList.includes(deadTask) !== true || deadTask === "") {
        alert("Please enter a task that is currently on the list.");
        deleteField.value = ""; // clear input field for new task
        return; // stop the function here
  
    } else { // remove entered task
        let taskRemove = taskList.indexOf(deadTask);
        if (taskRemove > -1) {
        taskList.splice(taskRemove, 1);
        }   
        console.log(taskList);
    
        // show updated array: taskList
        updateList();
    }

    // clear input field for new task
    deleteField.value = "";
}

// Handle button click
deleteButton.addEventListener("click", handleDelete);

// Handle pressing Enter in input
deleteField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleDelete();
    }
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