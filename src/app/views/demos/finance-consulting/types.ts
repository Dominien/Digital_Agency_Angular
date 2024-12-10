import { SafeHtml } from '@angular/platform-browser'

export type ServiceType = {
  icon: string
  image?: string
  title: string
  description?: string
  url?: string
  features: {
    icon: string
    title: string
  }[]
  sanitizedIcon?: SafeHtml
}

export type WorkFlowStepType = {
  image?: string
  stepNumber?: number
  icon: string
  title: string
  description: string
}

export type ClientType = {
  icon?: string
  image?: string
  name?: string
  externalLink?: string
  url?: string
}
