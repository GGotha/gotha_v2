import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

export const TimelineItem = ({ year, title, company, description, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 w-px h-full bg-gray-200">
        <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-gray-400" />
      </div>
      
      <div className="flex items-center gap-2 text-gray-600 mb-2">
        <Calendar size={16} />
        <span className="text-sm">{year}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-600 font-medium mb-2">{company}</p>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
