import  { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-white dark:from-secondary-900 dark:to-secondary-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              Turn Unused Software Licenses into{' '}
              <span className="text-primary-600 dark:text-primary-400">Revenue</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-8"
            >
              SoftSell helps businesses maximize returns on unused software licenses through our secure, efficient resale platform.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary flex items-center justify-center"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-5 w-5" />
              </ScrollLink>
              
              <ScrollLink
                to="how-it-works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-secondary"
              >
                Learn How It Works
              </ScrollLink>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 dark:bg-primary-700 rounded-2xl rotate-3 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGJ1c2luZXNzJTIwdGVhbSUyMG9mZmljZSUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NDcxNDY2MTd8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200"
                alt="Business team collaborating on software solutions"
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-secondary-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-secondary-700">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs">₹</div>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">₹</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">₹</div>
                  </div>
                  <div>
                    <p className="text-sm font-bold">+2.5 Cr+</p>
                    <p className="text-xs text-secondary-500 dark:text-secondary-400">Recovered Value</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between px-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm font-medium">500+ Companies</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="text-sm font-medium">10,000+ Licenses</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <p className="text-sm font-medium">24/7 Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  