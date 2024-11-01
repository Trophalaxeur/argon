import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@argon/ui-shadcn-components-ui';
import { BookUser, Home, PersonStanding, Settings, User2 } from 'lucide-react';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Character',
    url: '/character',
    icon: PersonStanding,
  },
  {
    title: 'Skills',
    url: '/skills',
    icon: BookUser,
  },
  {
    title: 'Users',
    url: '/users',
    icon: User2,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function SidebarFeature() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default SidebarFeature;
