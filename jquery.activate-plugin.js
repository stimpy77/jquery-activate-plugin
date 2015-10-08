// jQuery Plugin Activate
// jon@jondavis.net
// Activate a plugin that is normally activated in script using "$('#ID_TO_SOMETHING').myPlugin()"
// on document ready by instead using <div data-jquery-activate="myPlugin">
//                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
$(function() {
    $('*[data-jquery-activate]').each(function() {
        var plugins = $(this).data('jquery-activate').split(',');
        var el = this;
        $(plugins).each(function() { 
            $(el)[this](); 
        });
    });
});