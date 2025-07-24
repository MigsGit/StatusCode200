// $(document).ready(function () {

// Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
    // Projects data
    const projects = [
        {
            id: 1,
            title: "4M Change Control Management",
            description: "A full-stack change control management system built with Laravel and Vue.js featuring approval with email integration, excel export and monitoring.",
            image: "content/analytics.jpg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "Vue.js","Pinia", "MySQL", "Apache"],
            category: "Full Stack",
            button: 'project1'
        },
        {
            id: 2,
            title: "Ticketing System",
            description: "A ticketing system is a software application used to manage and track customer support requests, service issues, or internal IT problems.",
            image: "content/ticketing.jpg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "Vue.js","Pinia", "MySQL", "Apache","Docker"],
            category: "Full Stack",
            button: 'project2'
        },
        {
            id: 3,
            title: "Product Automation Traceability System",
            description: "From Warehouse to Shipping uses technology to track a product's journey from the moment it enters the warehouse until it's shipped, providing real-time visibility and control over inventory.",
            image: "content/production.jpg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "JQuery", "AJAX", "MYSQL","Apache","QRCode"],
            category: "Full Stack",
            button: 'project3'
        },
        {
            id: 4,
            title: "IQC Inspection System",
            description: "A RESTful API for social media application with user management, post creation, real-time notifications, and content moderation.",
            image: "content/iqc.jpg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "JQuery", "AJAX", "MYSQL","Apache","QRCode"],
            category: "Full Stack",
            button: 'project4'
          
        },
        {
            id: 5,
            title: "Power English LMS",
            description: "An educational platform with course management, video streaming, progress tracking, and interactive assessments.",
            image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "Vue.js","Pinia", "MySQL", "AWS","Docker"],
            category: "Full Stack",
            button: 'project5'
        
        },
        {
            id: 6,
            title: "Machine Parameters System",
            description: "A machine parameter system describes the set of values that define the operating characteristics and behavior of a machine.",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "JQuery", "AJAX", "MYSQL","Apache","QRCode"],
            category: "Full Stack",
            button: 'project6'
        }
    ];
  
    // DOM Elements
    const typedText = document.getElementById('typed-text');
    const projectsGrid = document.getElementById('projectsGrid');
    const contactForm = document.getElementById('contactForm');
    
    // Initialize Typed.js
    if (typedText) {
        new Typed(typedText, {
        strings: ['Full Stack Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
        });
    }
    
  
  // Generate projects
  function generateProjects() {
  if (!projectsGrid) return;
    projectsGrid.innerHTML = projects.map((project, index) => `
      <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-category">${project.category}</div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="btn btn-primary btnViewProject" id="${project.button}"">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              View Project
            </button>
            <button class="btn btn-secondary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Code
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Attach click event to all .btnViewProject buttons after projects are generated
  function attachProjectButtonListeners() {
    const projectButtons = document.querySelectorAll('.btnViewProject');
    projectButtons.forEach(btn => {
      btn.addEventListener('click', function() {
          switch (this.id) {
            case 'project1':
              window.open('https://github.com/MigsGit/4MS', '_blank');
              break;
            case 'project2':
              window.open('https://github.com/MigsGit/VueTicketingSystem', '_blank');
              break;
            case 'project3':
              window.open('https://github.com/MigsGit/PATS-PPD', '_blank');
              break;
            case 'project4':
              window.open('https://github.com/MigsGit/IqcInspectionSystem', '_blank');
              break;
            case 'project5':
              window.open('https://github.com/MigsGit/PowerEnglishLMS', '_blank');
              break;
            case 'project6':
              window.open('https://github.com/MigsGit/PatsPpdMprs', '_blank');
              break;
            default:
              break;
          }
        return ;
      });
    });
  }

  // Contact form handling
  function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <div class="loading-spinner"></div>
      Sending...
    `;
    
    // Simulate form submission
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Show success message
      successMessage.classList.add('show');
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        Send Message
      `;
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 3000);
    }, 1000);
  }

  // GSAP Animations
  function initGSAPAnimations() {
    
    // Contact form animation
    gsap.from('.contact-form-container', { /* === */
      duration: 0.8,
      x: 50,
      // opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-form-container',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
    
    // Contact info animation
    gsap.from('.contact-info', {  /* === */
      duration: 0.8,
      x: -50,
      // opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  }
  // ScrollMagic animations
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
    
    // Skill cards reveal animation
    new ScrollMagic.Scene({
      triggerElement: '.skills-grid',
      triggerHook: 0.8,
      duration: '50%'
    })
    .setTween(gsap.to('.skill-card', {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2.out'
    }))
    .addTo(controller);
    
    // Project cards reveal animation
    new ScrollMagic.Scene({
      triggerElement: '.projects-grid',
      triggerHook: 0.8,
      duration: '50%'
    })
    .setTween(gsap.to('.project-card', {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2.out'
    }))
    .addTo(controller);
  }


  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Generate projects
    generateProjects();

    // Attach listeners to project buttons
    attachProjectButtonListeners();

  
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Initialize ScrollMagic
    initScrollMagic();
    
    // Event listeners
    contactForm.addEventListener('submit', handleContactForm);
  });  
// });