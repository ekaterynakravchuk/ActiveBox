$(function() {

  // fixed header
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

      if(scrollPos > introH) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
  });

  // smooth scroll

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate({
      scrollTop: elementOffset - 70
    }, 700);

    $('.nav__list').removeClass('open');
  });

  // mobile menu

  $('.burger-btn').on('click', function(event) {
    event.preventDefault();
    $('.nav__list').toggleClass('open');
  });

  // slider

  $('.reviews__slider').slick({
    arrows: false,
    dots: true, 
    fade: true,
    autoplay: true
  });
})