/* global $ *//* jslint browser:true */

$(document).ready(function() {
    'use strict';

    $('.button-expand').click(function(e) {
        e.preventDefault();
        var container = $(this).parents('.post');
        var slider = container.find('.toggle-slider');
        if (slider.is('.toggle-slider--hidden')) {
            $(this).addClass('button-expand--open');
            slider.removeClass('toggle-slider--hidden');
        } else {
            $(this).removeClass('button-expand--open');
            slider.addClass('toggle-slider--hidden');
        }
    });
});
