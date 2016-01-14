
/**
 * Signup success - view
 * @class SignUpSuccessView
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/SignUpSuccessTemplate.html'
], function($, _, Backbone, SignUpSuccessTemplate){
    
    var SignUpSuccessView = Backbone.View.extend({
        el: $("#app"),
        initialize: function() {
            
        },
        events: {
            
        },
        render: function(){
            
            this.$el.html( SignUpSuccessTemplate );
            
        }
    });
    return SignUpSuccessView;
});