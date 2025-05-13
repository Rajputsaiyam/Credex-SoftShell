import  { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "SoftSell transformed the way we handle our excess licenses. We recovered over ₹50 lakhs from software we weren't using. The process was incredibly easy and secure.",
    author: "Priya Sharma",
    role: "IT Director",
    company: "TechSphere Solutions",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGJ1c2luZXNzJTIwdGVhbSUyMG9mZmljZSUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NDcxNDY2MTd8MA&ixlib=rb-4.1.0&fit=fillmax&h=60&w=60"
  },
  {
    id: 2,
    content: "After our company downsized, we had dozens of unused licenses. SoftSell helped us convert them into cash quickly when we needed it most. Their valuation was fair and payment was prompt.",
    author: "Rahul Patel",
    role: "CFO",
    company: "Innovate Enterprises",
    rating: 5,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGJ1c2luZXNzJTIwdGVhbSUyMG9mZmljZSUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NDcxNDY2MTd8MA&ixlib=rb-4.1.0&fit=fillmax&h=60&w=60"
  },
  {
    id: 3,
    content: "I was skeptical at first, but SoftSell exceeded my expectations. Their market knowledge helped us get 30% more than we expected for our enterprise licenses. I've recommended them to everyone in my network.",
    author: "Arjun Mehta",
    role: "CTO",
    company: "CloudNine Systems",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGJ1c2luZXNzJTIwdGVhbSUyMG9mZmljZSUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NDcxNDY2MTd8MA&ixlib=rb-4.1.0&fit=fillmax&h=60&w=60"
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section id="testimonials" className="section bg-primary-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto">
            Hear from businesses that have successfully recovered value from their unused software licenses.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary-100 dark:text-primary-900/20" />
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-secondary-700 dark:text-secondary-300 mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
  