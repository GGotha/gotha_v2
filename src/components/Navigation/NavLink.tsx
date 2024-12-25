import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavLink = ({ href, children, isActive }: NavLinkProps) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`text-gray-600 hover:text-gray-900 ${isActive ? 'font-semibold text-gray-900' : ''}`}
  >
    {children}
  </motion.a>
);
