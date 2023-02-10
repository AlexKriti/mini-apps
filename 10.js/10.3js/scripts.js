//Задание 3

//Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.

//    Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...

//Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее(фокусное состояние) фон всей строки, включая кнопку, меняется на белый.

//Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.

//    ПОДСКАЗКИ.Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер".
//Скрыть выпадающий блок с помощью CSS.При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.


const button1 = document.querySelector('button.outside');
const button2 = document.querySelector('button.inside');
console.log(button2)
const div = document.querySelector('div.nav');
button1.addEventListener('click', ()=>{
    console.log('hi');
    div.className = 'back';
    button1.classList.add('none')
})

button2.addEventListener('click', ()=>{
    console.log('bye');
    div.className = 'none';
    button1.classList.remove('none')
})