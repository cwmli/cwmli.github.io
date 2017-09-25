$(document).ready(function(){
  $(".card").show(1500);

  $("div[class*=card]").mouseover(function(){
    console.log("yest");
    $(this).find("div").toggleClass("hide");
  })
  
  $("div[class*=card]").mouseleave(function(){
    $(this).find("div").toggleClass("hide");
  });
})
