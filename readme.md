#jQuery Activate Plugin
###jon@jondavis.net
Activate a plugin that is normally activated in script using

####Before:
    <div id="#ID_TO_SOMETHING">...</div>
    <script>
        $('#ID_TO_SOMETHING').myPlugin();
    </script>
    
on `document.ready` by instead using

####After:
    <div data-jquery-activate="myPlugin">
    
###Why?
Implementing the markup that defines an element that relies on a dependency shouldn't require its author to stop and look for some script file to update or to add a `<script>` tag. It should be enough to identify the plugin's activation function, if the plugin is really so simple to activate as `$(..).theplugin();`.
###To use:
Just add the script after jQuery and add the attribute `data-jquery-activate="plugin_name"` where `plugin_name` is a comma-delimited list of all plug-ins that are activated by calling `$('#identifier').plugin_name()`.

    <div data-jquery-activate="myPlugin,myOtherPlugin">...</div>
    <script src="jquery.js"></script>
    <script src="myPlugin.js"></script>
    <script src="myOtherPlugin.js"></script>
    <script src="jquery-activate-plugin.js"></script>
