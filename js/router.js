
/**
 * Router
 *
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/SignUpPersonalDataView',
    'views/SignUpBankAccountsView',
    'views/SignUpSuccessView'
], function($, _, Backbone, SignUpPersonalDataView, SignUpBankAccountView, SignUpSuccessView) {
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define URL routes
            'step2': 'SignUpBankAccounts',
            'success': 'SignUpSuccess',
            
            // Default
            '*path': 'SignUpPersonalData'
        }
    });
    
    var initialize = function(){
        
        var app_router = new AppRouter;
        
        app_router.on('route:SignUpPersonalData', function (actions) {
            var signUpPersonalDataView = new SignUpPersonalDataView();
            signUpPersonalDataView.render();
        });
        
        app_router.on('route:SignUpBankAccounts', function (actions) {
            var signUpBankAccountView = new SignUpBankAccountView();
            signUpBankAccountView.render();
        });
        
        app_router.on('route:SignUpSuccess', function (actions) {
            var signUpSuccessView = new SignUpSuccessView();
            signUpSuccessView.render();
        });
        
        Backbone.history.start();
    };
    
    return {
        
        initialize: initialize
        
    };
});

