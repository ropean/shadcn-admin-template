import {
  LayoutDashboard,
  Monitor,
  ListTodo,
  HelpCircle,
  Bell,
  Package,
  Palette,
  Settings,
  Wrench,
  UserCog,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const featuresSidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/features',
          icon: LayoutDashboard,
        },
        {
          title: 'Tasks',
          url: '/features/tasks',
          icon: ListTodo,
        },
        {
          title: 'Apps',
          url: '/features/apps',
          icon: Package,
        },
        {
          title: 'Chats',
          url: '/features/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'Users',
          url: '/features/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: ShieldCheck,
          items: [
            {
              title: 'Sign In',
              url: '/features/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/features/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/features/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/features/forgot-password',
            },
            {
              title: 'OTP',
              url: '/features/otp',
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: Settings,
          items: [
            {
              title: 'Profile',
              url: '/features/settings',
              icon: UserCog,
            },
            {
              title: 'Account',
              url: '/features/settings/account',
              icon: Wrench,
            },
            {
              title: 'Appearance',
              url: '/features/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Notifications',
              url: '/features/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Display',
              url: '/features/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/features/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
