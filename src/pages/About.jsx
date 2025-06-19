// src/pages/About.jsx

import { motion } from 'framer-motion';
import { Watch, Hand, Gem, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="Chronova watchmaking workshop" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
        
        <motion.div 
          className="relative z-20 text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-gray-900">
            The <span className="font-serif italic">Chronova</span> Legacy
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-light text-gray-700 max-w-3xl leading-relaxed">
            Where centuries of horological artistry meet contemporary innovation to create timeless masterpieces.
          </p>
        </motion.div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-px w-16 bg-gray-400" />
                <span className="text-sm font-medium uppercase tracking-widest text-gray-500">Our Philosophy</span>
              </div>
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                Precision <span className="font-serif italic">perfected</span> through generations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Chronova, we believe true luxury is measured not just in time, but in the dedication to excellence. 
                Each timepiece is a testament to the uncompromising standards passed down through generations of master watchmakers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our craftsmen devote hundreds of hours to each creation, ensuring every component—from the smallest gear to the most intricate complication—meets our exacting standards of perfection.
              </p>
            </motion.div>
          </div>
          
          <div className="relative">
            <img 
              src="/images/craftsmanship.jpg" 
              alt="Master watchmaker at work" 
              className="w-full aspect-square object-cover rounded-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gray-300 z-0" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex justify-center mb-6">
              <div className="h-px w-16 bg-gray-400" />
            </div>
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              The <span className="font-serif italic">Pillars</span> of Excellence
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The guiding principles that define every Chronova creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                icon: <Hand size={36} className="text-gray-700" />, 
                title: "Artisan Craftsmanship", 
                desc: "Each component hand-finished by master watchmakers with decades of experience"
              },
              { 
                icon: <Gem size={36} className="text-gray-700" />, 
                title: "Exceptional Materials", 
                desc: "Only the finest ethically-sourced materials meet our standards"
              },
              { 
                icon: <Watch size={36} className="text-gray-700" />, 
                title: "Swiss Precision", 
                desc: "Movements engineered to chronometer standards of accuracy"
              },
              { 
                icon: <Award size={36} className="text-gray-700" />, 
                title: "Timeless Design", 
                desc: "Created to transcend trends and become future heirlooms"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-last lg:order-first">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/images/heritage-1.jpg" 
                alt="Vintage Chronova timepiece" 
                className="w-full aspect-square object-cover rounded-xl"
              />
              <img 
                src="/images/heritage-2.jpg" 
                alt="Historical watchmaking tools" 
                className="w-full aspect-square object-cover rounded-xl mt-12"
              />
            </div>
          </div>
          
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px w-16 bg-gray-400" />
              <span className="text-sm font-medium uppercase tracking-widest text-gray-500">Our Heritage</span>
            </div>
            <h2 className="text-4xl font-light mb-6 text-gray-900">
              A Legacy <span className="font-serif italic">Forged</span> in Time
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded in Geneva in 1923, Chronova began as a small atelier dedicated to reviving the lost art of mechanical watchmaking. 
              Through decades of innovation and perseverance, we've established ourselves as guardians of horological tradition.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, each Chronova timepiece carries forward this heritage, blending centuries-old techniques with cutting-edge technology 
              to create watches that will be treasured for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 to-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Experience the <span className="font-serif italic">Art of Time</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the collection that redefines luxury watchmaking for the modern connoisseur.
          </p>
          <div className="flex justify-center">
            <motion.button
              className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collection
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;