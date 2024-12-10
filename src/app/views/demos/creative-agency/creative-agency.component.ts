import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { AboutComponent } from './components/about/about.component'
import { ServiceComponent } from './components/service/service.component'
import { ProjectcardComponent } from './components/projectcard/projectcard.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { FeaturesComponent } from './components/features/features.component'
import { BlogComponent } from './components/blog/blog.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'

@Component({
  selector: 'app-creative-agency',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    ProjectcardComponent,
    TestimonialComponent,
    FeaturesComponent,
    BlogComponent,
    Footer2Component,
  ],
  templateUrl: './creative-agency.component.html',
  styles: ``,
})
export class CreativeAgencyComponent {}
