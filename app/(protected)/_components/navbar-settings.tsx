'use client';

import UserButton from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';
import { useCurrentRole } from '@/hooks/use-current-role';
import { UserRole } from '@prisma/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarSettings = () => {
  const pathname = usePathname();
  const role = useCurrentRole();
  return (
    <div className="w-full p-4 rounded-2xl bg-white border border-gray-200 flex justify-between items-center dark:bg-accent-300">
      <div className="flex gap-x-2">
        {/* <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
        >
          <Link href={'/server'}>Сервер</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
        >
          <Link href={'/client'}>Клиент</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href={'/admin'}>Админ</Link>
        </Button> */}
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
        >
          <Link href={'/settings'}>Параментры</Link>
        </Button>
        {role === UserRole.ADMIN && (
          <Button
            asChild
            variant={pathname === '/add-project' ? 'default' : 'outline'}
          >
            <Link href={'/add-project'}>Проекты</Link>
          </Button>
        )}
      </div>
      <UserButton />
    </div>
  );
};

export default NavbarSettings;
