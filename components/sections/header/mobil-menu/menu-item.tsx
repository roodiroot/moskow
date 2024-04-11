import * as React from 'react';
import { motion } from 'framer-motion';

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}
const MenuItem: React.FC<MenuItemProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default MenuItem;
