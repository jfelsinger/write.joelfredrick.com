!function n(i,t,r){function o(u,m){if(!t[u]){if(!i[u]){var f="function"==typeof require&&require;if(!m&&f)return f(u,!0);if(e)return e(u,!0);throw new Error("Cannot find module '"+u+"'")}var a=t[u]={exports:{}};i[u][0].call(a.exports,function(n){var t=i[u][1][n];return o(t?t:n)},a,a.exports,n,i,t,r)}return t[u].exports}for(var e="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(n,i,t){!function(n){n.fn.flowtype=function(i){var t=n.extend({maximum:9999,minimum:1,maxFont:9999,minFont:1,fontRatio:35,lineRatio:1.45},i),r=function(i){var r=n(i),o=r.width(),e=o>t.maximum?t.maximum:o<t.minimum?t.minimum:o,u=e/t.fontRatio,m=u>t.maxFont?t.maxFont:u<t.minFont?t.minFont:u;r.css({"font-size":m+"px","line-height":m*t.lineRatio+"px"})};return this.each(function(){var i=this;r(this),n(window).resize(function(){r(i)})})}}(jQuery)},{}]},{},[1]);