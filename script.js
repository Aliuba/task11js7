// - Создать произвольный елемент с id = text.

// let div = document.createElement("div")
// div.style.backgroundColor = "pink"
// div.style.width = "400px"
// div.style.height = "200px"
// div.setAttribute("id", "text")
// document.body.appendChild(div)

// //   Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// // Створюю кнопку
// let button = document.createElement("button")
// button.style.backgroundColor = "green"
// button.innerText = "Click me"
// document.body.appendChild(button)

// // сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// button.onclick = () => { div.style.display = "none" }


// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button1 = document.createElement("button")
// button1.style.backgroundColor = "Tomato"
// button1.innerText = "Hide me"
// document.body.appendChild(button1)
// button1.onclick = () => { button1.style.display = "none" }


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input')
// input.setAttribute("type", "text")
// input.setAttribute("value", "Введіть вік")
// document.body.appendChild(input)
// let button3 = document.createElement('button')
// button3.style.backgroundColor = 'GreenYellow'
// button3.innerText = "ok"
// document.body.appendChild(button3)
// button3.onclick = () => {
//     let age = +input.value
//     if (age < 18) {
//         alert(`Ваш вік ${age}. Це меньше, ніж 18, тому Ви не маєте доступу до цього сайту.`)
//     }
//     console.log(age)

// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = ["страва1", "страва2", "страва3"]
// let h2 = document.createElement("h2")
// document.body.appendChild(h2)
// h2.innerText = "Menu"
// let ul = document.createElement("ul")
// document.body.appendChild(ul)

// function addmenu() {
//     menu.forEach(element => {
//         let li = document.createElement('li');
//         li.innerText = element
//         console.log(element)
//         ul.appendChild(li);

//     });
// }
// addmenu();
// let titleSelector = document.querySelector("h2")
// titleSelector.onclick = () => {
//     if (ul.style.display !== "none") {
//         ul.style.display = "none"
//         return;
//     }
//     ul.style.display = "block"
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     { title: "title1", body: 'lorem ipsum dolo sit ameti' },
//     { title: "title2", body: 'lorem ipsum dolo sit ameti' },
//     { title: "title3", body: 'lorem ipsum dolo sit ameti' },
//     { title: "title4", body: 'lorem ipsum dolo sit ameti' },
//     { title: "title5", body: 'lorem ipsum dolo sit ameti' },
// ];


// function showComments() {

//     comments.forEach(comment => {
//         let div = document.createElement('div')
//         div.innerText = ` ${comment.title}: ${comment.body}`
//         document.body.appendChild(div)
//         div.style.backgroundColor = '#9df22d';
//         div.style.margin = '10px';
//         let button = document.createElement('button')
//         button.innerText = "hide/show";
//         button.style.display = 'block'
//         document.body.appendChild(button)
//         button.style.backgroundColor = "tomato"
//         button.style.margin = "10px"
//         button.onclick = () => {
//             if (div.style.display !== "none") {
//                 div.style.display = "none"
//                 return;
//             }
//             div.style.display = "block"
//         }
//     })
// }

// showComments();

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
//  виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// function createForm() {
//     let form = document.createElement("form")
//     document.body.appendChild(form)
//     let input1 = document.createElement("input")
//     form.appendChild(input1)
//     let input2 = document.createElement("input")
//     form.appendChild(input2)
//     form.style.margin = "30px"
//     return form;
// }

// let form1 = createForm();
// form1.setAttribute("id", "form1")
// let inputsForm1 = document.querySelectorAll('#form1 input');
// let form2 = createForm();
// form2.setAttribute("id", "form2")
// let button = document.createElement("button")
// button.innerText = "console_information"
// document.body.appendChild(button)
// let inputsForm2 = document.querySelectorAll('#form2 input');

// function inputAttr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].setAttribute("name", `name${i}`)
//         arr[i].setAttribute("value", `name${i}`)
//     }
// }

// inputAttr(inputsForm1);
// inputAttr(inputsForm2);

// button.onclick = () => {
//     let b = document.forms.form1.name0.value
//     console.log(`form1.input0:${b}`)
//     let a = document.forms.form1.name1.value
//     console.log(`form1.input1:${a}`)
//     let c = document.forms.form2.name0.value
//     console.log(`form2.input0:${c}`)
//     let d = document.forms.form2.name1.value
//     console.log(`form2.input1:${d}`)
// }


// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.


