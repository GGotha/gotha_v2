import { motion } from 'framer-motion';

export const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <img
        src="profile.png"
        alt="Gustavo Gotha"
        className="rounded-full w-full h-full object-cover shadow-lg"
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-gray-200"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
    </motion.div>
  );
};
