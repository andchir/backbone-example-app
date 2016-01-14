
/**
 * User model
 * @class UserModel
 */
define([
    'underscore',
    'backbone',
    'iban'
], function(_, Backbone, IBAN) {

    var UserModel = Backbone.Model.extend({
        
        defaults : function(){
            return {
                firstName: '',
                lastName: '',
                dob: '',
                iban: '',
                bic: ''
            }
        },
        
        /**
         * Validate Date of Birth
         * @param {String} value
         * @param {String} attr
         * @param {Object} computedState
         */
        validateDateOfBirth: function(value, attr, computedState){
            var isValid = false;
            var match = value.match( /^(\d{2})\.(\d{2})\.(\d{4})$/ );
            if ( match ) {
                var dt = new Date();
                isValid = true;
                if ( parseInt( match[1], 10 ) > 31 ) {
                    isValid = false;
                }
                if ( isValid && parseInt( match[2], 10 ) > 12 ) {
                    isValid = false;
                }
                if ( isValid && parseInt( match[3], 10 ) > dt.getFullYear() ) {
                    isValid = false;
                }
            }
            return !isValid ? 'Please enter a valid Date of Birth. Example: 12.03.1990' : null;
        },
        
        /**
         * Validate IBAN number
         * @param {String} value
         * @param {String} attr
         * @param {Object} computedState
         */
        validateIban: function(value, attr, computedState){
            
            var isValid = IBAN.isValid( value );
            
            return !isValid ? 'Invalid IBAN. Example: GB29 NWBK 6016 1331 9268 19' : null;
            
        },
        
        /**
         * Validate BIC
         * @param {String} value
         * @param {String} attr
         * @param {Object} computedState
         */
        validateBic: function(value, attr, computedState){
            
            var regexp = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})$/;
            var isValid = regexp.test( value );
            
            return !isValid ? 'Invalid BIC. Example: UBSWUS33CHI' : null;
            
        },
        
        initialize: function( options ) {
            
            this.getLocalStorage();
            
        },
        
        //labels fot validation messages
        labels: {
            firstName: 'First name',
            lastName: 'Last name',
            dob: 'Date of Birth',
            iban: 'IBAN',
            bic: 'BIC'
        },
        
        /** Get data from local storage */
        getLocalStorage: function(){
            
            var userData = localStorage.getItem('userData');
            if ( userData ) {
                userData = JSON.parse(userData);
                this.set( userData );
            }
            
        },
        
        url : function() {
            return 'api/users/';
        },
        
        parse : function(res) { 
            return res.data;
        }
        
    });

    return UserModel;

});