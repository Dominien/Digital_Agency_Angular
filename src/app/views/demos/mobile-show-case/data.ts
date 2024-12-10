import {
  PartnerType,
  PricingType,
  StatisticType,
  TestimonialType,
} from './types'

const avatar1 = 'assets/images/avatar/01.jpg'
const avatar2 = 'assets/images/avatar/02.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar4 = 'assets/images/avatar/04.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'
const avatar7 = 'assets/images/avatar/07.jpg'
const avatar8 = 'assets/images/avatar/08.jpg'
const avatar10 = 'assets/images/avatar/10.jpg'
const avatar11 = 'assets/images/avatar/11.jpg'

export const partners: PartnerType[] = [
  { icon: 'bi-android' },
  { icon: 'bi-apple' },
  { icon: 'bi-slack' },
  { icon: 'bi-google' },
  { icon: 'bi-git' },
]

export const statData: StatisticType[] = [
  {
    title: 'Total Downloads',
    stat: 15,
    suffix: 'M+',
  },
  {
    title: 'Total Followers',
    stat: 22,
    suffix: 'M+',
  },
  {
    title: 'Total Reviews',
    stat: 2300,
    suffix: '+',
  },
  {
    title: 'Total Countries',
    stat: 107,
    suffix: '+',
  },
]

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        badge: 'Boss Mode',
        price: 45,
        features: [
          { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
          { icon: 'bi-check-lg', title: 'Free 5 host domain' },
          { icon: 'bi-check-lg', title: 'Google docs style editors' },
          { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
          { icon: 'bi-check-lg', title: 'Landing pages Web widgets' },
          { icon: 'bi-check-lg', title: '24/7 dedicated Support' },
        ],
      },
      {
        badge: 'Enterprise Mode',
        price: 175,
        features: [
          { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
          { icon: 'bi-check-lg', title: 'Free 5 host domain' },
          { icon: 'bi-check-lg', title: 'Google docs style editors' },
          { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
          { icon: 'bi-check-lg', title: 'Landing pages Web widgets' },
          { icon: 'bi-check-lg', title: '24/7 dedicated Support' },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        badge: 'Boss Mode',
        price: 56,
        features: [
          { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
          { icon: 'bi-check-lg', title: 'Free 5 host domain' },
          { icon: 'bi-check-lg', title: 'Google docs style editors' },
          { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
          { icon: 'bi-check-lg', title: 'Landing pages Web widgets' },
          { icon: 'bi-check-lg', title: '24/7 dedicated Support' },
        ],
      },
      {
        badge: 'Enterprise Mode',
        price: 199,
        features: [
          { icon: 'bi-check-lg', title: 'Up to 05 users monthly' },
          { icon: 'bi-check-lg', title: 'Free 5 host domain' },
          { icon: 'bi-check-lg', title: 'Google docs style editors' },
          { icon: 'bi-check-lg', title: 'Support for 30+ languages' },
          { icon: 'bi-check-lg', title: 'Landing pages Web widgets' },
          { icon: 'bi-check-lg', title: '24/7 dedicated Support' },
        ],
      },
    ],
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar1,
      firstName: 'Billy',
      lastName: 'Vasquez',
    },
    comment:
      '"Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 5,
  },
  {
    user: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    comment:
      '"Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing we have just launched our 5th website! You guys rock!"',
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar3,
      firstName: 'Larry',
      lastName: 'Lawson',
    },
    comment:
      '"Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 3.5,
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    comment:
      '"The experience of using Mizzle was enjoyable and easy. Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 5,
  },
  {
    user: {
      avatar: avatar7,
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
    comment:
      '"I am really happy with the Mizzle service. we have just launched our 5th website - they are amazing! At weddings believed laughing we have just launched our 5th website! You guys rock"',
    rating: 4.5,
  },
  {
    user: {
      avatar: avatar10,
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    comment:
      '"I am really satisfied with my service. Thanks to service, we have just launched our 5th website! You guys rock!"',
    rating: 5,
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    comment:
      '"Timed voice share led him to widen noisy young. At weddings believed laughing."',
    rating: 5,
  },
  {
    user: {
      avatar: avatar11,
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    comment: '"I am really satisfied with my service. You guys rock!"',
    rating: 3.5,
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    comment:
      '"We have just launched our 5th website - they are amazing! At weddings believed laughing we have just launched our 5th website! You guys rock"',
    rating: 4,
  },
]
