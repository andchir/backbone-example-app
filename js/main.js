
/**
 * Application initialize
 *
 */
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        underscore: '../bower_components/underscore/underscore-min',
        backbone: '../bower_components/backbone/backbone',
        backbone_validation: '../bower_components/backbone.validation/dist/backbone-validation-amd-min',
        iban: '../bower_components/iban/iban',
        text: '../bower_components/requirejs-text/text',
        templates: '../templates'
    }
});

require([
    'app',
], function(App){
    
    //serializeObject jQuery plugin
    jQuery.fn.serializeObject = function () {
        "use strict";
        var a = {}, b = function (b, c) {
            var d = a[c.name];
            "undefined" != typeof d
                && d !== null
                    ? $.isArray(d)
                    ? d.push(c.value)
                    : a[c.name] = [d, c.value]
                    : a[c.name] = c.value;
        };
        return $.each(this.serializeArray(), b), a;
    };
    
    App.initialize();
    
});