// function createTable( b, a, elem) {
//     let table = document.createElement("table")
//         // a кількість стовців
//         // b кількість рядків
//     for (let i = 0; i < b; i++) {
//         let tr = document.createElement("tr")
//         for (let j = 0; j < a; j++) {
//             if (i === 0) {
//                 let th = document.createElement("th")
//                 tr.appendChild(th)
//                 th.innerText = `head${i}.${j}`
//             } else {
//                 let td = document.createElement("td")
//                 table.appendChild(td)
//                 td.innerText = `data${i}.${j}`
//             }
//             table.appendChild(tr)
//         }
//     }
//     document.body.appendChild(table)
//     elem.appendChild(table)
// }

// let div = document.createElement("div")
// div.style.backgroundColor = "tomato"
// div.style.width = "500px"
// div.style.height = "180px"
// document.body.appendChild(div)

// let div2 = document.createElement("div")
// div2.style.backgroundColor = "black"
// div2.style.width = "500px"
// div2.style.height = "100px"
// document.body.appendChild(div2)

// createTable(6, 7, div)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, 
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, 
// з відповідним вмістом.
// (Додатковачастина для завдання)

// let input1 = document.createElement('input')
// input1.setAttribute("type", "text")
// input1.setAttribute("value", "Введіть кількість рядків")
// document.body.appendChild(input1)
// let input2 = document.createElement('input')
// input2.setAttribute("type", "text")
// input2.setAttribute("value", "Введіть кількість стовпців")
// document.body.appendChild(input2)
// let input3 = document.createElement('input')
// input3.setAttribute("type", "text")
// input3.setAttribute("value", "Введіть вміст")
// document.body.appendChild(input3)
// let button = document.createElement('button')
// button.style.backgroundColor = 'GreenYellow'
// button.innerText = "createTable"
// button.onclick = () => {
//     createTable2(+input1.value, +input2.value, input3.value)
// }
// document.body.appendChild(button)

// function createTable2(b, a, value) {
//     let table = document.createElement("table")
//         // a кількість стовців
//         // b кількість рядків
//     for (let i = 0; i < b; i++) {
//         let tr = document.createElement("tr")
//         for (let j = 0; j < a; j++) {
//             if (i === 0) {
//                 let th = document.createElement("th")
//                 tr.appendChild(th)
//                 th.innerText = `head${i}.${j}:${value}`
//             } else {
//                 let td = document.createElement("td")
//                 table.appendChild(td)
//                 td.innerText = `data${i}.${j}::${value}`
//             }
//             table.appendChild(tr)
//         }
//     }
//     document.body.appendChild(table)

// }

// // - Напишите «Карусель» – ленту изображений, 
// // которую можно листать влево-вправо нажатием на стрелочки.

// ???Погано вийшло, яким методом робити...

// let img11 = document.createElement("img")
// img11.setAttribute("src", "img/1.jpeg")
// document.body.appendChild(img11)

// let img2 = document.createElement("img")
// img2.setAttribute("src", "img/2.jpeg")
// document.body.appendChild(img2)
// img2.style.display = "none"
// let img3 = document.createElement("img")
// img3.setAttribute("src", "img/3.jpeg")
// document.body.appendChild(img3)
// img3.style.display = "none"
// let img4 = document.createElement("img")
// img4.setAttribute("src", "img/4.jpeg")
// document.body.appendChild(img4)
// img4.style.display = "none"
// let img1 = document.createElement("img")
// img1.setAttribute("src", "img/1.jpeg")
// document.body.appendChild(img1)
// img1.style.display = "none"

// let buttonLeft = document.createElement('button')
// buttonLeft.style.backgroundColor = 'GreenYellow'
// buttonLeft.innerText = "Left"
// let buttonRight = document.createElement('button')
// buttonRight.style.backgroundColor = 'Tomato'
// buttonRight.innerText = "Right"
// document.body.appendChild(buttonRight)
// document.body.appendChild(buttonLeft)

// let a = [img2, img3, img4, img1]
// console.log(a)
// let i = 0;

// buttonRight.onclick = () => {
//     right();

// };

// function right() {
//     img11.style.display = "none"
//     if (i == 0) {
//         a[a.length - 1].style.display = "none";
//     }
//     if (a[i - 1]) {
//         a[i - 1].style.display = "none"
//     }
//     a[i].style.display = "block";
//     i++
//     if (i == a.length) {
//         i = a.length - 1

