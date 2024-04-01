document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const completedTasks = document.getElementById("completedTasks");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
      addTask(task);
      taskInput.value = "";
      taskInput.focus();
    }
  });

  function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => completeTask(li));
    taskList.appendChild(li);
  }

  function completeTask(taskItem) {
    taskList.removeChild(taskItem);
    taskItem.classList.add("completed");
    completedTasks.appendChild(taskItem);
    taskItem.removeEventListener("click", completeTask);
  }
});
