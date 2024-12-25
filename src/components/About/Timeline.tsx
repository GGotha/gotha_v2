
import { motion } from 'framer-motion';
import { TimelineItem } from './TimelineItem';
import { timelineData } from './timelineData';

export const Timeline = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 text-center"
      >
        Professional Journey
      </motion.h2>
      
      <div className="space-y-6">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};
