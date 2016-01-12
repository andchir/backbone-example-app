
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/SignUpPersonalDataTemplate.html'
], function($, _, Backbone, SignUpPersonalDataTemplate){
    
    var SignUpPersonalDataView = Backbone.View.extend({
        el: $("#app"),
        events: {
            'click #submitForm': 'submitForm'
        },
        render: function(){
            
            this.$el.html( SignUpPersonalDataTemplate );
            
        },
        submitForm: function(e){
            e.preventDefault();
            console.log('submitForm',e);
        }
    });
    return SignUpPersonalDataView;
});

