import { BlogType, ClientType, FeatureType, PricingPlanType } from './types'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'
const client6 = 'assets/images/client/06.svg'
const client7 = 'assets/images/client/07.svg'

const blog1 = 'assets/images/blog/4by3/01.jpg'
const blog6 = 'assets/images/blog/4by3/06.jpg'
const blog7 = 'assets/images/blog/4by3/07.jpg'

export const clients: ClientType[] = [
  { image: client3 },
  { image: client7 },
  { image: client5 },
  { image: client4 },
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client6 },
]

export const features: FeatureType[] = [
  {
    title: 'Intelligent Automation',
    description:
      'Automate repetitive tasks, so you can focus on strategic work.',
    icon: 'bi-lightning-charge-fill',
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Connect your team, clients, and partners instantly.',
    icon: 'bi-hourglass-bottom',
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our robust analytics tools.',
    icon: 'bi-bar-chart-steps',
  },
  {
    title: 'Customization',
    description: 'Customize features and workflows to match your requirements.',
    icon: 'bi-rocket-fill',
  },
]

export const pricingData = [
  {
    price: 120,
    title: 'Transparent pricing',
    description:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    url: 'pricing',
    features: [
      { icon: 'bi-patch-check', title: 'Up to 05 users monthly' },
      { icon: 'bi-patch-check', title: 'Free 5 host & domain' },
      { icon: 'bi-patch-check', title: 'Google Docs style editors' },
      { icon: 'bi-patch-check', title: 'Support for 30+ languages' },
      { icon: 'bi-patch-check', title: '24/7 Dedicated Support' },
    ],
  },
]

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    category: 'Technology',
    image: blog1,
    url: '/blog/single/v2',
  },
  {
    title: '5 investment doubts you should clarify',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed',
    },
    category: 'Marketing',
    image: blog6,
    url: '/blog/single/v2',
  },
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    category: 'Technology',
    image: blog7,
    url: '/blog/single/v2',
  },
]
