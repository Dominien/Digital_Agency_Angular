import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { JarallaxDirective } from '@/app/components/jarallax-directive.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { AboutComponent } from './components/about/about.component'
import { DigitalJourneyComponent } from './components/digital-journey/digital-journey.component'
import { HeroComponent } from './components/hero/hero.component'
import { ServicesComponent } from './components/services/services.component'
import { StepsComponent } from './components/steps/steps.component'
import { TourVideoComponent } from './components/tour-video/tour-video.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { StatisticsComponent } from './components/statistics/statistics.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { CTAComponent } from './components/cta/cta.component'
import { BlogsComponent } from './components/blogs/blogs.component'
import { Footer3Component } from '@/app/components/footer/footer3/footer3.component'

@Component({
  selector: 'app-digital-agency',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    DigitalJourneyComponent,
    StepsComponent,
    TourVideoComponent,
    JarallaxDirective,
    ProjectsComponent,
    StatisticsComponent,
    TestimonialsComponent,
    CTAComponent,
    BlogsComponent,
    Footer3Component,
  ],
  templateUrl: './digital-agency.component.html',
  styles: ``,
})
export class DigitalAgencyComponent {}
