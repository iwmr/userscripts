// ==UserScript==
// @name               [disney.com] from abroad
// @namespace          http://maihamakyo.org/
// @description        redirect URL with "intoverride=true"
// @include            http://*disney.com/*
// @version            0.1
// ==/UserScript==

(function() {
    var url_protocol = location.protocol;
    var url_host = location.host;
    var url_pathname  = location.pathname ;
    var url_parameter = location.search;
    var url_hash = location.hash;           
    if ( url_parameter.indexOf('intoverride') == -1) {
        if ( url_parameter.indexOf('?') == -1) {
            url_parameter = url_parameter + "?intoverride=true";
        }else{
            url_parameter = url_parameter + "&intoverride=true";
        }
        var new_url = url_protocol + "//" + url_host +  url_pathname +  url_parameter + url_hash;
        location.href = new_url;
    }
})();
