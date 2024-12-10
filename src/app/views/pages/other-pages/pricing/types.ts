export type FeatureType = {
  icon: string
  image?: string
  title: string
  description?: string
}

export type PricingPlanType = {
  icon: string
  badge?: string
  isPopular?: boolean
  title?: string
  description?: string
  price: number
  yearPrice: number
  features: FeatureType[]
  url?: string
}

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  externalLink?: string
  url?: string
}

export type FaqType = {
  question: string
  answer: string
}
