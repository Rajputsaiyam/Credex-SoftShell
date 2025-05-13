import  { motion } from 'framer-motion';
import { ShieldCheck, Clock, Banknote, Globe } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary-600" />,
    title: "Secure Transactions",
    description: "End-to-end encryption and secure payment processing protect your sensitive license data and financial transactions."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary-600" />,
    title: "Quick Turnaround",
    description: "Get valuations in minutes, not days. Our streamlined process means you can convert unused licenses to cash quickly."
  },
  {
    icon: <Banknote className="h-10 w-10 text-primary-600" />,
    title: "Maximum Returns",
    description: "Our market analysis ensures you get the best possible value for your licenses with competitive pricing."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary-600" />,
    title: "Global Marketplace",
    description: "Access to buyers worldwide means better chances of selling even specialized or niche software licenses."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
          >
            <img
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGJ1c2luZXNzJTIwdGVhbSUyMG9mZmljZSUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NDcxNDY2MTd8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
              alt="Professional team discussing software solutions"
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose SoftSell</h2>
              <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-8">
                We're transforming how businesses manage software assets by creating a transparent, efficient marketplace for unused licenses.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card hover:shadow-lg hover:bg-primary-50 dark:hover:bg-secondary-700 hover:-translate-y-1"
                >
                  <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-3 inline-flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-secondary-600 dark:text-secondary-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
  