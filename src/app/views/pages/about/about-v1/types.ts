import type { SafeHtml } from '@angular/platform-browser'

export type StatisticType = {
  title: string
  stat: number
  suffix: string
}

export type FeatureType = {
  title: string
  description: string
  icon: string
  sanitizedIcon?: SafeHtml
}

export type MemberType = {
  name: string
  role: string
  image: string
}
