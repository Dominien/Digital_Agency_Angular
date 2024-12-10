import { User } from '@/app/common/user'

export type PartnerType = {
  icon: string
  image?: string
  name?: string
  externalLink?: string
  url?: string
}

export type StatisticType = {
  title: string
  stat: number
  description?: string
  prefix?: string
  suffix?: string
}

export type FeatureType = {
  icon: string
  image?: string
  title: string
  description?: string
}

export type PricingPlanType = {
  icon?: string
  badge?: string
  title?: string
  description?: string
  price: number
  features: FeatureType[]
  url?: string
}

export type PricingType = {
  duration: 'week' | 'month' | 'year'
  plans: PricingPlanType[]
}

export type TestimonialType = {
  userId?: User['id']
  user: User
  title?: string
  comment: string
  rating?: number
}
