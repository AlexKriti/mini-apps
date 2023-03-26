// // Задание 2

// // По данному url расположена задача:

// // https://jsonplaceholder.typicode.com/todos/1

// // В html предусмотреть <div></div>
// // Достать с сервера заголовок задачи и отобразить его в div.


// let httpRequest = new XMLHttpRequest();
// let div = document.querySelector('div.first');


// httpRequest.onload = function() { 

// console.log((httpRequest.responseText))
// let obj = JSON.parse(httpRequest.responseText);
// div.innerText = obj.title;
// };


// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');


// httpRequest.send();



// // Задание 3

// // Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.

// // Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
// let newHttpRequest = new XMLHttpRequest();
// let ul = document.querySelector('ul');


// newHttpRequest.onload = function() { 

// console.log((newHttpRequest.responseText));

// let obj = JSON.parse(newHttpRequest.responseText);
// for(let i = 0; i<20; i++){
//     let li = document.createElement('li');
//     li.innerText = obj[i].title;
//     ul.appendChild(li)
// }
// };


// newHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');


// newHttpRequest.send();
//
// Задание 4

// Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typicode.com/comments

// Оформить тегами как в ПРИМЕРЕ.



let divResult = document.querySelector('div.result');
let comHttpRequest = new XMLHttpRequest();


comHttpRequest.onload = function () {


    console.log(comHttpRequest.responseText);
    let obj = JSON.parse(comHttpRequest.responseText);
    console.log(obj[1].body)
    for (let i = 0; i < 10; i++) {
        console.log(obj[i])
        let h3 = document.createElement('h3');
        h3.classList.add('name')
        let pEmail = document.createElement('p');
        pEmail.classList.add('email');
        let pBody = document.createElement('p');
        pBody.classList.add('body');
        h3.innerText = obj[i].name;
        pEmail.innerText = obj[i].email;
        pBody.innerText = obj[i].body;
        divResult.appendChild(h3);
        divResult.appendChild(pEmail);
        divResult.appendChild(pBody);
    }

};


comHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');


comHttpRequest.send();
//
// Задание 5

// Создать собственный погодный виджет на основе данных с сервера погоды.

//     Оформить, как в примере: ЗДЕСЬ.

//         Документация: https://openweathermap.org/api...



// Порядок работы:

// 1) Проверить, работает ли API - ключ, данный в примере.Для этого открыть url https://api.openweathermap.org...

// Если данные отображаются - можно не получать свой ключ, иначе см.п. 1.1.

// 1.1.Зарегистрироваться и получить собственный API - ключ на сайте https://home.openweathermap.or...



// 2) Создать html - css разметку под данные.

// - общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза(пример см.ЗДЕСЬ)

//     - внутри нижней части виджета через js будут добавляться строки по дням - это дивы, им нужно сразу 
//прописать стили(flex - распределение вставляемых элементов, нижняя граница).



// 3) Написать JS с HTTP - запросом на url.

// - кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по 
//Цельсию(см.на странице документации раздел Units of measurement)



// 4) добавить информацию из ответа в виджет на страницу.

// - в верхней части виджета отобразить город и дату(из полученного JSON - объекта).

//     Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней ЗДЕСЬ.

// - из JSON - объекта "достать" текущую погоду(.list[0]) - первый объект внутри массива.

// Как узнать url иконки: https://openweathermap.org/wea...



// - в нижней части добавить необходимую информацию через цикл.Вам понадобится каждый 8 - й объект, 
//т.к в ответе приходит погода на каждые 3 часа(8 раз в сутки), а нам нужна погода 1 раз в сутки.