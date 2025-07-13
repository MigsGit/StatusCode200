// Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
  
    // DOM Elements
    const typedText = document.getElementById('typed-text');
    
    // Initialize Typed.js
    if (typedText) {
        new Typed(typedText, {
        strings: ['Vue.js Enthusiast', 'Full Stack Developer', 'Problem Solver', 'Creative Coder'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
        });
    }
 