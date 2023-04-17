const form = document.querySelector("form");
const tasks = document.querySelector(".tasks");

const Tasks = JSON.parse(localStorage.getItem("tasks")) || [];
rendertasks();

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let id = Math.floor(Math.random() * 9999);
    let title = form[0].value;
    let description = form[1].value;
    let date = new Date();

    const newTask = {
        id,
        title,
        description,
        date,
    };
    Tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(Tasks));
    // Tasks = JSON.parse(localStorage.getItem("tasks"));
    rendertasks();
});

function rendertasks() {
    tasks.innerHTML = "";
    Tasks.forEach(function (task, index) {
        tasks.innerHTML += `<li>
        ${task.title} | 
        <button onclick="deletehandler(${index})">❌</button>
        </li>`;
    });
}

function deletehandler(idx) {
    Tasks.splice(idx, 1);
    localStorage.setItem("tasks", JSON.stringify(Tasks));
    rendertasks();
}