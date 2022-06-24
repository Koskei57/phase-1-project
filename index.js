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
        'X-RapidAPI-Key': '1f25fd9b01msh9807a83f2f44c15p15acf3jsn4313fbbc6498',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
};

fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=beef', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

function getFood(food) {
    let foods = document.createElement('li')
    foods
}