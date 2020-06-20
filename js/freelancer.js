(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  $(document).ready(function(){
        $("#popup").modal('show');
        $('.modal-backdrop').remove();
    });

  // below listed default settings
  // AOS.init({
  //   // Global settings:
  //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //   initClassName: 'aos-init', // class applied after initialization
  //   animatedClassName: 'aos-animate', // class applied on animation
  //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //   offset: 0, // offset (in px) from the original trigger point
  //   delay: 100, // values from 0 to 3000, with step 50ms
  //   duration: 1000, // values from 0 to 3000, with step 50ms
  //   easing: 'ease-in-sine', // default easing for AOS animations
  //   once: true, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  //   anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
  // });

})(jQuery); // End of use strict
