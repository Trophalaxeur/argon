'use client';

import { Button } from '@argon/shared-shadcn-components-ui';
import { cn } from '@argon/shared-shadcn-utils-ui';
import { Calendar, Lightbulb, Settings, ShieldCheck, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const MENU_ITEMS = [
  {
    id: 'character',
    link: '/character',
    name: 'Character',
    Icon: User,
  },
  {
    id: 'skills',
    link: '/skills',
    name: 'Skills',
    Icon: Lightbulb,
  },
  {
    id: 'habits',
    link: '/habits',
    name: 'Habits',
    Icon: Calendar,
  },
  {
    id: 'settings',
    link: '/settings',
    name: 'Settings',
    Icon: Settings,
  },
  {
    id: 'admin',
    link: '/admin',
    name: 'Admin',
    Icon: ShieldCheck,
  },
];

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  console.log('pathname', pathname);
  return (
    <nav className="bg-secondary/50 border-4 border-secondary rounded-2xl p-4">
      <div className="flex justify-center gap-4">
        {MENU_ITEMS.map(({ id, link, name, Icon }) => (
          <Link key={id} href={link}>
            <Button
              variant={pathname.startsWith(link) ? 'default' : 'ghost'}
              className={cn(
                'w-20 h-20 flex flex-col items-center justify-center gap-2 rounded-full border-4 transition-colors',
                pathname.startsWith(link)
                  ? 'bg-primary border-primary hover:bg-primary/90'
                  : 'bg-background border-secondary hover:bg-primary/90',
              )}
              title={name}
            >
              <Icon className="size-20" size={20} />
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
export default Navbar;
