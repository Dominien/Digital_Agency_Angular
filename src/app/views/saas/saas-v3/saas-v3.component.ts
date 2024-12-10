import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { StatisticsComponent } from './components/statistics/statistics.component'
import { FeaturesComponent } from './components/features/features.component'
import { CTAComponent } from './components/cta/cta.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { IntegrationComponent } from './components/integration/integration.component'
import { Footer6Component } from '@/app/components/footer/footer6/footer6.component'

@Component({
  selector: 'app-saas-v3',
  standalone: true,
  imports: [
    HeroComponent,
    PricingComponent,
    TestimonialsComponent,
    StatisticsComponent,
    FeaturesComponent,
    CTAComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    IntegrationComponent,
    Footer6Component,
  ],
  templateUrl: './saas-v3.component.html',
  styles: ``,
})
export class SaasV3Component {}
