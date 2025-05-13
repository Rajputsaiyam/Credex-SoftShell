import  { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

const licenseTypes = [
  { value: "", label: "Select License Type" },
  { value: "microsoft", label: "Microsoft" },
  { value: "adobe", label: "Adobe" },
  { value: "oracle", label: "Oracle" },
  { value: "sap", label: "SAP" },
  { value: "autodesk", label: "Autodesk" },
  { value: "vmware", label: "VMware" },
  { value: "other", label: "Other" }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const validateForm = () => {
    let valid = true;
    const errors = {
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    };
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }
    
    // Company validation
    if (!formData.company.trim()) {
      errors.company = 'Company is required';
      valid = false;
    }
    
    // License Type validation
    if (!formData.licenseType) {
      errors.licenseType = 'Please select a license type';
      valid = false;
    }
    
    // Message validation (optional)
    if (formData.message.trim() && formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setFormErrors(errors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      // Simulate API call
      setTimeout(() => {
        setFormStatus('success');
        // Reset form after success
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Licenses?</h2>
            <p className="text-xl text-secondary-700 dark:text-secondary-300">
              Fill out the form below and our team will provide you with a free valuation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-8"
          >
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-secondary-700 dark:text-secondary-300 mb-6">
                  Your message has been received. Our team will contact you shortly with a valuation for your software licenses.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')} 
                  className="btn btn-primary"
                >
                  Submit Another License
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${formErrors.name ? 'border-red-500 dark:border-red-500' : ''}`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${formErrors.email ? 'border-red-500 dark:border-red-500' : ''}`}
                      placeholder="you@company.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>
                  
                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block mb-2 font-medium">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`input-field ${formErrors.company ? 'border-red-500 dark:border-red-500' : ''}`}
                      placeholder="Your company"
                    />
                    {formErrors.company && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.company}</p>
                    )}
                  </div>
                  
                  {/* License Type Dropdown */}
                  <div>
                    <label htmlFor="licenseType" className="block mb-2 font-medium">
                      License Type *
                    </label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`input-field ${formErrors.licenseType ? 'border-red-500 dark:border-red-500' : ''}`}
                    >
                      {licenseTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {formErrors.licenseType && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.licenseType}</p>
                    )}
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`input-field resize-none ${formErrors.message ? 'border-red-500 dark:border-red-500' : ''}`}
                    placeholder="Tell us more about your licenses..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                  )}
                </div>
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p>There was an error submitting your form. Please try again.</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Get Free Valuation'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
  