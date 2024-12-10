import type { ClientType, FaqType, FeatureType, PricingPlanType } from './types'

const client5 = 'assets/images/client/05.svg'
const client1 = 'assets/images/client/01.svg'
const client7 = 'assets/images/client/07.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client6 = 'assets/images/client/06.svg'

export const pricingData: PricingPlanType[] = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Basic Plan',
    price: 25,
    yearPrice: 20,
    features: [
      { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
      { icon: 'bi-check-lg', title: 'Free 5 host domain' },
      { icon: 'bi-check-lg', title: 'Google docs style editors' },
      { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
    ],
  },
  {
    icon: 'bi-rocket-takeoff-fill',
    title: 'Standard Plan',
    isPopular: true,
    price: 59,
    yearPrice: 45,
    features: [
      { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
      { icon: 'bi-check-lg', title: 'Free 5 host domain' },
      { icon: 'bi-check-lg', title: 'Google docs style editors' },
      { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
      { icon: 'bi-check-lg', title: 'Landing pages Web widgets' },
      { icon: 'bi-check-lg', title: 'Landing pages Web widgets' },
      { icon: 'bi-check-lg', title: '24/7 dedicated Support' },
    ],
  },
  {
    icon: 'bi-send-fill',
    title: 'Enterprise Plan',
    price: 199,
    yearPrice: 145,
    features: [
      { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
      { icon: 'bi-check-lg', title: 'Free 5 host domain' },
      { icon: 'bi-check-lg', title: 'Google docs style editors' },
      { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
    ],
  },
]

export const features: FeatureType[] = [
  {
    icon: 'bi-clock',
    title: 'Get started in a minutes',
    description:
      "We've made it effortless so you can focus on what matters most.",
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Optimize your revenue',
    description:
      'Experience power of revenue optimization to heights of success.',
  },
  {
    icon: 'bi-headset',
    title: '24/7 customer supports',
    description:
      'Our dedicated support team is your inquiries around the clock.',
  },
]

export const clients: ClientType[] = [
  { image: client5 },
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client6 },
  { image: client7 },
]

export const faqData: FaqType[] = [
  {
    question: 'How many items are there on this list?',
    answer:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.',
  },
  {
    question: 'Can you describe mizzle in just one sentence?',
    answer:
      'September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Can I use this theme for my client?',
    answer:
      'How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.',
  },
  {
    question: 'Do you offer themes in other categories?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
  {
    question: 'Do I need to credit you when I use this theme?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.',
  },
]
