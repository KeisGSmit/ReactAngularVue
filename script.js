let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
let ulEl = document.querySelector('ul');

let todos = [];

buttonEl.addEventListener('click', addToDo)

function addToDo(){
    let userInput = inputEl.value;

    if(userInput.trim() == ''){
        return;
    }

    let newTodo = {id: Math.random(), value: userInput};

    todos.push(newTodo);

    let todoLi = document.createElement('LI');

    todoLi.textContent = userInput
    todoLi.addEventListener('click', removeToDo)
    todoLi.dataset.id = newTodo.id;
    ulEl.appendChild(todoLi)
    console.log(todos);
};

function removeToDo(event){
    var clickedLi = event.target;
    var itemId = clickedLi.dataset.id;

    for(let i = 0; i<todos.length; i++){
        if(todos[i].id == itemId){
            todos.splice(i,1);
            break;
        }
    }

    clickedLi.parentNode.removeChild(clickedLi);
    console.log(todos);
};