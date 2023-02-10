let button = document.querySelector('button.popup-btn');
let div = document.querySelector('div.fixed');
button.addEventListener('click', (event) => {
    div.classList.add("new")
});
let button2 = document.querySelector('button.cross');
button2.addEventListener('click', (event) => {
    div.classList.remove("new")
});