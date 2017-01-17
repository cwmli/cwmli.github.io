$(document).ready(function(){
  $(".top").fadeOut();
  $(window).scroll(function(){
    var scrollY = $(window).scrollTop();
    console.log(scrollY);
    if(scrollY == 0){
      $("#bar").fadeIn();
      $(".top").fadeOut();
    } else {
      $("#bar").fadeOut();
      $(".top").fadeIn();
    }
  });

  $(".top").click(function(){
    $("html, body").animate({
         scrollTop: 0
     }, 500);
  });
})
