const login = document.getElementById('login');
const sign = document.getElementById('sign');
const btn = document.getElementById('btn');

function Sign_Up() {
    login.style.left = '-400px';
    sign.style.left = '50px';
    btn.style.left = '110px';
}

function login() {
    login.style.left = '50px';
    sign.style.left = '450px';
    btn.style.left = '0px';
}
const modal = document.getElementById('login-form');
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}