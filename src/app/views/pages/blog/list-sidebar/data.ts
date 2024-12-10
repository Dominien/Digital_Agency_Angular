import type { BlogCategoryType, BlogType } from './types'

const blog1 = 'assets/images/blog/4by4/01.jpg'
const blog2 = 'assets/images/blog/4by4/02.jpg'
const blog3 = 'assets/images/blog/4by4/03.jpg'
const blog4 = 'assets/images/blog/4by4/04.jpg'
const blog5 = 'assets/images/blog/4by4/05.jpg'
const blog6 = 'assets/images/blog/4by4/06.jpg'
const blog7 = 'assets/images/blog/4by4/07.jpg'
const blog8 = 'assets/images/blog/4by4/08.jpg'
const blog9 = 'assets/images/blog/4by4/09.jpg'
const blog10 = 'assets/images/blog/4by4/10.jpg'

export const blogCategories: BlogCategoryType[] = [
  {
    category: 'Lifestyle',
    image: blog1,
  },
  {
    category: 'Technology',
    image: blog2,
  },
  {
    category: 'Design',
    image: blog3,
  },
  {
    category: 'Marketing',
    image: blog4,
  },
  {
    category: 'Research',
    image: blog5,
  },
]

export const blogs: BlogType[] = [
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    category: 'Technology',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blog6,
  },
  {
    title: '5 investment doubts you should clarify',
    category: 'Lifestyle',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed',
    },
    image: blog7,
    isSponsored: true,
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    category: 'Design',
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    image: blog8,
  },
  {
    title: 'Effortless Web Development with Mizzle',
    category: 'Marketing',
    publishedBy: {
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    image: blog9,
  },
  {
    title: 'Ten questions you should answer truthfully.',
    category: 'Research',
    publishedBy: {
      firstName: 'Louis',
      lastName: 'Crawford',
    },
    image: blog10,
  },
]
