//localStorage.name = 'misha'
//console.log(localStorage.name);
//if(localStorage.number){
//    alert(Number(localStorage.number) + 10)
//} else(
 //   localStorage.number = prompt('Введите число')
//)


//const array =[{new:  'kinty'}, {gofl: 'dssw'}];
//let string = JSON.stringify(array);
//let massive = JSON.parse(string);
//console.log(string);
//console.log(massive)


//Задание 1

//1) 

//Задать объект с полем name. 

//Задать переменную, которая будет хранить JSON упомянутого объекта. 

//Задать переменную, которая будет хранить результат парсинга предыдущей переменной.



//2)

//Создать переменную user, в которой хранится объект. 

//Записать переменную в localStorage. 

//Создать переменную newUser, в которой будет храниться JS объект из localStorage.


let obj = {name: 'name'};
let string = JSON.stringify(obj);
let timeString = localStorage.string = string;
let parsedString = JSON.parse(timeString)
console.log(parsedString);

let user = obj;
localStorage.user = JSON.stringify(user);
let newUser = JSON.parse(localStorage.user)
console.log(localStorage.user)
console.log(newUser);


//Задание 2



//1) Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.



//- Добавить тег button в html код и повесить на него обработчик события click
//- В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
//- В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';



//2) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.

//Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.

//Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.