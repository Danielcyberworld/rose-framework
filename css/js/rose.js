$("document").ready(function() {

  /* SET COVER IMAGES */
  $(".cover-image").each(function() {
    $(this).css("background", "url(" + $(this).data("src") + ")");
  });

  /* SET SMALL COVER IMAGES */
  $(".cover-image-small").each(function() {
    $(this).css("background", "url(" + $(this).data("src") + ")");
  });

  /* CHANGE NAVBAR ON SCROLL */
  $("nav").addClass("navbar-initial");

  /* REVEAL .reveal ON SCROLL */
  $(".reveal").each(function() {
    $(this).fadeOut();
  });
  var half = ($(window).height() / 2);
  $(window).scroll(function() {
    $(".reveal").each(function() {
      if (Math.round($(window).scrollTop() + $(window).height()) > ($(this).offset().top - half)) {
        $(this).delay(1000).fadeIn(700);
      }
    });

    /* NAVBAR CHANGE ON SCROLL */
    if (Math.round($(window).scrollTop()) > $("#top").offset().top) {
      $("nav").removeClass("navbar-initial");
    } else {
      $("nav").addClass("navbar-initial");
    }
  });

});
