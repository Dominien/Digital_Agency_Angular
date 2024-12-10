import type { pricingPlanType, StepType, TestimonialType } from './types'

const avatar11 = 'assets/images/avatar/11.jpg'
const avatar8 = 'assets/images/avatar/08.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'

export const steps: StepType[] = [
  {
    stepNumber: '01',
    title: 'Understanding Client Goals',
    description:
      'The process begins with a thorough consultation with the client to understand their business goals.',
  },
  {
    stepNumber: '02',
    title: 'Market Research',
    description: `They also analyze the client's current online presence and marketing efforts.`,
  },
  {
    stepNumber: '03',
    title: 'Search Engine Optimization (SEO)',
    description: `For visibility, SEO strategies are employed to improve the client's website's search engine rankings.`,
  },
  {
    stepNumber: '04',
    title: 'Adapting to Industry Changes',
    description: `Digital marketing agencies stay up-to-date with industry trends and algorithm changes.`,
  },
]

export const pricingData: pricingPlanType[] = [
  {
    duration: 'Monthly',
    price: 199,
    features: [
      'Unlimited monthly visitors',
      'Dedicated SEO strategists',
      'Google Docs style editors',
      'Basic chat and email support',
      'AI powered product recommendation engine',
    ],
  },
  {
    duration: 'Annual',
    price: 159,
    features: [
      'Unlimited monthly visitors',
      'Dedicated SEO strategists',
      'Google Docs style editors',
      'Basic chat and email support',
      'AI powered product recommendation engine',
    ],
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar11,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    comment:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap template. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.',
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    comment:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    comment:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    rating: 4.5,
  },
]
