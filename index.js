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

    // this requires a loop to run through the taskList and print each item on a new line, maybe with a <li> before it
    let numberOfTasks = taskList.length;
    let outputList = "";

    for (i = 0; i < numberOfTasks; i++) {
       outputList += i + ". " + taskList[i] + "<br>";
        
       document.getElementById("currentTasks").innerHTML = outputList
        //document.getElementById("currentTasks").innerHTML = taskList.join("<br>");
    }

            // let text = taskList.toString();
            // document.getElementById("currentTasks").innerHTML = text;

    // clear input for next task
    document.getElementById("newTaskField").value = "";
    
});

// Removing a task from the list
document.querySelector(".delete").addEventListener("click", function () {
    // select input by ID & retrieve VALUE of the input field
    let deadTask = document.getElementById("removeTaskField").value;

    taskList.splice(deadTask);
});