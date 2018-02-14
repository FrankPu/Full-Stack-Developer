import $ from 'jquery';
import './asset/1.css';

$(function (){
  $('.box').click(function (){
    //$('.box').css('background', 'red');
    $('.box').addClass('active');
  });
});
