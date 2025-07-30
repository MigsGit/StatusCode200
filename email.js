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
        
        console.log(this.isSubmitting);
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

