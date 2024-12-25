import { motion } from 'framer-motion';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            Gustavo Gotha
          </motion.div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
