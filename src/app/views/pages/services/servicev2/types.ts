import type { SafeHtml } from '@angular/platform-browser'

export type FeatureType = {
  title: string
  description: string
  icon: string
  sanitizedIcon?: SafeHtml
}

export type FAQType = {
  question: string
  answer: string
}
