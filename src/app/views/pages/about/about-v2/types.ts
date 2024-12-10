import { User } from '@/app/common/user'

export type CompanyType = {
  icon?: string
  image?: string
  name: string
  externalLink?: string
  url?: string
}

type AuthorType = {
  company?: CompanyType
} & User

export type TestimonialType = {
  user: AuthorType
  comment: string
  rating: number
}

export type LocationType = {
  name: string
  image: string
  address: string
  number: string
}

export type FAQType = {
  question: string
  answer: string
}
