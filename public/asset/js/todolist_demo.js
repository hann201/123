import { TODO } from './class/TODO.js';
import { UID } from './class/UID.js';
// class 引入

let todoApp = document.querySelector('#todo-app');
let uidApp = document.querySelector('#uid-app');
let uid = UID.read();

// 執行UID class
if (uid) {
    todoApp.classList.add('active'); // classList增加class
    // TODO Application.
    let elInput = document.querySelector('#todo-in');
    let elAddBtn = document.querySelector('#todo-add-btn');
    let elItem = document.querySelector('#todo-item');
    let elChangeUid = document.querySelector('#change-uid-btn');
    let todo = new TODO(elItem, uid);

    const addTodo = () => {
        let value = elInput.value;
        if (!value) {
            elInput.focus();
            return; // void
        }

        // elInput.value = '';
        // elInput.focus();
        // 這是什麼

        todo.add(value);
        todo.render();
    }

    elAddBtn.addEventListener('click', (e) => {
        addTodo();
    })


    elInput.addEventListener('keyup', (e) => {
        if (e.key.toString().toUpperCase() == 'ENTER') {
            addTodo();
        }
    })

    elChangeUid.addEventListener('click', (e) => {
        e.preventDefault();
        UID.clear();
        location.reload();
    })
} else {
    uidApp.classList.add('active');

    let elUid = document.querySelector('#todo-uid');
    let elBtn = document.querySelector('#todo-uid-btn');
    elBtn.addEventListener('click', (e) => {
        let value = elUid.value;
        if (value) {
            UID.write(value);
            location.reload();
        }
    })
}

const doGet = () => {
    let request = new XMLHttpRequest()
    // XMLHttpRequest存取伺服器資料

    request.addEventListener('load', () => {
        console.log('loaded')
        console.log(request.responseText)
    })

    request.open('GET', 'https://book.niceinfos.com/frontend/api/?action=sleep')
    request.send()
    // 先傳送API，然後再讀取load
    console.log('doGet run.')
}

doGet();

const doFetch = () => {
    let api = 'https://book.niceinfos.com/frontend/api/?action=sleep'

    fetch(api)
        .then((response) => {
            return response.text()
            // return response.json()
        })
        .then((data) => {
            console.log(data)
        })

    console.log('doFetch run.')
}

// doFetch();
