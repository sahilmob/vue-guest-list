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
            marginTop: '25px',
        },
        eventCapacity: 25,
        enevtCapacityPercentage: 0
    },
    methods: {
        formSubmit(){
            if (this.newNameText.length > 0){
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.enevtCapacityPercentage = this.guestName.length/ (this.eventCapacity)
            }
        }
    }
})