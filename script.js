// Smooth Scrolling Navigation
// Select all links with hashes
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function(event) {
    // On-page links
    if (
      location.pathname.replace(/\#$/, '') == this.pathname.replace(/\#$/, '') &&
      location.hostname == this.hostname
    ) {
      // Locate the target
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a target exist?
      if (target.length) {
        // Prevent default behavior
        event.preventDefault();
        // Animate the scroll to the target
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Update the URL hash without jumping
          history.pushState(null, null, target.selector);
        });
      }
    }
  });

// Mobile Menu Toggle
$(document).ready(function() {
  $('.menu-toggle').on('click', function() {
    $('.mobile-menu').toggleClass('active');
  });
});

// Basic Interactions
$(document).ready(function() {
  $('.button').on('click', function() {
    alert('Button clicked!');
  });
});
