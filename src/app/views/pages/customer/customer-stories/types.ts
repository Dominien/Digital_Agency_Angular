import { User } from '@/app/common/user'

export type StoryType = {
  title: string
  image: string
  companyLogo: string
}

export type CompanyType = {
  image: string
  name: string
}

type AuthorType = {
  company: CompanyType
} & User

export type TestimonialType = {
  user: AuthorType
  comment: string
}
