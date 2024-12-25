import { motion } from 'framer-motion';

interface SetupItemProps {
  title: string;
  items: string[];
  index: number;
}

export const SetupItem = ({ title, items, index }: SetupItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};
