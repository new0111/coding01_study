//const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("button");
// const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");


function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
}

function handleLinkClick() {
    alert("clicked");
}


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
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);