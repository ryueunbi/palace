$(function(){
  $('.hamburger-button').click(function(){
      $('nav').css("display","none");
      $('.nav-responsive').css("display","block");
  });
  $('.hamburger-close-button').click(function(){
      $('nav').css("display","block");
      $('.nav-responsive').css("display","none");
  });
  $('.menu-detail-responsive>li>a').click(function(){
    $('nav').css("display","block");
    $('.nav-responsive').css("display","none");
  });
});

