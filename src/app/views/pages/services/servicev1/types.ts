import type { SafeHtml } from '@angular/platform-browser'

export type ServiceType = {
  title: string
  description: string
  icon: string
  sanitizedIcon?: SafeHtml
}

export type FeatureType = {
  title: string
  description: string
  icon: string
}
