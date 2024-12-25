
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting digital experiences with clean code and creative solutions
          </motion.p>
          
          <div className="flex justify-center gap-8">
            <Skill icon={<Code2 size={24} />} title="Frontend" delay={0.6} />
            <Skill icon={<Terminal size={24} />} title="Backend" delay={0.8} />
            <Skill icon={<Palette size={24} />} title="Design" delay={1.0} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skill = ({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col items-center gap-2"
  >
    <div className="p-4 bg-gray-50 rounded-full">
      {icon}
    </div>
    <span className="font-medium">{title}</span>
  </motion.div>
);
