export type ClientType = {
  icon?: string
  image?: string
  name?: string
  url?: string
}

export type ServiceType = {
  icon: string
  image?: string
  title: string
  description?: string
  url?: string
  sanitizedIcon?: SafeHtml
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
export type FeatureType = {
  title: string
  description: string
}

export type ProjectType = {
  image: string
  name: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  createdBy?: {
    user?: User
    team?: User[]
  }
  createdAt?: string
  status?: 'published' | 'private'
}

export type RecentProjectType = {
  categoryClass: string
} & ProjectType

export type CompanyType = {
  icon?: string
  image?: string
  name: string
  externalLink?: string
  url?: string
}

type AuthorType = {
  company?: CompanyType
} & User

export type TestimonialType = {
  userId?: AuthorType['id']
  user: AuthorType
  title?: string
  comment: string
  rating?: number
}

export type BlogType = {
  image: string
  title: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: AuthorType
  publishedAt?: string
}
import { credits } from '@/app/common/constants'
import { SafeHtml } from '@angular/platform-browser'
import {
  businessIcon,
  businessIcon2,
  designIcon,
  marketingIcon,
  strategicIcon,
  taxIcon,
} from '@public/assets/data/icons'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const portfolioImg1 = 'assets/images/portfolio/masonry/01.jpg'
const portfolioImg2 = 'assets/images/portfolio/masonry/02.jpg'
const portfolioImg3 = 'assets/images/portfolio/masonry/03.jpg'
const portfolioImg4 = 'assets/images/portfolio/masonry/04.jpg'
const portfolioImg5 = 'assets/images/portfolio/masonry/05.jpg'
const portfolioImg6 = 'assets/images/portfolio/masonry/06.jpg'

const avatar5 = 'assets/images/avatar/05.jpg'
const avatar7 = 'assets/images/avatar/07.jpg'
const client6 = 'assets/images/client/06.svg'

const blogImg1 = 'assets/images/blog/4by3/01.jpg'
const blogImg2 = 'assets/images/blog/4by3/02.jpg'
const blogImg3 = 'assets/images/blog/4by3/03.jpg'
const blogImg4 = 'assets/images/blog/4by3/04.jpg'
const blogImg5 = 'assets/images/blog/4by3/05.jpg'

export const clientsData: ClientType[] = [
  {
    image: client1,
  },
  {
    image: client2,
  },
  {
    image: client3,
  },
  {
    image: client4,
  },
]

export const services: ServiceType[] = [
  {
    title: 'Business analysis',
    description:
      "Our Business Analysis service is the first step in understanding your organization's current state.",
    icon: businessIcon,
  },
  {
    title: 'Strategic planning',
    description:
      'We work closely with you to develop a tailored roadmap that aligns with your goals and objectives.',
    icon: strategicIcon,
  },
  {
    title: 'Marketing strategy',
    description:
      "Our Marketing Strategy service is designed to elevate your brand's visibility and engagement.",
    icon: marketingIcon,
  },
  {
    title: 'Experience design',
    description:
      'From website design to app development, we blend aesthetics with usability to leave a lasting impression.',
    icon: designIcon,
  },
  {
    title: 'Business consulting',
    description:
      'Our consultants become your trusted advisors on the path to success.',
    icon: businessIcon2,
  },
  {
    title: 'Tax consultant',
    description:
      "We're here to optimize your tax strategy, so you can focus on what matters most to your business.",
    icon: taxIcon,
  },
]

export const projects: RecentProjectType[] = [
  {
    name: 'Dynamic Workflows Website',
    category: 'UI/UX design',
    categoryClass: 'marketing business brand',
    image: portfolioImg1,
    url: '/portfolio/case-study/v1',
  },
  {
    name: 'ElevateTech Redesign',
    category: 'Brand design',
    categoryClass: 'brand ui',
    image: portfolioImg4,
    url: '/portfolio/case-study/v1',
  },
  {
    name: 'User-Centric Redesign',
    category: 'Web design',
    categoryClass: 'business design brand',
    image: portfolioImg2,
    url: '/portfolio/case-study/v1',
  },
  {
    name: 'Sustainability Initiative',
    category: 'Business dev',
    categoryClass: 'design marketing',
    image: portfolioImg5,
    url: '/portfolio/case-study/v1',
  },
  {
    name: 'E-commerce Expansion',
    category: 'Digital Marketing',
    categoryClass: 'business design',
    image: portfolioImg6,
    url: '/portfolio/case-study/v1',
  },
  {
    name: 'Social Media Engagement',
    category: 'UI/UX design',
    categoryClass: 'ui',
    image: portfolioImg3,
    url: '/portfolio/case-study/v1',
  },
]

export const testimonials: TestimonialType[] = [
  {
    comment:
      'Your assistance has been incredibly helpful. I appreciate the prompt and insightful responses, which have made my task much easier. Thank you for the great support',
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client6,
      },
      role: 'Ceo and manager',
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
  },
  {
    comment:
      'It consistently delivers accurate and well-crafted responses, saving me a lot of time and effort. Thank you for this invaluable resource!',
    user: {
      avatar: avatar7,
      company: {
        name: 'Blogzine',
        image: client4,
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client2,
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
  },
]

export const features: FeatureType[] = [
  {
    title: 'Real-time Collaboration',
    description:
      'Collaborate seamlessly with team members in real time. Share drafts, make edits, and work together efficiently to create content that meets your goals. Sight House has sex never. No visit raising gravity outward subject.',
  },
  {
    title: 'Robust API Integration',
    description:
      'Our platform offers robust API integration options, allowing you to integrate our content generation capabilities into your existing software, apps, or platforms.',
  },
  {
    title: 'Privacy and Security',
    description:
      "We prioritize your data's security and privacy. Our platform adheres to the highest standards of data protection to ensure your content remains confidential and secure.",
  },
  {
    title: 'Cost-Effective Solutions',
    description:
      'We offer flexible pricing options to suit your needs, ensuring you get the most value = our platform without breaking the bank.',
  },
  {
    title: 'Data Analytics',
    description:
      'Offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me..',
  },
]

export const blogs: BlogType[] = [
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
    },
    image: blogImg1,
    url: '/blog/single/v1',
  },
  {
    title: 'Bootstrap Mastery: Designing Stunning Websites',
    publishedBy: {
      firstName: 'Dennis',
      lastName: 'Barrett',
    },
    image: blogImg2,
    url: '/blog/single/v1',
  },
  {
    title: 'Interactive Web Design with Bootstrap and ' + credits.name,
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg3,
    url: '/blog/single/v1',
  },
  {
    title: 'Effortless Web Development with Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg4,
    url: '/blog/single/v1',
  },
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz',
    },
    image: blogImg5,
    url: '/blog/single/v1',
  },
]
