
/**
 * Signup bank accounts - view
 * @class SignUpBankAccountsView
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'text!templates/SignUpBankAccountsTemplate.html'
], function($, _, Backbone, UserModel, SignUpBankAccountsViewTemplate){
    
    var SignUpBankAccountsView = Backbone.View.extend({
        el: $("#app"),
        initialize: function() {
            
            UserModel.prototype.validation = {
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                dob: {
                    fn: 'validateDateOfBirth'
                },
                iban: {
                    fn: 'validateIban'
                },
                bic: {
                    fn: 'validateBic'
                }
            };
            
            this.model = new UserModel();
            
            Backbone.Validation.bind(this);
            
        },
        events: {
            'click #submitForm': 'submitForm'
        },
        render: function(){
            
            this.$el.html( SignUpBankAccountsViewTemplate );
            
            this.$('[name="iban"]').val(this.model.get('iban'));
            this.$('[name="bic"]').val(this.model.get('bic'));
            
        },
        submitForm: function(e){
            e.preventDefault();
            
            var data = this.$('form').serializeObject();
            this.model.set(data);
            
            if( this.model.isValid( true ) ){
                localStorage.setItem('userData', JSON.stringify(this.model.toJSON()));
                this.model.save({}, {
                    success: function(model, response, options){
                        window.location.hash = '/success';
                    },
                    error: function(model, response, options){
                        console.error( response, options );
                    }
                });
            }
        }
    });
    return SignUpBankAccountsView;
});