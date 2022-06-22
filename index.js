const log = document.getElementById('login');
const sign = document.getElementById('register');
const btn = document.getElementById('btn');

function register() {
    log.style.left = '-400px';
    sign.style.left = '50px';
    btn.style.left = '110px';
}

function login() {
    log.style.left = '50px';
    sign.style.left = '450px';
    btn.style.left = '0px';
}
const modal = document.getElementById('login-form');
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}