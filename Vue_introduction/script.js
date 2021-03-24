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
        }
    }
});