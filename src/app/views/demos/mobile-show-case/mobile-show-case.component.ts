import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { CtaComponent } from './components/cta/cta.component'
import { AboutComponent } from './components/about/about.component'
import { FeaturesComponent } from './components/features/features.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { StepsComponent } from './components/steps/steps.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer7Component } from '@/app/components/footer/footer7/footer7.component'

@Component({
  selector: 'app-mobile-show-case',
  standalone: true,
  imports: [
    HeroComponent,
    CtaComponent,
    AboutComponent,
    FeaturesComponent,
    PricingComponent,
    StepsComponent,
    TestimonialComponent,
    StickyHeaderComponent,
    HorizontalMenuComponent,
    Footer7Component,
  ],
  templateUrl: './mobile-show-case.component.html',
  styles: ``,
})
export class MobileShowCaseComponent {}
