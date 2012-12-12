// ==UserScript==
// @name        memetaa
// @namespace   https://github.com/gardentree
// @include     http://*
// @include     https://*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant       none
// ==/UserScript==

if (window != parent) {
  return;
}

container = $("<div style='position:fixed;left:0;bottom:0;width:100%;z-index:10000;padding:3px;background-color:black;color:white;font-size:9px;' />");
container.append($('<div/>').append($("meta[name=keywords],meta[name=KEYWORDS]").attr('content')));
container.append($('<div/>').append($("meta[name=description],meta[name=DESCRIPTION]").attr('content')));

if (container.text().length <= 0) {
  return;
}

container.appendTo('body');
