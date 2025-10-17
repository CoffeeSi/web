// First Script

console.log("Yevgeniy Averyanov SE-2436")
// alert("Hello, JavaScript World!")

// Variables & Operators

let string = "String";
let number = 1234;
let bool = true;

let a = 5;
let b = 11;
console.log(a * b);

let s1 = "He";
let s2 = "llo";
console.log(s1 + s2);

// Changing Content

function changeText() {
    document.getElementById("p-text").textContent = "Some more text";
}

// Changing Styles

function changeBgColor() {
    document.getElementById("container").style.backgroundColor = "coral";
}

function changeFontSize() {
    document.getElementById("container").style.fontSize = "72px";
}

// Creating & Removing Elements

function addItemList() {
    const newItem = document.createElement("li");
    newItem.textContent = "New item";
    document.getElementById("shopping-list").appendChild(newItem);
}

function removeItemList() {
    const lastItem = document.getElementById("shopping-list").lastElementChild;
    document.getElementById("shopping-list").removeChild(lastItem);
}

// Mouse Events 

document.getElementById("box").addEventListener("mouseover", () => {
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("box").addEventListener("mouseout", () => {
    document.getElementById("box").style.backgroundColor = "red";
});

// Keyboard Events 

const input = document.getElementById("realtime-input");
const displayText = document.getElementById("realtime-p");

input.addEventListener("keyup", () => {
    displayText.textContent = input.value;
});

// Form Validation
const form = document.getElementById("form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("pass-input");
const error = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (nameInput.value.trim() === '' ||
            emailInput.value.trim() === '' ||
                passInput.value.trim() === '') {
        error.textContent = "All fields are required!";
    } else {
        error.textContent = "";
        form.reset()
    }
})

// Build a To-Do App

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let tasks = [];

function addTask() {
    if (todoInput.value.trim() === '') return;

    // Add new task to the tasks array
    const task = {text: todoInput.value, completed: false};
    tasks.push(task);

    const newTask = document.createElement("li");
    const newTaskText = document.createElement("span");
    const newDeleteButton = document.createElement("button");

    newTaskText.textContent = task.text;
    newDeleteButton.textContent = "Delete";

    // Mark task completed
    newTaskText.addEventListener("click", () => {
        task.completed = !task.completed;
        newTaskText.innerHTML = "<s>"+newTaskText.innerHTML+"</s>";
    })

    // Delete task
    newDeleteButton.addEventListener("click", () => {
        newTask.remove();
        tasks.filter(t => t !== todoInput.value);
    });


    newTask.appendChild(newTaskText);
    newTask.appendChild(newDeleteButton);
    todoList.appendChild(newTask);
    todoInput.value = '';
}

