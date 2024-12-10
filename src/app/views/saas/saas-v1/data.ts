import {
  BlogType,
  ClientType,
  FeatureType,
  PricingPlanType,
  StatisticType,
} from './types'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'
const client7 = 'assets/images/client/07.svg'

export const clients: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client7 },
]

export const features: FeatureType[] = [
  {
    title: 'Explaining the value of design',
    description:
      "It's the thoughtful arrangement of elements that not only enhances visual appeal but also improves functionality, usability, and user experience. Effective design communicates your brand's identity, cultivates trust, and can significantly impact conversion rates and customer loyalty.",
  },
  {
    title: 'Discover resources for color-accessible',
    description:
      'We provide a range of tools, guides, and best practices to help you create designs, websites, and content that are inclusive and accessible to all individuals, regardless of their visual abilities.',
  },
  {
    title: 'Checking interface contrast for accessibility standards',
    description:
      'This crucial process ensures that content is easily readable and perceivable by individuals with varying degrees of visual impairment. By adhering to accessibility standards, you create a more inclusive and user-friendly experience for all users, regardless of their visual abilities, and contribute to a more accessible digital environment.',
  },
  {
    title: 'Checking accessibility on browsers',
    description:
      'By evaluating how your digital content and features perform across different browsers, you can identify potential accessibility issues and make necessary adjustments to provide a seamless and accessible online experience for users regardless of their choice of browser.',
  },
]

export const statData: StatisticType[] = [
  {
    title: 'Project management in a day',
    stat: 150,
    suffix: '+',
  },
  {
    title: 'Hour save for our customer',
    stat: 120,
    suffix: '+',
  },
  {
    title: 'Positive user reviews',
    stat: 10,
    suffix: 'M+',
  },
  {
    title: 'Happy customers',
    stat: 600,
    suffix: '+',
  },
]

export const pricingData: PricingPlanType[] = [
  {
    title: 'Basic Plan',
    price: 25,
    features: [
      { icon: 'bi-check-circle-fill', title: 'Access to basic feature' },
      { icon: 'bi-check-circle-fill', title: 'Basic reporting and analytics' },
      { icon: 'bi-check-circle-fill', title: 'Up to 10 individual users' },
      { icon: 'bi-check-circle-fill', title: '20GB individual data each year' },
      { icon: 'bi-check-circle-fill', title: 'Basic chat and email support' },
      {
        icon: 'bi-check-circle-fill',
        title: 'Ongoing best practices and reviews',
      },
    ],
  },
  {
    title: 'Business Plan',
    isPopular: true,
    price: 50,
    features: [
      { icon: 'bi-check-circle-fill', title: '200+ integrations' },
      { icon: 'bi-check-circle-fill', title: 'Basic reporting and analytics' },
      { icon: 'bi-check-circle-fill', title: 'Up to 10 individual users' },
      { icon: 'bi-check-circle-fill', title: '40GB individual data each year' },
      {
        icon: 'bi-check-circle-fill',
        title: 'Priority chat and email support',
      },
      {
        icon: 'bi-check-circle-fill',
        title: 'Ongoing best practices and reviews',
      },
    ],
  },
  {
    title: 'Enterprise Plan',
    price: 85,
    features: [
      { icon: 'bi-check-circle-fill', title: 'Advanced custom field' },
      { icon: 'bi-check-circle-fill', title: 'Audit log and data history' },
      { icon: 'bi-check-circle-fill', title: 'Ultimate individual users' },
      { icon: 'bi-check-circle-fill', title: '60GB individual data each year' },
      { icon: 'bi-check-circle-fill', title: 'Basic chat and email support' },
      {
        icon: 'bi-check-circle-fill',
        title: 'Ongoing best practices and reviews',
      },
    ],
  },
]

export const blogs: BlogType[] = [
  {
    title: 'Bootstrap Made Easy - Customizing Your HTML theme Like a Pro',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2023,
    },
    url: '/blog/single/v1',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    publishedBy: {
      firstName: 'Allen',
      lastName: 'Smith',
    },
    publishedAt: {
      date: 13,
      month: 'April',
      year: 2023,
    },
    url: '/blog/single/v1',
  },
  {
    title:
      'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2023,
    },
    url: '/blog/single/v1',
  },
]
