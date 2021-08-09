const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.getElementById("greeting");
const todoForm = document.getElementById("toDoForm");
const qoute = document.getElementById("qoute");
const day = document.getElementById("day");

function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `${username}🧡민죵이`;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  qoute.classList.remove("hidden");
  day.classList.remove("hidden");
}

const checkUsername = localStorage.getItem("username");
if (checkUsername === null) {
  todoForm.classList.add("hidden");
  loginForm.addEventListener("submit", login);
} else {
  greeting.innerText = `${checkUsername}🧡민죵이`;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  todoForm.classList.remove("hidden");
  qoute.classList.remove("hidden");
  day.classList.remove("hidden");
}
