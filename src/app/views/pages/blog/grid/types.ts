import type { User } from '@/app/common/user'

export type BlogType = {
  title: string
  description?: string
  publishedBy: User
  category: string
  image: string
  date?: string
  time?: string
}
