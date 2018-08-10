new Vue({
    el: '#app',
    data: {
        event:{
            date: 'August 14th - 16th',
            title: 'Summer Festival!',
            sigUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            description: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [],
        appStyles: {
            marginTop: '5px',
        },
        eventCapacity: 5,
        enevtCapacityPercentage: 0
    },
    methods: {
        formSubmit(){
            if (this.newNameText.length > 0 && this.enevtCapacityPercentage < 1){
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.enevtCapacityPercentage = this.guestName.length/ (this.eventCapacity)
            }
        }
    },
    computed: {
        sortNames(){
            return this.guestName.sort()
        }
    },
    filters: {
        formatName(value){
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }
    // watch: {
    //     guestName (data){
    //         console.log('object');
    //     }
    // }
})