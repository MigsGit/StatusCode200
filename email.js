// Your EmailJS settings - replace with your actual values
const emailSettings = {
    serviceId: 'service_e5mqpbu',
    templateId: 'template_75c363g', 
    publicKey: 'DfD3G7yL-gBoZRsFV'
};

class ContactForm {
    constructor() {
        this.form = null;
        this.submitBtn = null;
        this.successMsg = null;
        this.isSubmitting = false;
        
        this.init();
        console.log(this.isSubmitting);
    }

    init() {
        // Initialize EmailJS
        try {
            emailjs.init(emailSettings.publicKey);
            console.log('EmailJS ready');
        } catch (error) {
            console.error('EmailJS failed to load:', error);
            this.showError('Email service not available');
        }
        
        // Get form elements
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.successMsg = document.getElementById('successMessage');
        
        if (!this.form || !this.submitBtn) {
            console.error('Form elements not found');
            return;
        }
        
        // Add event listeners
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
            alert('handleSubmit');

        });
    }
    // Handle form submission
    async handleSubmit() {
        try {
            const formData = this.getFormData();
            
        } catch (error) {
            console.log(error);
        } finally {
            console.log('Reload Action Here');
        }
    }

    // Get form data
    getFormData() {
        const formData = new FormData(this.form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value.trim();
        }
        
        return data;
    }
}

// Start when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting up contact form...');
    setTimeout(() => {
        try {
            const contactForm = new ContactForm();
            window.contactForm = contactForm;
            console.log('Contact form ready');
        } catch (error) {
            console.error('Failed to setup contact form:', error);
        }
    }, 100);
});

