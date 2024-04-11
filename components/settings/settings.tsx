'use client';

import { logout } from '@/actions/logout';
import Button from '../ui/my-components/button';
import { useCurrentUser } from '@/hooks/use-current-user';

const Settings = () => {
  const user = useCurrentUser();
  return (
    <div className="">
      <p>{JSON.stringify(user)}</p>
      <Button onClick={() => logout()}>Sign out</Button>
    </div>
  );
};

export default Settings;
