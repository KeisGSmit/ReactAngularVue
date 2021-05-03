new Vue({
    el: '#app',
    data: {
        hobbies: [
            'fencing',
            'coding',
            'cricket',
            'football'
        ],
        hobby: ''
    },
    methods: {
        addHobby(){
            if(this.hobby.trim() == ''){
                return
            }
            let addedHobby = this.hobby
            this.hobbies.push(addedHobby);
        },
        // removeHobby(){

        // }
    }
});