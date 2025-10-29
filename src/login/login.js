let storedUser = window.localStorage.getItem('user');
let storedPass = window.localStorage.getItem('pass');

function tryLogin() {
    console.log('login attempted');
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    console.log(user);
    console.log(pass);
}


