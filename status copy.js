
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Initialize ScrollMagic
    initScrollMagic();

  });
// GSAP Animations
  function initGSAPAnimations() {
    // Hero section animations
    gsap.from('.hero-content', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power2.out'
    });
  }
    function initScrollMagic() {
        const controller = new ScrollMagic.Controller();
        
        // Parallax effect for hero section
        new ScrollMagic.Scene({
        triggerElement: '.hero',
        triggerHook: 0,
        duration: '100%'
        })
        .setTween(gsap.to('.hero', {
        y: '-50%',
        ease: 'none'
        }))
        .addTo(controller);
    }