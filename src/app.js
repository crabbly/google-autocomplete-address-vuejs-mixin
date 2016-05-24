var Vue = require('vue');
var googleAutocomplete = require('../src/googleAutocomplete.js');

var demo = new Vue({
    el: '#demo',
    data: {
        myInstanceAddress: {
            address: null,
            city: null,
            state: null,
            zipcode: null,
            country: null
        },
        googleAutoCompleteInput: 'addressInput',
        url: null
    },
    ready: function() {
        //get input element where user will type/search addresses
    },
    methods: {
        updateAddress: function() {
            //assign required values to my instance property
            this.myInstanceAddress.address = this.googleAddress.street_number + ' ' + this.googleAddress.street_name;
            this.myInstanceAddress.city = this.googleAddress.city;
            this.myInstanceAddress.state = this.googleAddress.state;
            this.myInstanceAddress.zipcode = this.googleAddress.zipcode;
            this.myInstanceAddress.country = this.googleAddress.country;
        }
    },
    mixins: [googleAutocomplete]
});