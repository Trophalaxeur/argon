import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  SidebarMenuButton,
} from '@argon/shared-shadcn-components-ui';
import { Bell, ChevronsUpDown, Settings } from 'lucide-react';
import UserMenuSettingsButtonFeature from './user-menu-settings-button';
import { ArgonNextAuth } from '@argon/shell-auth-feature';
import Link from 'next/link';

const DEFAULT_AVATAR = 'https://cdn.fakercloud.com/avatars/none_128.jpg';

export async function UserMenuFeature() {
  const session = await ArgonNextAuth.auth();
  console.log('Session', session);

  const isLogin = !!session?.user;
  const name = session?.user?.name || 'John Doe';
  const email = session?.user?.email || 'none';
  const avatar = session?.user?.image || DEFAULT_AVATAR;

  return !isLogin ? (
    <Link
      href="/login"
      className="underline underline-offset-4 hover:text-primary"
    >
      Log In
    </Link>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{name}</span>
            <span className="truncate text-xs">{email}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{name}</span>
              <span className="truncate text-xs">{email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <UserMenuSettingsButtonFeature />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenuFeature;
