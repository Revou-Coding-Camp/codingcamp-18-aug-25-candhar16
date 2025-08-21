console.log("hello world");

function validateForm() {
    //DOM Form Elements
    const input = document.getElementById("task-input");
    const errorMessage = document.getElementById("due-date-input");

    if(taskInput.value === ""){
    alert("Please enter a task");
    return false;
}
    if(dueDateInput.value === ""){
        alert("Please enter a due date");
        return false;
    }

   
}