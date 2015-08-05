// ==UserScript==
// @name               Disney.com from abroad
// @namespace          http://maihamakyo.org/
// @description        add "intoverride=true" to URL
// @include            http://*disney.com/*
// @version            0.1
// ==/UserScript==
(function() {
    var p = location.protocol;
    var h = location.host;
    var t = location.pathname;
    var s = location.search;
    var a = location.hash;           
    if ( s.indexOf('intoverride') == -1) {
        if ( s.indexOf('?') == -1) { s = s + "?intoverride=true"; }else{ s = s + "&intoverride=true"; }
        var u = p + "//" + h +  t +  s + a;
        location.href = u;
    }
})();
