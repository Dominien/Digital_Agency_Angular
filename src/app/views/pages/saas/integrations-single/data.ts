const dropbox = '/assets/images/elements/dropbox.svg'
const github = 'assets/images/elements/github.svg'
const reddit = 'assets/images/elements/reddit.svg'

export type ToolType = {
  icon?: string
  image?: string
  name?: string
  description?: string
  url: string
  externalLink?: string
}

export const integrations: ToolType[] = [
  {
    name: 'Github',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: github,
    url: '/saas/integration-single',
  },
  {
    name: 'Dropbox',
    description:
      'Integrating Dropbox with backup solutions can provide an additional layer of data protection.',
    image: dropbox,
    url: '/saas/integration-single',
  },
  {
    name: 'Reddit',
    description:
      'With Reddit integration, you can easily share Reddit posts or comments on other like blogs or websites.',
    image: reddit,
    url: '/saas/integration-single',
  },
]
