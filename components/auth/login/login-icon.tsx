'use client';

import { useRouter } from 'next/navigation';

import { FiUser } from 'react-icons/fi';

const LogInIcon = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/auth/login');
  };
  return (
    <FiUser onClick={onClick} className="cursor-pointer w-6 h-6 text-white" />
  );
};

export default LogInIcon;
