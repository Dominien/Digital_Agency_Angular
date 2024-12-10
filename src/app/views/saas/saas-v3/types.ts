import { SafeHtml } from '@angular/platform-browser'

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  externalLink?: string
  url?: string
}

export type StatisticType = {
  title: string
  description?: string
  stat: number
  prefix?: string
  suffix?: string
}

export type FeatureType = {
  icon: string
  image?: string
  title: string
  description?: string
  url?: string
  sanitizedIcon?: SafeHtml
}
