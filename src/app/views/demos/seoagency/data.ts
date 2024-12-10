import { CaseStudyType, MemberType, StepType, TestimonialType } from './types'

const listImg1 = 'assets/images/portfolio/list/01.jpg'
const listImg2 = 'assets/images/portfolio/list/02.jpg'
const listImg3 = 'assets/images/portfolio/list/03.jpg'

const client2 = 'assets/images/client/client-white/02.svg'
const client3 = 'assets/images/client/client-white/03.svg'
const client4 = 'assets/images/client/client-white/04.svg'

const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar6 = 'assets/images/avatar/06.jpg'
const avatar9 = 'assets/images/avatar/09.jpg'
const avatar10 = 'assets/images/avatar/10.jpg'
const avatar11 = 'assets/images/avatar/11.jpg'

export const testimonials: TestimonialType[] = [
  {
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      role: 'Product designer',
    },
    comment:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
  },
  {
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-Founder',
    },
    comment:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
  {
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer',
    },
    comment:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
  },
]

export const caseStudies: CaseStudyType[] = [
  {
    company: {
      image: client2,
    },
    title: 'Website Optimization for TechWave',
    description:
      'The most powerful software & app landing software marketing business.',
    tags: ['Branding', 'Packaging', 'Development'],
    image: listImg2,
    url: '/portfolio/case-study/v2',
  },
  {
    company: {
      image: client3,
    },
    title: 'Transforming Ideas into Reality',
    description:
      'The most powerful software & app landing software marketing business.',
    tags: ['UI/UX design', 'Research'],
    image: listImg1,
    url: '/portfolio/case-study/v2',
  },
  {
    company: {
      image: client4,
    },
    title: 'Bio Cosmetics',
    description:
      'The most powerful software & app landing software marketing business.',
    tags: ['Branding', 'UI/UX design'],
    image: listImg3,
    url: '/portfolio/case-study/v2',
  },
]

export const approachSteps: StepType[] = [
  {
    stepNumber: 1,
    title: 'Business understanding',
    description:
      'We begin by gaining a deep understanding of your business, industry, and target audience.',
  },
  {
    stepNumber: 2,
    title: 'Keyword research',
    description:
      'Our approach starts with comprehensive keyword research potential customers are searching for.',
  },
  {
    stepNumber: 3,
    title: 'Technical optimization',
    description:
      'We conduct a thorough technical audit of your website to identify any issues that may be hindering its.',
  },
  {
    stepNumber: 4,
    title: 'Content strategy',
    description:
      'Content is king in the world of SEO. We develop a strategic content plan that aligns with your.',
  },
  {
    stepNumber: 5,
    title: 'Transparent Reporting',
    description:
      'We provide regular reports and updates on the progress of your SEO campaigns giving you full.',
  },
]

export const teamMembers: MemberType[] = [
  {
    firstName: 'Samuel',
    lastName: 'Bishop',
    socialLinks: [
      {
        icon: 'fa-facebook-f',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-instagram',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-twitter',
        url: '',
        externalLink: '',
      },
    ],
    role: 'UI/UX Designer',
    avatar: avatar4,
  },
  {
    firstName: 'Judy',
    lastName: 'Nguyen',
    socialLinks: [
      {
        icon: 'fa-facebook-f',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-instagram',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-twitter',
        url: '',
        externalLink: '',
      },
    ],
    role: 'Web Designer',
    avatar: avatar11,
  },
  {
    firstName: 'Louis',
    lastName: 'Ferguson',
    socialLinks: [
      {
        icon: 'fa-facebook-f',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-instagram',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-twitter',
        url: '',
        externalLink: '',
      },
    ],
    role: 'Web Developer',
    avatar: avatar6,
  },
  {
    firstName: 'Dennis',
    lastName: 'Barrett',
    socialLinks: [
      {
        icon: 'fa-facebook-f',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-instagram',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-twitter',
        url: '',
        externalLink: '',
      },
    ],
    role: 'CEO & Founder',
    avatar: avatar9,
  },
  {
    firstName: 'Dennis',
    lastName: 'Barrett',
    socialLinks: [
      {
        icon: 'fa-facebook-f',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-instagram',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-twitter',
        url: '',
        externalLink: '',
      },
    ],
    role: 'CEO & Founder',
    avatar: avatar5,
  },
  {
    firstName: 'Bryan',
    lastName: 'Knight',
    socialLinks: [
      {
        icon: 'fa-facebook-f',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-instagram',
        url: '',
        externalLink: '',
      },
      {
        icon: 'fa-twitter',
        url: '',
        externalLink: '',
      },
    ],
    role: 'Product Designer',
    avatar: avatar10,
  },
]
