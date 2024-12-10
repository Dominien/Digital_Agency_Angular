import { User } from '@/app/common/user'

export type MemberType = {
  socialMedia: {
    icon: string
    variant: string
  }[]
  user: User
}
