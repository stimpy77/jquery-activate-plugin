// jQuery Plugin Activate
// jon@jondavis.net
// Activate a plugin that is normally activated in script using "$('#ID_TO_SOMETHING').myPlugin()"
// on document ready by instead using <div id="ID_TO_SOMETHING" data-jquery-activate="myPlugin">
//                                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
$(function() {
	$('*[data-jquery-activate]').each(function() {
		$(this)[$(this).data('jquery-activate')]();
	});
});