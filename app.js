document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.querySelector("#taskInput"); // Using querySelector
  const taskList = document.getElementById("taskList");
  const completedTasks = document.getElementById("completedTasks");
  const markAllCompleteBtn = document.createElement("button"); // Demonstrate iterating over a collection

  markAllCompleteBtn.textContent = "Mark All Complete";
  markAllCompleteBtn.setAttribute("style", "display:block; margin-top: 10px;"); // Modifying an attribute
  document.querySelector("#app").appendChild(markAllCompleteBtn); // Using querySelector

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (!task) {
      alert("Please enter a task."); // Simple DOM event-based validation
      return;
    }
    addTask(task);
    taskInput.value = "";
    taskInput.focus();
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

  markAllCompleteBtn.addEventListener("click", () => {
    Array.from(taskList.children).forEach((taskItem) => {
      completeTask(taskItem);
    });
  });

  // Example of using BOM properties/methods
  console.log(`Window inner width: ${window.innerWidth}`); // Logging a BOM property

  // Example of modifying style in response to user interaction
  document.getElementById("taskForm").addEventListener("mouseover", () => {
    taskForm.style.backgroundColor = "#f0f0f0"; // Modifying style
  });
  document.getElementById("taskForm").addEventListener("mouseout", () => {
    taskForm.style.backgroundColor = ""; // Resetting style
  });
});
