$(document).ready(function(){
    $('.main-menu .menu__item .item__link').click(function(){
      $('.menu__item .item__link').removeClass("active");
      $(this).addClass("active");
  });
});