
/**
 * Application
 * 
 */
define([
    'jquery', 
    'underscore', 
    'backbone',
    'router',
    'backbone_validation'
], function($, _, Backbone, Router){
    
    var initialize = function(){
        
        //Configute validation
        _.extend(Backbone.Validation.callbacks, {
            valid: function (view, attr, selector) {
                var $el = view.$('[name=' + attr + ']'), 
                    $group = $el.closest('.form-group');
                $group
                    .removeClass('has-error')
                    .find('.help-block').empty().addClass('hidden');
            },
            invalid: function (view, attr, error, selector) {
                var $el = view.$('[name=' + attr + ']'), 
                    $group = $el.closest('.form-group');
                $group
                    .addClass('has-error')
                    .find('.help-block').html(error).removeClass('hidden');
            }
        });
        
        Router.initialize();
        
    };
    
    return { 
        initialize: initialize
    };
});
