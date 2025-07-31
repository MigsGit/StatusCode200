// Your EmailJS settings - replace with your actual values
const emailSettings = {
    serviceId: 'service_e5mqpbu',
    templateId: 'template_75c363g', 
    publicKey: 'DfD3G7yL-gBoZRsFV'
};

// Form validation rules
const validationRules = {
    name: {
        minLength: 2,
        message: 'Name must be at least 2 characters'
    },
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    message: {
        minLength: 10,
        message: 'Message must be at least 10 characters'
    }
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
        });

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
        });
    }

    // Validate single field
    validateField(field) {
        if (!field) return false;
        
        const value = field.value.trim();
        const fieldName = field.name;
        const rules = validationRules[fieldName];

        this.clearError(field);
        
        
        let isValid = true;
        let errorMessage = '';
        
        switch (fieldName) {
            case 'name':
                if (value.length < rules.minLength) {
                    isValid = false;
                    errorMessage = rules.message;
                }
                break;
                
            case 'email':
                if (!rules.pattern.test(value)) {
                    isValid = false;
                    errorMessage = rules.message;
                }
                break;
                
            case 'message':
                if (value.length < rules.minLength) {
                    isValid = false;
                    errorMessage = rules.message;
                }
                break;
        }
        
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }
    // Show field error
    showFieldError(field, message) {
        field.style.borderColor = '#ef4444';
        field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        
        let errorEl = field.parentNode.querySelector('.field-error');
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'field-error';
            errorEl.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;';
            field.parentNode.appendChild(errorEl);
        }
        errorEl.textContent = message;
    }
    
    // Clear field error
    clearError(field) {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        
        const errorEl = field.parentNode.querySelector('.field-error');
        if (errorEl) {
            errorEl.remove();
        }
    }
    // Handle form submission
    async handleSubmit() {
        // Validate form
        if (!this.validateForm()) {
            this.showError('Please fill in all fields correctly');
            return;
        }
    
        try {
            const formData = this.getFormData();
            await this.sendEmail(formData);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('Reload Action Here');
        }
    }
    // Validate entire form
    validateForm() {
        const fields = ['name', 'email', 'message'];
        let isValid = true;
        
        fields.forEach(fieldName => {
            const field = this.form.querySelector(`[name="${fieldName}"]`);
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        return isValid;
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
    // Send email
    async sendEmail(formData) {
        return new Promise((resolve, reject) => {
            emailjs.send(
                emailSettings.serviceId,
                emailSettings.templateId,
                formData
            )
            .then((response) => {
                console.log('Email sent:', response);
                this.handleSuccess();
                resolve(response);
            })
            .catch((error) => {
                console.error('Email failed:', error);
                reject(error);
            });
        });
    }
    // Handle success
    handleSuccess() {
        setTimeout(() => {
            // Show success message & Hide success message after 3 seconds
            this.resetForm();
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        }, 500);
    }
    // Show error notification
    showError(message) {
        setTimeout(() => {
            // Show success message & Hide success message after 3 seconds
            const errorMsgEl = document.querySelector('.span-error-msg');
            errorMsgEl.textContent = message
            this.resetForm();
            errorMessage.classList.add('show');
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }, 500);
    }
    // Reset form
    resetForm() {
        if (this.form) {
            this.form.reset();
            
            const fields = this.form.querySelectorAll('input, textarea');
            fields.forEach(field => this.clearError(field));
        }
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
