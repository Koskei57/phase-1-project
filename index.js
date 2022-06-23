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
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '27495d7b91msh541a131b405839cp1d9107jsnffde60fd2e9c',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
    .then(response => console.log(response.json()))
    .then(response => console.log(response))
    .catch(err => console.error(err));