import $ from 'jquery';
//import './asset/1.css';
import a from './asset/a.png'

$(function (){
  $('.box').click(function (){
    //$('.box').css('background', 'red');
    //$('.box').addClass('active');

    $('.box').css({
      width: '360px',
      height: '360px',
      background: `url(/static/${a})`
    });
  });
});
