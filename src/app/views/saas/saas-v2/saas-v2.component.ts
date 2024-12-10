import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { CTAComponent } from './components/cta/cta.component'
import { FeaturesComponent } from './components/features/features.component'
import { IntegrationComponent } from './components/integration/integration.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { StepsComponent } from './components/steps/steps.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-saas-v2',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    CTAComponent,
    FeaturesComponent,
    IntegrationComponent,
    PricingComponent,
    StepsComponent,
    TestimonialsComponent,
    Footer1Component,
  ],
  templateUrl: './saas-v2.component.html',
  styles: ``,
})
export class SaasV2Component {}
