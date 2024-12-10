import { User } from '@/app/common/user'

export type StepType = {
  stepNumber: string
  title: string
  description: string
}

export type pricingPlanType = {
  duration: string
  price: number
  features: string[]
}

export type TestimonialType = {
  user: User
  comment: string
  rating: number
}
