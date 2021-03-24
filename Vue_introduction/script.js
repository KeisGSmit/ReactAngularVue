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
        }
    }
});