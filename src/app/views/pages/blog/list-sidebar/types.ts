import type { User } from '@/app/common/user'

export type BlogCategoryType = {
  category: string
  image: string
}

export type BlogType = {
  title: string
  publishedBy: User
  category: string
  image: string
  isSponsored?: boolean
}
