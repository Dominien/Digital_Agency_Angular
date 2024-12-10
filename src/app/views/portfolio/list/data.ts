const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'

const portfolio1 = 'assets/images/portfolio/list/01.jpg'
const portfolio2 = 'assets/images/portfolio/list/02.jpg'
const portfolio3 = 'assets/images/portfolio/list/03.jpg'
const portfolio4 = 'assets/images/portfolio/list/04.jpg'

export type PortfolioItemType = {
  title: string
  description: string
  year: number
  categories: string[]
  clientLogo: string
  image: string
  link: string
}

export const portfolioLists: PortfolioItemType[] = [
  {
    title: 'Bio Cosmetics',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2022,
    categories: ['Branding', 'Packaging', 'UI/UX design'],
    clientLogo: client4,
    image: portfolio2,
    link: '/portfolio/case-study/v2',
  },
  {
    title: 'Website Optimization for TechWave',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2021,
    categories: ['Branding', 'Packaging', 'UI/UX design'],
    clientLogo: client2,
    image: portfolio1,
    link: '/portfolio/case-study/v1',
  },
  {
    title: 'Cherry Studio',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2020,
    categories: ['Branding', 'Packaging', 'Development'],
    clientLogo: client1,
    image: portfolio3,
    link: '/portfolio/case-study/v2',
  },
  {
    title: 'Transforming Ideas into Reality',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2019,
    categories: ['Graphics', 'Development', 'UI/UX design'],
    clientLogo: client5,
    image: portfolio4,
    link: '/portfolio/case-study/v1',
  },
]
