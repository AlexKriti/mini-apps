//Задание 3

//Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей 
//страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом).
// При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

//Пример реализации:

//https://ucarecdn.com/6e689f37-...
//ПОДСКАЗКИ

//- значение атрибута можно узнать с помощью метода element.getAttribute(' ');

//- элемент, по которому пришелся клик, = 

//event.target

//остальные элементы - 

//!event.target

//Порядок работы, если нет своих идей:

//1. Собираем изображения в массив.

//2. Перебираем массив с изображениями, добавляем на них обработчик клика.

//Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является 
//нажатой (на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем 
//ее индекс или url в память и ставим ее на фон body.

//При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - добавляем
// ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку.

const winterImg = document.querySelector('img.winter');
const skyImg = document.querySelector('img.skyscrapes');
const greyImg = document.querySelector('img.grey');
const body = document.querySelector('body');
let imgArray = [winterImg, skyImg, greyImg];

if(!!localStorage === true){
    body.style.backgroundImage = `url(${localStorage.img})`
}
for (let img of imgArray) {
    img.addEventListener('click', event => {
        if (event.target === img) {
            img.classList.add('active');
            imgArray.splice(imgArray.indexOf(img), 1)
            for (let pic of imgArray) {
                pic.classList.remove('active');
            }
            imgArray.push(img);
            body.style.backgroundImage = `url(${img.src})`;
            localStorage.img = img.src;
            console.log(localStorage.img)
        }
    })
}