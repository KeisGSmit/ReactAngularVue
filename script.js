let inputEl = $('input');
let buttonEl = $('button');
let ulEl = $('ul');

let todos = [];

buttonEl.click(addToDo);

function addToDo(){
    let userInput = inputEl.val();

    if(userInput.trim() == ''){
        return;
    }

    let newTodo = {id: Math.random(), value: userInput};

    todos.push(newTodo);

    $('<li>'+ userInput +'</li>')
        .appendTo(ulEl)
        .attr('dataset-id', newTodo.id)
        .click(removeToDo);
    console.log(todos);
};

function removeToDo(event){
    var clickedLi = $(this);
    var itemId = clickedLi.attr('dataset-id');

    for(let i = 0; i<todos.length; i++){
        if(todos[i].id == itemId){
            todos.splice(i,1);
            break;
        }
    }

    clickedLi.remove();
    console.log(todos);
};