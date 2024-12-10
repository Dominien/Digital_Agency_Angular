import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { AboutComponent } from './components/about/about.component'
import { ServicesComponent } from './components/services/services.component'
import { ShowcaseComponent } from './components/showcase/showcase.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { AwardsComponent } from './components/awards/awards.component'
import { BlogComponent } from './components/blog/blog.component'
import { Footer4Component } from '@/app/components/footer/footer4/footer4.component'

@Component({
  selector: 'app-design-agency',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ShowcaseComponent,
    TestimonialComponent,
    AwardsComponent,
    BlogComponent,
    Footer4Component,
  ],
  templateUrl: './design-agency.component.html',
  styles: ``,
})
export class DesignAgencyComponent {}
