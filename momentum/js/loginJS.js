const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "userName";

function startGretting(userName){
    greeting.innerText = `Hello ${userName}`
    greeting.classList.remove("hidden");
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    startGretting(userName);
    
}


const member = localStorage.getItem(USERNAME_KEY);

if(member === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",loginSubmit);
}else{
    startGretting(member);
}