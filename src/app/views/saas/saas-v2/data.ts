const mailchimp = 'assets/images/elements/mailchimp.svg'
const slack = 'assets/images/elements/slack.svg'
const webflow = 'assets/images/elements/webflow.svg'
const shopify = 'assets/images/elements/shopify.svg'
const reddit = 'assets/images/elements/reddit.svg'
const microsoft = 'assets/images/elements/microsoft.svg'
const bootstrap = 'assets/images/elements/bootstrap.svg'
const dropbox = 'assets/images/elements/dropbox.svg'
const gicon = 'assets/images/elements/gicon.svg'
const github = 'assets/images/elements/github.svg'
const googleDrive = 'assets/images/elements/google-drive.svg'

const team2 = 'assets/images/team/02.jpg'
const team3 = 'assets/images/team/03.jpg'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'
const client7 = 'assets/images/client/07.svg'

import { ToolType, PricingType, TestimonialType, ClientType } from './types'

export const integrations: ToolType[] = [
  {
    image: mailchimp,
  },
  {
    image: slack,
  },
  {
    image: webflow,
  },
  {
    image: shopify,
  },
  {
    image: reddit,
  },
  {
    image: microsoft,
  },
  {
    image: bootstrap,
  },
  {
    image: dropbox,
  },
  {
    image: gicon,
  },
  {
    image: github,
  },
  {
    image: googleDrive,
  },
]

export const pricingData1: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        title: 'Customization',
        description:
          'Our essential plan is self-service solution for businesses to handle website messaging and personalization',
        price: 25,
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        title: 'Customization',
        description:
          'Our essential plan is self-service solution for businesses to handle website messaging and personalization',
        price: 20,
      },
    ],
  },
]

export const pricingData2: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        title: 'Boss mode',
        description:
          'In no impression, assistance contrasted Manners she wishing justice.',
        price: 299,
        features: [
          { icon: 'bi-patch-check-fill', title: 'Unlimited monthly visitors' },
          { icon: 'bi-patch-check-fill', title: 'Dedicated SEO strategists' },
          { icon: 'bi-patch-check-fill', title: 'Google Docs style editors' },
          {
            icon: 'bi-patch-check-fill',
            title: 'Basic chat and email support',
          },
          {
            icon: 'bi-patch-check-fill',
            title: 'AI powered product recommendation engine',
          },
        ],
      },
    ],
  },
  {
    duration: 'year',
    plans: [
      {
        title: 'Boss mode',
        description:
          'In no impression, assistance contrasted Manners she wishing justice.',
        price: 250,
        features: [
          { icon: 'bi-patch-check-fill', title: 'Unlimited monthly visitors' },
          { icon: 'bi-patch-check-fill', title: 'Dedicated SEO strategists' },
          { icon: 'bi-patch-check-fill', title: 'Google Docs style editors' },
          {
            icon: 'bi-patch-check-fill',
            title: 'Basic chat and email support',
          },
          {
            icon: 'bi-patch-check-fill',
            title: 'AI powered product recommendation engine',
          },
        ],
      },
    ],
  },
]

export const testimonials: TestimonialType[] = [
  {
    title: '"Mizzle is essential tool for me and my team"',
    comment:
      "The chatbot can be personalized to match the brand voice and tone, making the company's customer support team.",
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      role: 'Head of marketing',
      avatar: team3,
    },
    rating: 4.5,
  },
  {
    title: '"Transformed My Agency\'s Results"',
    comment:
      "I can't say enough about the impact this platform has had on my agency. The automation tools, project management features, and seamless collaboration have transformed the way we work. ",
    user: {
      firstName: 'Allen',
      lastName: 'Smith',
      role: 'Digital Marketing Agency Owner',
      avatar: team2,
    },
    rating: 4.5,
  },
]

export const clients: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client7 },
]
