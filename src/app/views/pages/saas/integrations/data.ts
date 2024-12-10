const github = 'assets/images/elements/github.svg'
const googleDrive = 'assets/images/elements/google-drive.svg'
const mailchimp = 'assets/images/elements/mailchimp.svg'
const reddit = 'assets/images/elements/reddit.svg'
const shopify = 'assets/images/elements/shopify.svg'
const slack = 'assets/images/elements/slack.svg'
const webflow = 'assets/images/elements/webflow.svg'
const dropbox = 'assets/images/elements/dropbox.svg'

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
  {
    name: 'Mailchimp',
    description:
      'Integrating with data analysis tools allows for deeper segmentation and personalized messaging.  ',
    image: mailchimp,
    url: '/saas/integration-single',
  },
  {
    name: 'Shopify',
    description:
      'Shopify employs Git, a distributed version control system, to track changes to code over time. ',
    image: shopify,
    url: '/saas/integration-single',
  },
  {
    name: 'Slack',
    description:
      'Integrating Slack with project management tools like Trello, Asana, or Jira enables teams to receive.',
    image: slack,
    url: '/saas/integration-single',
  },
  {
    name: 'Drive',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time. ',
    image: googleDrive,
    url: '/saas/integration-single',
  },
  {
    name: 'Webflow',
    description:
      'Integrating Webflow with CRM systems like HubSpot or Salesforce enables seamless data synchronization.',
    image: webflow,
    url: '/saas/integration-single',
  },
]
