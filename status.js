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
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with Laravel and Vue.js featuring user authentication, payment integration, and admin dashboard.",
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
            category: "Full Stack"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
            image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
            category: "Frontend"
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
            image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["React", "D3.js", "Express", "PostgreSQL"],
            category: "Dashboard"
        },
        {
            id: 4,
            title: "Learning Management System",
            description: "An educational platform with course management, video streaming, progress tracking, and interactive assessments.",
            image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Laravel", "Vue.js", "AWS", "Redis"],
            category: "Education"
        },
        {
            id: 5,
            title: "Social Media API",
            description: "A RESTful API for social media application with user management, post creation, real-time notifications, and content moderation.",
            image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["PHP", "Laravel", "JWT", "Docker"],
            category: "Backend"
        },
        {
            id: 6,
            title: "Weather Forecast App",
            description: "A beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Vue.js", "OpenWeather API", "Mapbox", "PWA"],
            category: "Mobile"
        }
    ];
  
    // DOM Elements
    const typedText = document.getElementById('typed-text');
    const projectsGrid = document.getElementById('projectsGrid');

    
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
 