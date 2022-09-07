const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    alwaysShowScrollbar: true,
    reloadOnContextChange: true
  });

  $(document).ready(function(){
    $(".nav .container .menu svg").click(function () {
      $(".menu .svgIcon").removeClass("hide");
      $(this).addClass("hide");
      $(".menuContainer").toggle();
    });
  });