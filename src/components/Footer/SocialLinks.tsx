
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => (
  <div className="flex justify-center gap-6 py-8">
    <SocialLink href="https://github.com/ggotha" icon={<Github />} label="GitHub" />
    <SocialLink href="https://linkedin.com/in/gustavogotha" icon={<Linkedin />} label="LinkedIn" />
    <SocialLink href="mailto:clashgustavo1@gmail.com" icon={<Mail />} label="Email" />
  </div>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-gray-600 hover:text-gray-900"
    aria-label={label}
  >
    {icon}
  </motion.a>
);
