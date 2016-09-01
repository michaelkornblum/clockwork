/*jshint esversion: 6*/
import $ from 'jquery';

$(document).ready(function () {
  $('.menu-link').on('click', function (e) {
    e.preventDefault();
    $('nav').toggleClass('open');
  });
});

//console.log('hello world!');
