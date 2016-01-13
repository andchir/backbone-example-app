
/**
 * Signup personal data - view
 * @class SignUpPersonalDataView
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'text!templates/SignUpPersonalDataTemplate.html'
], function($, _, Backbone, UserModel, SignUpPersonalDataTemplate){
    
    var SignUpPersonalDataView = Backbone.View.extend({
        el: $("#app"),
        initialize: function() {
            this.model = new UserModel();
            Backbone.Validation.bind(this);
        },
        events: {
            'click #submitForm': 'submitForm'
        },
        render: function(){
            
            this.$el.html( SignUpPersonalDataTemplate );
            
            this.$('[name="firstName"]').val(this.model.get('firstName'));
            this.$('[name="lastName"]').val(this.model.get('lastName'));
            this.$('[name="dob"]').val(this.model.get('dob'));
            
        },
        submitForm: function(e){
            e.preventDefault();
            
            var data = this.$('form').serializeObject();
            this.model.set(data);
            
            if( this.model.isValid( true ) ){
                localStorage.setItem('userData', JSON.stringify(data));
                window.location.hash = '/step2';
            }
        }
    });
    return SignUpPersonalDataView;
});

