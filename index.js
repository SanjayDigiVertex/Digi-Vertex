$(document).ready(function () {
  const owl = $(".owl-carousel").owlCarousel({
    margin: 10,
    center: true,
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });
  owl.trigger("next.owl.carousel");
});

setTimeout(function(){
  document.querySelector('.popup').style.display = 'flex';}, 2000);

const closePopupFormEl = document.getElementById('closePopupForm');
closePopupFormEl.addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'none';
})

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  alwaysShowScrollbar: true,
  reloadOnContextChange: true
});


setTimeout(() => {
  // console.log('udating loco')
  scroll.update()
}, 2000);

let animated = false;
let prominentAnimated = false;

document.querySelectorAll("#navBtn a").forEach((a) => {
  a.addEventListener("click", function () {
    scroll.scrollTo(this.dataset.target,{
      offset: -106
    });
  });
});

document.querySelectorAll(".menu .menuContent ul li a").forEach((a)=>{
  a.addEventListener('click',function(){
    $(".menuContainer").toggle();
    scroll.scrollTo(this.dataset.target,{
      offset: -80
    })
    $(".menu .svgIcon:last-of-type").addClass('hide');
    $(".menu .svgIcon:first-of-type").removeClass('hide');
  })
})

// menu btn
$(".nav .container .menu svg").click(function () {
  $(".menu .svgIcon").removeClass("hide");
  $(this).addClass("hide");
  $(".menuContainer").toggle();
});

scroll.on("scroll", function (args) {
  if (typeof args.currentElements["svgs"] === "object" && !animated) {
    new Vivus(
      "projectSvg",
      { type: "scenario-sync", duration: 30, start: "autostart" },
      () => {}
    );
    new Vivus("clientsSvg", { duration: 400, start: "autostart" }, () => {});
    new Vivus("winSvg", { duration: 980, start: "autostart" }, () => {});

    gsap.fromTo(
      ".project h2",
      {
        textContent: 0,
      },
      {
        textContent: 1250,
        duration: 2,
        onUpdate: function () {
          this.targets()[0].innerHTML = Math.ceil(
            this.targets()[0].textContent
          );
        },
      }
    );
    gsap.fromTo(
      ".clients h2",
      {
        textContent: 0,
      },
      {
        textContent: 540,
        duration: 2,
        onUpdate: function () {
          this.targets()[0].innerHTML = Math.ceil(
            this.targets()[0].textContent
          );
        },
      }
    );

    gsap.fromTo(
      ".win h2",
      {
        textContent: 0,
      },
      {
        textContent: 356,
        duration: 2,
        onUpdate: function () {
          this.targets()[0].innerHTML = Math.ceil(
            this.targets()[0].textContent
          );
        },
      }
    );
    animated = true;
  } else if (
    typeof args.currentElements["prominent"] === "object" &&
    !prominentAnimated
  ) {
    // console.log('animating...')
    //gsap animation......
    gsap.from("#prominent .container", {
      y: 200,
      duration: 1,
      delay: 0.7,
    });
    prominentAnimated = true;
  }
});


if (scroll.scroll.isMobile) {
  const servicesATags = document.querySelectorAll("#Services .boxContent > a");
  servicesATags.forEach(a=> a.setAttribute("data-scroll",''));
} else {
  const servicesRows = document.querySelectorAll("#Services .boxContent");
  servicesRows.forEach((row) => row.setAttribute("data-scroll",''));
}
scroll.update();

//   let bannerAnimated = false;

// const element = document.querySelector("#banner .bannerHead h1");
// const eleDigi = document.querySelector("#banner .bannerHead span");
// const tl = gsap.timeline();

// tl.from(element, {
//     duration: 1.7,
//     yPercent: 100,
//     ease: 'power4.out',
//     stagger: 0.1 })
// .to(element, {
//     duration: 1.2,
//     xPercent: -100,
//     ease: 'power4.out',
//     stagger: 0 }, '+=0')
// tl.from(eleDigi,{
//     duration: 1,
//     yPercent: -1000,
//     ease: 'power4.out',
//     stagger: 0.1
// })
//   bannerAnimated = true;
