
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
            this.model = new UserModel();
            Backbone.Validation.bind(this);
        },
        events: {
            'click #submitForm': 'submitForm'
        },
        render: function(){
            
            this.$el.html( SignUpBankAccountsViewTemplate );
            
        },
        submitForm: function(e){
            e.preventDefault();
            
            var data = this.$('form').serializeObject();
            this.model.set(data);
            
            console.log('submitForm', this.model.isValid( true ));
            
            if( this.model.isValid( true ) ){
                //new Backbone.Router().navigate('/registered');
            }
        }
    });
    return SignUpBankAccountsView;
});