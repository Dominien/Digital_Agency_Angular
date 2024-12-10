import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { AboutComponent } from './components/about/about.component'
import { ClientComponent } from './components/client/client.component'
import { register } from 'swiper/element'
import { ServicesComponent } from './components/services/services.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { CTAComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
register()

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    AppMenuComponent,
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    ClientComponent,
    ServicesComponent,
    PricingComponent,
    TestimonialComponent,
    CTAComponent,
    Footer1Component,
  ],
  templateUrl: './default.component.html',
  styles: ``,
})
export class DefaultComponent {}
