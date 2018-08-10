new Vue({
    el: '#app',
    data: {
        event: {
            date: 'August 14th - 16th',
            title: 'Summer Festival!',
            sigUpText: 'Add your name to the guest list for <em>exclusive</em> offers:',
            description: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [],
        eventCapacity: 5,
        enevtCapacityPercentage: 0
    },
    methods: {
        formSubmit() {
            if (this.newNameText.length > 0 && this.enevtCapacityPercentage < 1) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                this.enevtCapacityPercentage = this.guestName.length / (this.eventCapacity)
            }
        }
    },
    computed: {
        sortNames() {
            return this.guestName.sort()
        }
    },
    filters: {
        formatName(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }
    // watch: {
    //     guestName (data){
    //         console.log('object');
    //     }
    // }
});

new Vue({
    el: '#navigation',
    data: {
        appName: 'Guest List',
        navLinks: [
            {
                name: 'Home',
                id: 1,
                url: 'https://google.com'
            },
            {
                name: 'Upcoming Events',
                id: 2,
                url: 'https://amazon.com'
            },
            {
                name: 'Guest Benefits',
                id: 3,
                url: 'https://ebay.com'
            },
            {
                name: 'Latest News',
                id: 4,
                url: 'https://facebook.com'
            },
        ]
    }

});