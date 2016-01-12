
define([
  'jquery',
  'underscore',
  'backbone',
  'views/SignUpPersonalDataView'
], function($, _, Backbone, SignUpPersonalDataView) {
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'step2': 'SignUpBankAccounts',
            
            // Default
            '*path': 'SignUpPersonalData'
        }
    });
    
    var initialize = function(){
        
        var app_router = new AppRouter;
        
        app_router.on('route:SignUpPersonalData', function (actions) {
            
            var signUpPersonalDataView = new SignUpPersonalDataView();
            signUpPersonalDataView.render();
            
            console.log('route:SignUpPersonalData');
        });
        
        Backbone.history.start();
    };
    
    return {
        
        initialize: initialize
        
    };
});

