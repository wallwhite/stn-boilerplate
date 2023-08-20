import { BooksIcon, ChattingIcon, ShieldIcon, UniversityCapIcon } from '@stn-ui/icons';

export const FEATURES_ITEMS = [
  {
    id: 'dynamic-conversations',
    title: 'Dynamic Conversations',
    description:
      'Dive into fluid discussions with ChatGPT. Its design allows for open-ended interactions, making your chats feel natural and intuitive.',
    icon: <ChattingIcon />,
    image: '/images/features/dynamic-conversations.png',
  },
  {
    id: 'knowledge-infused',
    title: 'Knowledge-Infused',
    description:
      'Empowered by vast information, ChatGPT offers answers from a plethora of domains. From history to tech, tap into its extensive database.',
    icon: <UniversityCapIcon />,
    image: '/images/features/knowledge-infused.jpg',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description:
      'ChatGPT thrives on feedback! Each interaction refines its capabilities, ensuring the AI grows smarter and more responsive over time.',
    icon: <BooksIcon />,
    image: '/images/features/continuous-learning.png',
  },
  {
    id: 'safe-and-filtered',
    title: 'Safe & Filtered',
    description:
      'Prioritizing user experience, ChatGPT comes equipped with mechanisms to reduce biases and provide safer, more accurate responses.',
    icon: <ShieldIcon />,
    image: '/images/features/safe-and-filtered.png',
  },
];
