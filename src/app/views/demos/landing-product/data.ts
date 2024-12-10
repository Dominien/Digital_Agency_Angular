import { FeatureType, ProductType } from './types'

const product3 = 'assets/images/products/03.png'
const product4 = 'assets/images/products/04.png'
const product5 = 'assets/images/products/05.png'

export const features: FeatureType[] = [
  {
    icon: 'bi-patch-check-fill',
    title: 'Press once to play, pause or answer a phone call',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Press twice to skip forward',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Press three times to skip back',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Press and hold to switch between Active Noise Cancellation',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'Swipe up or down to adjust volume',
  },
]

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Airpods Drop 2',
    price: 305,
    sale: {
      type: 'percent',
      discount: 25,
    },
    images: [product3],
    url: '',
  },
  {
    id: '2',
    name: 'Airpods pro Drop',
    price: 350,
    images: [product4],
    url: '',
  },
  {
    id: '3',
    name: 'Airpods pro max',
    price: 350,
    sale: {
      type: 'percent',
      discount: 15,
    },
    images: [product5],
    url: '',
  },
  {
    id: '4',
    name: 'Airpods pro Drop',
    price: 350,
    images: [product4],
    url: '',
  },
  {
    id: '5',
    name: 'Airpods pro 2.0',
    price: 285,
    images: [product5],
    url: '',
  },
]

export const features2: FeatureType[] = [
  {
    title: 'Seamless Connectivity',
    description:
      'Effortlessly pair your AirPods with your devices for a hassle-free listening.',
    icon: 'bi-fire',
  },
  {
    title: 'Get flexible delivery',
    description: 'Get free delivery or pickup at your Airpods store.',
    icon: 'bi-truck',
  },
  {
    title: 'Accessories and Customization',
    description:
      'Explore a range of accessories and customization options to your AirPods.',
    icon: 'bi-earbuds',
  },
  {
    title: 'Worry-Free Warranty',
    description:
      'Rest easy with a comprehensive warranty that covers your AirPods against defects.',
    icon: 'bi-shield-fill-check',
  },
]
