import { User } from '@/app/common/user'
import type { SafeHtml } from '@angular/platform-browser'

export type FeatureType = {
  title: string
  description: string
  icon: string
  sanitizedIcon?: SafeHtml
}

export type MemberType = {
  firstName: string
  lastName: string
  role: string
  image: string
}

export type StepType = {
  stepNumber: string
  title: string
}

type AuthorType = {
  companyName?: string
} & User

export type TestimonialType = {
  user: AuthorType
  comment: string
  rating: number
}
