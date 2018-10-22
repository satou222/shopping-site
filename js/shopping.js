$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: false
  });

});
// ハンバーガー
$(document).ready(function() {
  $("#menu").click(function() {
    $(".sp_menu_toggle").slideToggle();
  });
});
// スライドショー
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});
