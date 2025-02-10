function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function resetTasks() {
    document.getElementById("taskList").innerHTML = "";
}

function sortTasks() {
    let list = document.getElementById("taskList");
    let tasks = Array.from(list.children);
    tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
    list.innerHTML = "";
    tasks.forEach(task => list.appendChild(task));
}

function cleanupTasks() {
    let list = document.getElementById("taskList");
    let tasks = Array.from(list.children);
    tasks.forEach(task => {
        if (task.classList.contains("completed")) {
            task.remove();
        }
    });
}