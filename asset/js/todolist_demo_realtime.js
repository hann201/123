import { TodoRealtime } from './class/TodoRealtime.js';
import { UID } from './class/UID.js';
import { App } from './firebase/App.js'
import { Auth } from './firebase/Auth.js'

const app = await App.init()
const auth = new Auth(app)
let user = await auth.register('1@gmail.com', '12345678')


let todoApp = document.querySelector('#todo-app');
let uidApp = document.querySelector('#uid-app');
let uid = UID.read();

if (uid) {
    todoApp.classList.add('active');
    // TODO Application.
    let elInput = document.querySelector('#todo-in');
    let elAddBtn = document.querySelector('#todo-add-btn');
    let elItem = document.querySelector('#todo-item');
    let elChangeUid = document.querySelector('#change-uid-btn');
    let todo = new TodoRealtime(elItem, uid);

    const addTodo = () => {
        let value = elInput.value;
        if (!value) {
            elInput.focus();
            return; // void
        }

        elInput.value = '';
        elInput.focus();

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


    let elCurentUid = document.querySelector('#current-uid');
    elCurentUid.innerHTML = uid
} else {
    uidApp.classList.add('active');

    let elUid = document.querySelector('#todo-uid');
    let elBtn = document.querySelector('#todo-uid-btn');
    elBtn.addEventListener('keyup', (e) => {
        let value = elUid.value;
        if (value) {
            UID.write(value);
            location.reload();
        }
    })
}