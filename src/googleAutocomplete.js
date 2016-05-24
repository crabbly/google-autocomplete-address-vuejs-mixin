/*
 * Google Autocomplete for Addresses
 *
 */

module.exports = {
    data: function() {
        return {
            googleAddress: {
                street_number: null,
                street_name: null,
                city: null,
                state: null,
                zipcode: null,
                country: null,
                url: null,
                autocomplete: null
            }
        }
    },
    ready: function() {
        //get DOM input element where users will start typing addresses
        var inputElement = document.getElementById(this.googleAutoCompleteInput);

        //create new google maps object
        this.googleAddress.autocomplete = new google.maps.places.Autocomplete(inputElement,
            {types: ['geocode']});

        //add event listener to trigger method getAddressComponents when user select an address
        this.googleAddress.autocomplete.addListener('place_changed', this.getAddressComponents);
    },
    methods: {
        getAddressComponents: function() {
            // Get the place details from the autocomplete object.
            var place = this.googleAddress.autocomplete.getPlace();

            console.log(place);

            // Get each component of the address from the place details
            for (var i = 0; i < place.address_components.length; i++) {

                var addressType = place.address_components[i].types[0];

                switch (addressType) {
                    case 'street_number':
                        this.googleAddress.street_number = place.address_components[i]['short_name'];
                        break;
                    case 'route':
                        this.googleAddress.street_name = place.address_components[i]['short_name'];
                        break;
                    case 'locality':
                        this.googleAddress.city = place.address_components[i]['long_name'];
                        break;
                    case 'administrative_area_level_1':
                        this.googleAddress.state = place.address_components[i]['short_name'];
                        break;
                    case 'postal_code':
                        this.googleAddress.zipcode = place.address_components[i]['short_name'];
                        break;
                    case 'country':
                        this.googleAddress.country = place.address_components[i]['short_name'];
                        break;
                }
            }

            this.googleAddress.url = place.url;

            //call instance or component method. it will be used to update its addresses properties
            this.updateAddress();
        }
    }
}