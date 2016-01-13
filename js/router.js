
/**
 * Router
 *
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/SignUpPersonalDataView',
    'views/SignUpBankAccountsView'
], function($, _, Backbone, SignUpPersonalDataView, SignUpBankAccountView) {
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define URL routes
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
        });
        
        app_router.on('route:SignUpBankAccounts', function (actions) {
            var signUpBankAccountView = new SignUpBankAccountView();
            signUpBankAccountView.render();
        });
        
        Backbone.history.start();
    };
    
    return {
        
        initialize: initialize
        
    };
});

