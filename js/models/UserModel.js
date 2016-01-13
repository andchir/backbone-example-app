
/**
 * User model
 * @class UserModel
 */
define([
    'underscore',
    'backbone',
], function(_, Backbone) {

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
        
        validation: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            dob: {
                fn: 'checkDateOfBirth',
                msg: 'Please enter a valid Date of Birth. Example: 12.03.1990.'
            }/*,
            iban: {
                pattern: 'digits'
            },
            bic: {
                pattern: 'digits'
            }*/
        },
        
        /** Validate Date of Birth */
        checkDateOfBirth: function(value, attr, computedState){
            var isValid = false;
            var match = value.match(/\d{2}\.\d{2}\.(\d{4})/);
            if ( match ) {
                var dt = new Date();
                if ( parseInt( match[1], 10 ) < dt.getFullYear() ) {
                    isValid = true;
                }
            }
            return !isValid ? 'Please enter a valid Date of Birth. Example: 12.03.1990' : null;
        },
        
        initialize: function( options ) {
            
            var userData = localStorage.getItem('userData');
            if ( userData ) {
                userData = JSON.parse(userData);
                this.set( userData );
            }
            
        },
        
        url : function() {
            return '/api/users/';
        },
        
        parse : function(res) { 
            return res.data;
        }
        
    });

    return UserModel;

});