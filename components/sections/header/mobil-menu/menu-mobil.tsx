'use client';

import { cn } from '@/lib/utils';
import MobilPopup from './mobil-popup';
import { useSize } from '@/hooks/use-size';
import { Icons } from '@/components/icons';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface MenuMobilProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const MenuMobil: React.FC<MenuMobilProps> = ({ className }) => {
  const { width } = useSize();
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  if (!width || width > 1023) {
    return null;
  }

  return (
    <div
      className={cn(
        'p-4 flex justify-center items-center lg:hidden',
        className
      )}
    >
      <AnimatePresence>{isOpen && <MobilPopup />}</AnimatePresence>
      <div onClick={() => setIsOpen(!isOpen)} className="sm:-ml-4">
        <div>
          <Icons.burger open={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default MenuMobil;
