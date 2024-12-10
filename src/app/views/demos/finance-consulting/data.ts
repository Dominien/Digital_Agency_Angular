import {
  barChartIcon,
  dollarIcon,
  donutChartIcon,
  homeIcon,
  stackIcon,
} from '@public/assets/data/icons'
import { ClientType, ServiceType, WorkFlowStepType } from './types'

const client1 = 'assets/images/client/01.svg'
const client2 = 'assets/images/client/02.svg'
const client3 = 'assets/images/client/03.svg'
const client4 = 'assets/images/client/04.svg'
const client5 = 'assets/images/client/05.svg'

export const services: ServiceType[] = [
  {
    title: 'Financial planning',
    features: [
      { icon: 'bi-patch-check', title: 'Personalized Financial Assessment' },
      { icon: 'bi-patch-check', title: 'Customized Goal Setting' },
      { icon: 'bi-patch-check', title: 'Tailored Financial Roadmap' },
    ],
    icon: donutChartIcon,
  },
  {
    title: 'Retirement planning',
    features: [
      { icon: 'bi-patch-check', title: 'Income and Expense Analysis' },
      { icon: 'bi-patch-check', title: 'Tailored Investment Strategy' },
      { icon: 'bi-patch-check', title: 'Retirement Goal Setting' },
    ],
    icon: barChartIcon,
  },
  {
    title: 'Tax planning and optimization',
    features: [
      { icon: 'bi-patch-check', title: 'Strategic Tax Planning Strategies' },
      { icon: 'bi-patch-check', title: 'Tax-Efficient Investment Guidance' },
    ],
    icon: stackIcon,
  },
  {
    title: 'Estate planning',
    features: [
      { icon: 'bi-patch-check', title: 'Wills and Trusts' },
      { icon: 'bi-patch-check', title: 'Asset Protection Strategies' },
      { icon: 'bi-patch-check', title: 'Succession Planning' },
    ],
    icon: homeIcon,
  },
  {
    title: 'Management and insurance',
    features: [
      { icon: 'bi-patch-check', title: 'Risk Assessment and Analysis' },
      { icon: 'bi-patch-check', title: 'Customized Insurance' },
      { icon: 'bi-patch-check', title: 'Claims Management Support' },
    ],
    icon: dollarIcon,
  },
]

export const workflowSteps: WorkFlowStepType[] = [
  {
    title: 'Personalized approach',
    description: 'Receive tailored financial solutions your needs and goals.',
    icon: 'bi-rocket-takeoff',
  },
  {
    title: 'Expert guidance',
    description: 'Benefit from the expertise of seasoned a deep understanding.',
    icon: 'bi-gem',
  },
  {
    title: 'Client-centric focus',
    description: 'Enjoy exceptional service focused long-term relationships.',
    icon: 'bi-cup-straw',
  },
  {
    title: 'Comprehensive solutions',
    description: 'Access a wide range of services under one investment',
    icon: 'bi-bug',
  },
]

export const investors: ClientType[] = [
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client4 },
  { image: client5 },
  { image: client1 },
]
