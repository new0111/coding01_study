//const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("button");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(event);
    // const typeUsername = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // greeting.innerText = "Hello " + username;
    paintGreeting();
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

// function handleLinkClick() {
//     alert("clicked");
// }


// function handleLoginBtnClick() {
//     const username =loginInput.value;
//     if(username === "") {
//         alert("Please write your name");
//     }
//     else if (username.length > 15) {
//         alert("your name is too long.");
//     }
// }

// loginButton.addEventListener("click", handleLoginBtnClick);

// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    // show the greetings
    paintGreeting();
}