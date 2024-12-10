import { currentYear } from '@/app/common/constants'

const visa = 'assets/images/elements/visa.svg'
const mastercard = 'assets/images/elements/mastercard.svg'
const paypal = 'assets/images/elements/paypal.svg'

export type PaymentType = {
  title: string
  subTitle: string
  image?: string
  icon?: string
}

export const paymentOptions: PaymentType[] = [
  {
    title: 'Visa ending in 1245',
    subTitle: 'Expiry 08/2024',
    image: visa,
  },
  {
    title: 'Mastercard ending in 1245',
    subTitle: 'Expiry 06/2024',
    image: mastercard,
  },
  {
    title: 'Pay using PayPal',
    subTitle: 'Fast, easy and secure',
    image: paypal,
  },
  {
    title: 'Cash on delivery',
    subTitle: 'You have to pay ' + currentYear + '25 for delivery.',
    icon: 'bi-truck',
  },
]
