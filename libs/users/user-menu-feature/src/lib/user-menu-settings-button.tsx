'use client';

import { DropdownMenuItem } from '@argon/shared-shadcn-components-ui';
import { signOut } from '@argon/shell-auth-feature';
import { LogOut } from 'lucide-react';

export function UserMenuSettingsButtonFeature() {
  const onLogout = async () => {
    console.log('logout');
    signOut();
  };

  return (
    <DropdownMenuItem onSelect={onLogout}>
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
}

export default UserMenuSettingsButtonFeature;
