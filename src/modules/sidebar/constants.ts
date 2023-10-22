import { AnnouncementIcon, BarcodeIcon, HomeIcon, QuizIcon } from '@stn-ui/icons';
import { NavigationItem } from '@stn-ui/navigation';

export const SIDEBAR_NAVIGATION: NavigationItem[] = [
  {
    title: 'Chats',
    url: '/',
    color: '#3e90f0',
    icon: HomeIcon,
  },
  {
    title: 'Features',
    url: '/features',
    color: '#3fdd78',
    icon: AnnouncementIcon,
  },
  {
    title: 'FAQ',
    url: '/faq',
    color: '#d84c10',
    icon: QuizIcon,
  },
  {
    title: 'Blog',
    url: '/blog',
    color: '#8e55ea',
    icon: BarcodeIcon,
  },
];
