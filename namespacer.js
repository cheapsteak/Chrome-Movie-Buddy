var namespace = (function () {
    //note that this does not handle ANY edge cases, not even *.co.uk
    var parts = window.location.hostname.split('.');
    return parts[parts.length - 2];
}());

document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
    document.body.className = document.body.className ? ' ' + namespace : namespace;
}, false );