import { User } from '@/app/common/user'
import { DateType } from '../../demos/digital-agency/types'

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  externalLink?: string
  url?: string
}

export type FeatureType = {
  icon?: string
  image?: string
  title: string
  description?: string
  url?: string
}

export type StatisticType = {
  title: string
  description?: string
  stat: number
  prefix?: string
  suffix?: string
}

export type PricingPlanType = {
  icon?: string
  badge?: string
  title?: string
  isPopular?: boolean
  description?: string
  price: number
  features: FeatureType[]
  url?: string
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}

export type BlogType = {
  image?: string
  title?: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: User
  publishedAt?: DateType
}
