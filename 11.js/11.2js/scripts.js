//Задание 2



//1) Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.



//- Добавить тег button в html код и повесить на него обработчик события click
//- В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
//- В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';



//2) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.

//Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.

//Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.



let mainButton = document.querySelector('button.main');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let form = document.querySelector('form');
let tasks = [];

if(localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks);
    console.log(tasks)
}

for(element of tasks){
    let li = document.createElement('li');
    let crossButton = document.createElement('button');
    crossButton.classList.add('cross');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.innerText = element;
    li.prepend(checkbox);
    li.appendChild(crossButton);
    ul.append(li);
    crossButton.addEventListener('click', ()=>{
        li.remove();
    })
    checkbox.addEventListener('click', ()=>{
        if(checkbox.checked){
            li.style.textDecoration = 'line-through';
            ul.append(li)
        } else{
            li.style.textDecoration = 'none';
            ul.prepend(li);
        }
    })
}

let markButton = document.querySelector('button.allmark')
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let li = document.createElement('li');
    let crossButton = document.createElement('button');
    crossButton.classList.add('cross');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.innerText = input.value;
    tasks.push(input.value);
    localStorage.tasks = JSON.stringify(tasks);
    li.prepend(checkbox);
    li.appendChild(crossButton);
    ul.appendChild(li);
    input.value = '';
    crossButton.addEventListener('click', ()=>{
        li.remove();
    })
    checkbox.addEventListener('click', ()=>{
        if(checkbox.checked){
            li.style.textDecoration = 'line-through';
            ul.append(li)
        } else{
            li.style.textDecoration = 'none';
            ul.prepend(li);
        }
    })
});

markButton.addEventListener('click', ()=>{
    let liArray = document.querySelectorAll('li');
    //liArray.forEach((element)=>{
    //    element.style.textDecoration = 'line-through'
    //})
    for(let li of liArray){
        if(li.style.textDecoration === 'line-through'){
            li.style.textDecoration = 'none';
        } else{
            li.style.textDecoration = 'line-through';
        }
    }
})