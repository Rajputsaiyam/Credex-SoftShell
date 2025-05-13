import  { motion } from 'framer-motion';
import { Upload, DollarSign as RupeeSign, CreditCard } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-primary-600" />,
    title: "Upload License",
    description: "Register your account and upload your software license details securely to our platform.",
    hoverText: "Supports all major software vendors including Microsoft, Adobe, Oracle, and more."
  },
  {
    icon: <RupeeSign className="h-12 w-12 text-primary-600" />,
    title: "Get Valuation",
    description: "Our algorithm analyzes market demand and provides an immediate valuation for your license.",
    hoverText: "Receive valuation in minutes with our AI-powered pricing engine that tracks real-time market rates."
  },
  {
    icon: <CreditCard className="h-12 w-12 text-primary-600" />,
    title: "Get Paid",
    description: "Accept our offer and receive payment via your preferred method within 48 hours.",
    hoverText: "Choose from multiple payment options including bank transfer, PayPal, and cryptocurrency."
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="how-it-works" className="section bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Our streamlined process makes selling your software licenses simple and profitable.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 text-center transition-all duration-300 cursor-pointer
                ${activeStep === index ? 'scale-105 shadow-xl ring-2 ring-primary-500 z-10' : 'hover:shadow-xl hover:scale-102'}`}
            >
              <motion.div 
                className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-4 inline-flex items-center justify-center mb-4"
                animate={{ 
                  rotate: activeStep === index ? [0, -10, 10, -10, 0] : 0,
                  scale: activeStep === index ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700 dark:text-primary-300">
                {step.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {step.description}
              </p>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: activeStep === index ? 1 : 0,
                  height: activeStep === index ? 'auto' : 0
                }}
                className="overflow-hidden"
              >
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-2 pt-3 border-t border-gray-200 dark:border-gray-600">
                  {step.hoverText}
                </p>
                
                <button className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors">
                  {index === 0 ? "Upload Now" : index === 1 ? "Get Quote" : "Learn More"}
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
              Start Selling Your Licenses Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
  