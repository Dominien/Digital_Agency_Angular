import { User } from '@/app/common/user'

export type ToolType = {
  icon?: string
  image?: string
  name?: string
  description?: string
  url?: string
  externalLink?: string
}

export type FeatureType = {
  icon: string
  image?: string
  title: string
  description?: string
  url?: string
}

export type PricingPlanType = {
  icon?: string
  badge?: string
  title?: string
  isPopular?: boolean
  description?: string
  price: number
  features?: FeatureType[]
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

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  externalLink?: string
  url?: string
}
