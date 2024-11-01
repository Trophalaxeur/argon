'use client';

import { Button } from '@argon/ui-shadcn-components-ui';
import { cn } from '@argon/ui-shadcn-utils';
import { Calendar, Lightbulb, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ADMIN_MENU_ITEMS = [
  {
    id: 'users',
    link: '/admin/users',
    name: 'Users',
    Icon: User,
  },
  {
    id: 'skills',
    link: '/admin/skills',
    name: 'Skills',
    Icon: Lightbulb,
  },
  {
    id: 'habits',
    link: '/admin/habits',
    name: 'Habits',
    Icon: Calendar,
  },
  {
    id: 'settings',
    link: '/admin/settings',
    name: 'Settings',
    Icon: Settings,
  },
];

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

export function NavbarAdmin({ className }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary/30 border-2 border-secondary rounded-xl p-3 mt-4">
      <div className="flex justify-center gap-4">
        {ADMIN_MENU_ITEMS.map(({ id, link, name, Icon }) => (
          <Link key={id} href={link}>
            <Button
              variant={pathname.startsWith(link) ? 'default' : 'ghost'}
              className={cn(
                'flex items-center gap-2 transition-colors',
                pathname.startsWith(link)
                  ? 'bg-primary hover:bg-primary/90'
                  : 'hover:bg-primary/90'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
