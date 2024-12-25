import { motion } from 'framer-motion';
import { SetupItem } from './SetupItem';
import { setupData } from './setupData';

export const Setup = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Setup
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {setupData.map((setup, index) => (
            <SetupItem key={index} {...setup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
