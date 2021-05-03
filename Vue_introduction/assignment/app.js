Vue.component('app-hobby', {
    props: ['hobby'],
    template: '<li v-on:click="rmvehobby">{{ hobby }}</li>',
    methods: {
        rmvehobby(){
            this.$emit('removehoby', this.hobby);
        }
    }
});


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
            this.deleted = false

        },
        removeHobby(hobby){
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position,1);
            this.deleted = true
        }
    }
});