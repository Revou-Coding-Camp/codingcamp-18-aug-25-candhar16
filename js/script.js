console.log("hello world");

function validateForm() {
    //DOM Form Elements
    const input = document.getElementById("task-input");
    const errorMessage = document.getElementById("due-date-input");

    if(taskInput.value === ""|| duedateInput.value === "") {
    alert("Please enter a task");
    } else {
        addTodo(taskInput.value, dueDateInput.value);
    }

   
}



/// Add a new Todo
function addTodo(task, dueDate) {
    listTodo.push({
        task: task,
        dueDate: dueDate
    });

    renderTodoList();
}

/// Render the Todo List
function renderTodoList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';


    for (let i = 0; i < listTodo.length; i++) {
        taskList.innerHTML += `<li class="border-b py-2">${listTodo[i].task} - Due: ${listTodo[i].dueDate}</li>`;
    }
}
/// Delete all Todos
function deleteAll() {
    listTodo = [];
    renderTodoList();
}