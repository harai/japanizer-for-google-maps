// ==UserScript==
// @name        Mapsだけは日本語で！ for Google Maps™
// @namespace   https://github.com/harai/
// @include     https://www.google.co.jp/maps*
// @include     http://www.google.co.jp/maps*
// @include     https://www.google.com/maps*
// @include     http://www.google.com/maps*
// @include     https://maps.google.co.jp/*
// @include     http://maps.google.co.jp/*
// @include     https://maps.google.com/*
// @include     http://maps.google.com/*
// @version     1.0
// @run-at      document-end
// ==/UserScript==

if (window.top != window.self)
    return;

var q = location.search;
if (q.indexOf("?hl=") != -1 || q.indexOf("&hl=") != -1) {
    return;
}

var search = (q.length == 0) ? "?hl=ja" : (q + "&hl=ja");
var href = "https://" + location.host + location.pathname + search + location.hash;
var s = document.createElement("script");
s.type = "text/javascript";
// no need to escape href to avoid XSS
s.textContent = 'window.location = "' + href + '";';
document.body.appendChild(s);
