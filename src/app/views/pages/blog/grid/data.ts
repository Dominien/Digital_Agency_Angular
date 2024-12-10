import { credits } from '@/app/common/constants'
import type { BlogType } from './types'
const blog1 = 'assets/images/blog/01.jpg'
const blog2 = 'assets/images/blog/02.jpg'
const blog3 = 'assets/images/blog/03.jpg'

const blogImg1 = 'assets/images/blog/4by3/01.jpg'
const blogImg2 = 'assets/images/blog/4by3/02.jpg'
const blogImg3 = 'assets/images/blog/4by3/03.jpg'
const blogImg4 = 'assets/images/blog/4by3/04.jpg'
const blogImg5 = 'assets/images/blog/4by3/05.jpg'
const blogImg6 = 'assets/images/blog/4by3/06.jpg'
const blogImg7 = 'assets/images/blog/4by3/07.jpg'

export const blogSlides: BlogType[] = [
  {
    title: 'The Evolution of Branding: Unleashing Potential',
    publishedBy: {
      firstName: 'Frances',

      lastName: 'Guerrero',
    },
    category: 'Marketing',
    image: blog1,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
  {
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },

    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    category: 'Lifestyle',
    image: blog2,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
  {
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace',
    },

    title: 'Interactive Web Design with Bootstrap and ' + credits.name,
    category: 'Design',
    image: blog3,
    date: 'Nov 5, 2018',
    time: '4 min',
  },
]

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    description:
      'Consider your expertise, personal experiences, and what you can uniquely offer to your readers.',
    category: 'Technology',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    image: blogImg1,
  },
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    description:
      'By focusing on a niche, you can establish yourself as an authority and build a dedicated community.',
    category: 'Lifestyle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg2,
  },
  {
    title: 'Effortless Web Development with Mizzle',
    description:
      "Building a successful blog takes dedication. Don't be discouraged by slow growth in the early stages.",
    category: 'Marketing',
    publishedBy: {
      firstName: 'Lori',
      lastName: 'Stevens',
    },
    image: blogImg3,
  },
  {
    title: 'Ten questions you should answer truthfully.',
    description:
      'Remember, blogging is a continuous learning process, so stay open to new ideas.',
    category: 'Research',
    publishedBy: {
      firstName: 'Louis',
      lastName: 'Crawford',
    },
    image: blogImg4,
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    description:
      'Focus on creating valuable content, implementing and continuously improving your blog.',
    category: 'Design',
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace',
    },
    image: blogImg5,
  },
  {
    title: '5 investment doubts you should clarify',
    description:
      'Remember, blogging is a continuous learning process, so stay open to new ideas',
    category: 'Marketing',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed',
    },
    image: blogImg6,
  },
  {
    title: '10 things you need to know about Mizzle',
    description:
      'Consider your expertise, personal experiences, and what you can uniquely offer to your readers.',
    category: 'Technology',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    image: blogImg7,
  },
]