//     }
//     j = i;

// }
// buttonLeft.onclick = () => {
//     left();

// };
// j = a.length - 1

// function left() {
//     img11.style.display = "none"

//     if (j == a.length) {
//         a[a.length - 1].style.display = "none";
//     }
//     if (a[j]) {
//         a[j].style.display = "none"
//     }
//     a[j - 1].style.display = "block";
//     j--
//     if (j == 0) {
//         j = 1
//     }
//     i = j;

// }

// -Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let swearWords = ["Swear words AB", "Swear words B", "Swear word A", "Swear word a"];
// let input = document.createElement('input')
// input.setAttribute("type", "text")
// input.setAttribute("value", "Введіть слово")
// document.body.appendChild(input)

// let button = document.createElement('button')
// button.style.backgroundColor = 'GreenYellow'
// button.innerText = "ok"
// document.body.appendChild(button)
// button.onclick = () => {
//     let word = input.value;
//     swearWords.forEach(element => {
//         element = element.toLocaleLowerCase();
//         word = word.toLocaleLowerCase();
//         if (element === word) {
//             alert("check input")

//         }
//     })
// }


// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку

// let swearWords = ["Swear", "WWWords", "AB", "TUtt", "words", "B", "RRR", "A", "a"];
// let input = document.createElement('input')
// input.setAttribute("type", "text")
// input.setAttribute("value", "Введіть слово")
// document.body.appendChild(input)

// let button = document.createElement('button')
// button.style.backgroundColor = 'GreenYellow'
// button.innerText = "ok"
// document.body.appendChild(button)
// button.onclick = () => {
//     let word = input.value;
//     let words = word.split(" ")
//     console.log(words)
//     for (let i = 0; i < swearWords.length; i++) {
//         swearWords[i] = swearWords[i].toLowerCase();

//         for (let j = 0; j < words.length; j++) {
//             words[j] = words[j].toLowerCase();
//             if (words[j] === swearWords[i]) {
//                 console.log(words[j])
//                 console.log(swearWords[i])
//                 alert("It's so bad")
//                 i = swearWords.length - 1;
//                 break;
//             }
//         }

//     }
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает
//  сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// Цей скрипт у rules.html

// -- взять массив пользователей
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. 
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let form = document.createElement("form")
document.body.appendChild(form)
let input1 = document.createElement("input")
let input2 = document.createElement("input")
let input3 = document.createElement("input")
input1.type = "checkbox"
input2.type = "checkbox"
input3.type = "checkbox"

let input11 = document.createElement("input")
let input12 = document.createElement("input")
let input13 = document.createElement("input")
form.appendChild(input11)
form.appendChild(input1)
form.appendChild(input12)
form.appendChild(input2)
form.appendChild(input13)
form.appendChild(input3)
input11.type = "text"
input11.value = " со статусом false"
input12.type = "text"
input12.value = " старше 29 лет включительно"
input13.type = "text"
input13.value = "  у кого город киев"

let s = JSON.stringify(usersWithAddress);
let usersWithAddress1 = JSON.parse(s);
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
let usersFilterStatus = usersWithAddress1.filter(user => user.status === false);
console.log(usersFilterStatus);
// 2й - оставляет старше 29 лет включительно

let usersAge = usersWithAddress1.filter(user => user.age >= 29);
console.log(usersAge);

// 3й - оставляет тех у кого город киев
let usersCity = usersWithAddress1.filter(user => user.address.city === 'Kyiv');
console.log(usersCity);

function Filter(arr, top, left) {
    let div2 = document.createElement('div');
    div2.style.position = "absolute";
    div2.style.top = top;
    div2.style.left = left;
    arr.forEach(user => {
        const div = document.createElement('div');
        div.innerText = `name: ${user.name}; age: ${user.age}, status: ${user.status}, city: ${user.address.city}`;
        div.style.backgroundColor = 'tomato';
        div.style.margin = '10px';


        div2.appendChild(div)
    });
    document.body.appendChild(div2)


}
Filter(usersWithAddress, "30px", "600px")

let button = document.createElement("button")
document.body.appendChild(button)
button.innerText = "filter"
button.onclick = () => {
    if (input1.checked) {
        Filter(usersFilterStatus, "120px", "10px")
    }
    if (input2.checked) {
        Filter(usersAge, "300px", "100px")
    }
    if (input3.checked) {
        Filter(usersCity, "30px", "300px")
    }
}