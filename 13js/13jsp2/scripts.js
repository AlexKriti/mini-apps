let body = document.querySelector('body');
const divCur = document.querySelector('div.current');
const divFor = document.querySelector('div.forecast');
divFor.style.display = 'flex';
divFor.style.flexDirection = 'column';
divFor.style.margin = '10px 0 0 0'


function renderMain(town, time, img, event, temp, speed){
    let pTown = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let tempP = document.createElement('p');
    tempP.innerText = temp + ' °C';
    let eventP = document.createElement('p');
    eventP.innerText = event;
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    pTown.style.maxWidth = '95%';
    pTown.style.margin = 'auto';
    div2.style.maxWidth = '90%';
    div2.style.margin = 'auto';
    div2.style.justifyContent = 'space-between';
    div.style.display = 'flex';
    div2.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center'
    divCur.style.color = 'white';
    divCur.style.backgroundColor = 'rgb(100, 149, 255)';
    p1.innerText = `${town}`;
    p2.innerText = `${time}`;
    pTown.appendChild(p1);
    pTown.appendChild(p2);
    p3.innerText = `Speed`;
    p4.innerText = `${speed} m/s`;
    div2.appendChild(p3);
    div2.appendChild(p4);
    divCur.appendChild(pTown);
    div.appendChild(img);
    div.appendChild(eventP);
    div.appendChild(tempP);
    divCur.appendChild(div);
    divCur.appendChild(div2)

}

function createForecastDiv(date, time, imgcode, temperature){
    let div = document.createElement('div');
    div.style.display = 'flex';
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p13 = document.createElement('p');
    let p12 = document.createElement('p');
    let p31 = document.createElement('p');
    let img = document.createElement(`img`);
    img.style.backgroundColor = 'rgb(100, 149, 255)';
    img.style.margin = '0 250px'
    img.setAttribute('src',`https://openweathermap.org/img/wn/${imgcode}@2x.png`);
    p31.innerText = temperature + ' °C';
    p12.innerText = date;
    p13.innerText = time;
    p1.appendChild(p12);
    p1.appendChild(p13);
    p2.appendChild(img);
    p3.appendChild(p31);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    divFor.appendChild(div)
}






let httpRequest = new XMLHttpRequest();


httpRequest.onload = function() { 
var now = new Date().toLocaleTimeString().slice(0,-3);
let obj = JSON.parse(httpRequest.responseText);
let list = obj.list;
let item = list[1];
let cityInf = obj.city;
let town = cityInf.name;
let event = item.weather[0].main;
console.log(event);
console.log(item.weather[0].icon);
let img = document.createElement(`img`);
img.setAttribute('src',`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`);
let temperature = item.main.temp;
let speed = item.wind.speed;
// console.log(temperature)
renderMain(town, now, img, event, temperature, speed);
for(let i = 1; i<list.length; i = i + 8){
    let item = list[i];
    let timeArr = item.dt_txt.split(' ');
    let time = timeArr[1];
    let date = timeArr[0];
    let imgcode = item.weather[0].icon;
    let temp = Math.round(+item.main.temp);
    createForecastDiv(date, time, imgcode, temp)
}





// httpRequest2.open('GET', `https://openweathermap.org/img/wn/${item.weather.icon}@2x.png`);





};

httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric');

httpRequest.send();