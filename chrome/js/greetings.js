const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");
const delButton = document.querySelector("#greeting_del");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


const savedUsername = localStorage.getItem(USERNAME_KEY);
const deleteUsername = localStorage.removeItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username);
  //username 삭제버튼 나오게 하기
  delButton.classList.remove(HIDDEN_CLASSNAME)
  delButton.addEventListener("click", delGreetings);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`;
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    delButton.addEventListener("click", delGreetings);
}

//x버튼 클릭 시 이벤트
function delGreetings(){
    deleteUsername;
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    delButton.classList.add(HIDDEN_CLASSNAME);
}