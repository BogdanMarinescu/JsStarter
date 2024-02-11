const loginForm = document.querySelector("#login-form");
console.log (loginForm)

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;

    console.log(userName);
    console.log(password);

    localStorage.setItem ('userName', userName);
    localStorage.setItem ('password', password);
})