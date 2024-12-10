import {
  bagIcon,
  bookIcon,
  electronicIcon,
  fashionIcon,
  gameIcon,
  mobileIcon,
} from '@public/assets/data/icons'
import { ClientType } from './types'
import { SafeHtml } from '@angular/platform-browser'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'
const client6 = 'assets/images/client/06.svg'
const client7 = 'assets/images/client/07.svg'
const client8 = 'assets/images/client/08.svg'

export type CategoryType = {
  id: string
  icon: string
  name: string
  url: string
  sanitizedIcon?: SafeHtml
}

export type ShopFeatureType = {
  title: string
  description: string
  icon: string
  variantClassName: string
}

export const featuredCategoriesData: CategoryType[] = [
  {
    id: '1',
    name: 'Fashion',
    icon: fashionIcon,
    url: '',
  },
  {
    id: '2',
    name: 'Electronics',
    icon: electronicIcon,
    url: '',
  },
  {
    id: '3',
    name: 'Games',
    icon: gameIcon,
    url: '',
  },
  {
    id: '4',
    name: 'Books',
    icon: bookIcon,
    url: '',
  },
  {
    id: '5',
    name: 'Mobiles',
    icon: mobileIcon,
    url: '',
  },
  {
    id: '6',
    name: 'Bags',
    icon: bagIcon,
    url: '',
  },
]

export const shopFeatures: ShopFeatureType[] = [
  {
    title: 'Fast and reliable delivery',
    description:
      'Ensure timely and dependable delivery services to meet customer expectations.',
    icon: 'bi-lightning-charge-fill',
    variantClassName: 'bg-info text-info',
  },
  {
    title: 'Package tracking',
    description:
      'Offer real-time tracking information, so customers can monitor the status of their shipments.',
    icon: 'bi-radar',
    variantClassName: 'bg-warning text-warning',
  },
  {
    title: 'Returns and exchanges',
    description:
      'Clearly outline your return and exchange policy, making it easy for customers to initiate returns.',
    icon: 'bi-fire',
    variantClassName: 'bg-danger text-danger',
  },
  {
    title: 'Customer support',
    description:
      'Provide responsive customer support to address shipping-related queries and issues.',
    icon: 'bi-headset',
    variantClassName: 'bg-primary text-primary ',
  },
]

export const brands: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client6 },
  { image: client7 },
  { image: client8 },
]
