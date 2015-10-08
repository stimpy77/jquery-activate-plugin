#jQuery Plugin Activate
###jon@jondavis.net
Activate a plugin that is normally activated in script using

####Before:
    `$('#ID_TO_SOMETHING').myPlugin()` 
    
on `document.ready` by instead using

####After:
    <div data-jquery-activate="myPlugin">
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
###Why?
Implementing the markup that defines an element that relies on a dependency shouldn't require its author to stop and look for some script file to update or to add a `<script>` tag. It should be enough to identify the plugin's activation function, if the plugin is really so simple to activate as `$(..).theplugin();`.
###To use:
    <div data-jquery-activate="myPlugin,myOtherPlugin">...</div>
    <script src="jquery.js"></script>
    <script src="myPlugin.js"></script>
    <script src="myOtherPlugin.js"></script>
    <script src="jquery-activate-plugin.js"></script>
