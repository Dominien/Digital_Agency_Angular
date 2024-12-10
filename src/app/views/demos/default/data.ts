import { credits } from '@/app/common/constants'

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  url?: string
}

export type ServiceType = {
  title: string
  description: string
  icon: string
  url?: string
}

export type TestimonialType = {
  userId?: User['id']
  user?: User
  title?: string
  comment: string
  rating: number
}

export type User = {
  id?: string
  avatar?: string
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
  role?: string
  token?: string
}

const client1Img = 'assets/images/client/01.svg'
const client2Img = 'assets/images/client/02.svg'
const client3Img = 'assets/images/client/03.svg'
const client4Img = 'assets/images/client/04.svg'
const client5Img = 'assets/images/client/05.svg'
const avatar1 = 'assets/images/avatar/01.jpg'
const avatar2 = 'assets/images/avatar/02.jpg'
const avatar3 = 'assets/images/avatar/03.jpg'
const avatar5 = 'assets/images/avatar/05.jpg'

export const clientData: ClientType[] = [
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
  {
    image: client1Img,
  },
  {
    image: client2Img,
  },
  {
    image: client3Img,
  },
  {
    image: client4Img,
  },
  {
    image: client5Img,
  },
]

export const services: ServiceType[] = [
  {
    title: 'Digital Marketing',
    description: 'Growing brands online through digital channels.',
    icon: 'bi-stack',
  },
  {
    title: 'Product Design',
    description: 'Creating products that users love and businesses need.',
    icon: 'bi-boxes',
  },
  {
    title: 'Web Design',
    description:
      'Designing websites that are visually appealing & user-friendly.',
    icon: 'bi-circle-square',
  },
  {
    title: 'UI/UX Design',
    description:
      'Creating user interfaces that are both efficient and enjoyable.',
    icon: 'bi-vector-pen',
  },
  {
    title: 'Business Strategy',
    description: 'Developing and executing plans to achieve business goals.',
    icon: 'bi-briefcase',
  },
  {
    title: 'Research',
    description: 'Gathering and analyzing data to inform decision-making.',
    icon: 'bi-binoculars',
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    icon: 'bi-code-slash',
  },
  {
    title: 'Brand Design',
    description: 'Creating brands that are unique, memorable, and meaningful.',
    icon: 'bi-bullseye',
  },
]

export const userData: User[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'Dennis',
    lastName: 'Barrett',
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'Carolyn',
    lastName: 'Ortiz',
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: userData[0],
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4.5,
  },
  {
    user: userData[1],
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4,
  },

  {
    user: userData[2],
    comment:
      credits.name +
      ' helped us create a stunning website that reflects our brand perfectly.',
    rating: 5,
  },
  {
    user: userData[3],
    comment:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.',
    rating: 4.5,
  },
]
