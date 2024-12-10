import { Component } from '@angular/core'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HeroComponent } from './components/hero/hero.component'
import { VideoImageComponent } from './components/video-image/video-image.component'
import { BenefitsComponent } from './components/benefits/benefits.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { StepsComponent } from './components/steps/steps.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-service-single',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    VideoImageComponent,
    BenefitsComponent,
    StepsComponent,
    PricingComponent,
    CtaComponent,
    Footer1Component,
  ],
  templateUrl: './service-single.component.html',
  styles: ``,
})
export class ServiceSingleComponent {}
