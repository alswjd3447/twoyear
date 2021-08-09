const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function printToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const deletebtn = document.createElement("button");
  span.innerText = newToDo.text;
  deletebtn.innerText = "🗑";
  deletebtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(deletebtn);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function hanbleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  printToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", hanbleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(printToDo);
}
