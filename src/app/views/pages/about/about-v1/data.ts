import {
  bulbIcon,
  robotIcon,
  technologyIcon,
  wifiIcon,
} from '@public/assets/data/icons'
import type { FeatureType, MemberType, StatisticType } from './types'

const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar10 = 'assets/images/avatar/10.jpg'
const avatar11 = 'assets/images/avatar/11.jpg'

export const statData: StatisticType[] = [
  {
    title: 'Happy Customers',
    stat: 600,
    suffix: '+',
  },
  {
    title: 'Acquired Users',
    stat: 200,
    suffix: '+',
  },
  {
    title: 'Positive User Reviews',
    stat: 10,
    suffix: 'K+',
  },
  {
    title: 'Completed Projects',
    stat: 25,
    suffix: '+',
  },
]

export const features: FeatureType[] = [
  {
    title: 'Innovation-driven',
    icon: robotIcon,
    description:
      'Elevate your digital presence with our innovation-driven approach',
  },
  {
    title: 'Transparent approach',
    icon: bulbIcon,
    description: "At our digital agency, transparency isn't just a buzzword",
  },
  {
    title: 'Accessible technology',
    icon: technologyIcon,
    description: 'Celebrate Inclusivity with Accessible Technology.',
  },
  {
    title: 'Collaborative teamwork',
    icon: wifiIcon,
    description:
      'We believe that the best results are born from the synergy of diverse',
  },
]

export const teamMembers: MemberType[] = [
  {
    name: 'Samuel Bishop',
    role: 'UI/UX Designer',
    image: avatar4,
  },
  {
    name: 'Judy Nguyen',
    role: 'Web Designer',
    image: avatar11,
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    image: avatar6,
  },
  {
    name: 'Dennis Barrett',
    role: 'CEO & Founder',
    image: avatar5,
  },
  {
    name: 'Bryan Knight',
    role: 'Product Designer',
    image: avatar10,
  },
]
