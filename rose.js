$("document").ready(function() {

  /* SET COVER IMAGES */
  $(".cover-image").each(function() {
    $(this).css("background", "url(" + $(this).data("src") + ")");
    $(this).css("background-repeat", "no-repeat");
    $(this).css("background-size", "cover");
    $(this).css("background-position", "center");
  });

  /* SET SMALL COVER IMAGES */
  $(".cover-image-small").each(function() {
    $(this).css("background", "url(" + $(this).data("src") + ")");
    $(this).css("background-repeat", "no-repeat");
    $(this).css("background-size", "cover");
    $(this).css("background-position", "center");
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

  /* SET MOBILE NAVIGATION */
  if ($(window).width() < 990) {
    var offset = $("nav").height();
    $(".nav-links").css("top", offset);
    $(".nav-links").hide();
    $(".nav-links").addClass("xs-padding-top_lg");
    $(".nav-links").addClass("sm-no-padding");
    $(".nav-links").children().show();
    $("#mobile-navigation").click(function() {
      $(".nav-links").toggle(300);
    });
  }



});
