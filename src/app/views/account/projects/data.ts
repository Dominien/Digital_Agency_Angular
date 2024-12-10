const showcase2 = 'assets/images/portfolio/showcase/02.jpg'
const showcase4 = 'assets/images/portfolio/showcase/04.jpg'
const showcase3 = 'assets/images/portfolio/showcase/03.jpg'
const showcase5 = 'assets/images/portfolio/showcase/05.jpg'

export type ProjectType = {
  image: string
  title: string
  status: 'Published' | 'Private'
  category: string
}

export const projectsData: ProjectType[] = [
  {
    image: showcase2,
    title: 'Website Optimization for TechWave',
    status: 'Published',
    category: 'Web design',
  },
  {
    image: showcase4,
    title: 'Transforming Ideas into Reality',
    status: 'Published',
    category: 'Marketing',
  },
  {
    image: showcase3,
    title: 'The Art of Storytelling',
    status: 'Private',
    category: 'Graphics design',
  },
  {
    image: showcase5,
    title: 'UI/UX Enhancement for SnapMedia',
    status: 'Published',
    category: 'UI/UX design',
  },
]
