
new Vue({
    el: '#app',
    data: {
        hobbies: [
            'fencing',
            'coding',
            'cricket',
            'football'
        ],
        userHobby: '',
        deleted: false,

    },
    methods: {
        addHobby(){
            if(this.userHobby.trim() == ''){
                return
            }
            let addedHobby = this.userHobby
            this.hobbies.push(addedHobby);

        },
        removeHobby(hobby){
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position,1);
            this.deleted = true
        }
    }
});