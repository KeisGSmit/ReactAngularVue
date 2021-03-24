new Vue({
    el: '#app',
    data: {
        todos:[],
        userInput: '',

    },
    methods: {
        addToDo: function(){
            if(this.userInput.trim() == ''){
                return;
            }
            let newTodo = {
                id: _.uniqueId(),
                value: this.userInput
            };
            this.todos.push(newTodo);
            console.log(this.todos)
        },
        removeToDo(todo){
            let id = todo.id;
            for(let i=0; i<this.todos.length;i++){
                if(this.todos[i].id == id){
                    this.todos.splice(i,1);
                    break
                }
            }
        }
    }

});
