const log = document.getElementById('login');
const sign = document.getElementById('register');
const btn = document.getElementById('btn');
const food = document.getElementById('about-pic');
const image = document.getElementById('pic1');
const price = document.getElementById('butn');

document.addEventListener('DOMContentLoaded', (e) => {
        document.addEventListener('submit', e => {
            e.preventDefault()
            getFood(e.target)
        })
    })
    //style the login button
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
    //styling login button end here

function getFood(food) {
    let meal = document.createElement('li')
    meal.className = 'food'
    meal.innerHTML = `

<div class="meals">
<img src="${food.strCategoryThumb}"/>
<h4>${food.strCategory}</h4>
<p>${food.strCategoryDescription}</p>
<button id="btn1">Order</button>
</div>
`
    document.querySelector('#meal-list').appendChild(meal)
}

function getAllFood() {
    fetch("https://koskei57.github.io/server/db.json")
        .then(response => response.json())
        .then(foodData => foodData.forEach(food => getFood(food)))
        .catch(err => console.error(err));
}

function initialize() {
    getAllFood()
}
initialize()

function orderNow() {
    let order = document.getElementById()
    let get = document.querySelector()
    get.addEventListener('click', function(event) {
        event.preventDefault();
        let card = document.getElementById('')
        card.innerHTML = "Your order has been received"
        get.reset();
    })

}