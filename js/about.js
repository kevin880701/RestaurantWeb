$(".gotop").click(function(){
  jQuery("html,body").animate({
    scrollTop:0
  },1000);
});
$(window).scroll(function() {
  if ( $(this).scrollTop() > 300){
    $('.gotop').fadeIn("fast");
  } else {
    $('.gotop').stop().fadeOut("fast");
  }
});

$("#header").load("header.html");
$("#gotop").load("goTop.html");
$("#footer").load("footer.html");

