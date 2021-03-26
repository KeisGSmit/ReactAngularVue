Vue.component('app-username', {
    props: ['username'],
    data: function(){
        return{
            // username: 'Vanilla'
        }
    },
    template: '<p @click="usernameclicked">{{ username }}</p>',
    methods:{
        usernameclicked(){
            this.$emit('petros', this.username)
        }
    }    
});

new Vue({
    el: '#app',
    data: {
        name: 'Keis',
        elements: []
    },
    methods: {
        nameChange: function(){
            this.name = 'Anna';
        },
        addElement: function(){
            this.elements.push(this.elements.length + 1);
        },
        getColor: function(number){
            return number % 2 == 0 ? 'green' : 'red';
        },
        userwasclicked(name){
            alert(name);
        }
    }
});
new Vue({
    el:'#app2',
    data: {
        message: "Hey it's me"
    },
});