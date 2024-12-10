import type { User } from '@/app/common/user'

const blogImg1 = 'assets/images/blog/4by3/01.jpg'
const blogImg2 = 'assets/images/blog/4by3/02.jpg'
const blogImg3 = 'assets/images/blog/4by3/03.jpg'
const blogImg4 = 'assets/images/blog/4by3/04.jpg'
const blogImg5 = 'assets/images/blog/4by3/05.jpg'

export type BlogType = {
  title: string
  publishedBy: User
  image: string
}

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    image: blogImg1,
  },
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg2,
  },
  {
    title: 'Effortless Web Development with Mizzle',
    publishedBy: {
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    image: blogImg3,
  },
  {
    title: 'Ten questions you should answer truthfully.',
    publishedBy: {
      firstName: 'Louis',
      lastName: 'Crawford',
    },
    image: blogImg4,
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    image: blogImg5,
  },
]
