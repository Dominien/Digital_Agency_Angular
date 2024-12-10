import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { ServicesComponent } from './components/services/services.component'
import { AboutComponent } from './components/about/about.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { CaseStudiesComponent } from './components/case-studies/case-studies.component'
import { ApprochesComponent } from './components/approches/approches.component'
import { TeamComponent } from './components/team/team.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer5Component } from '@/app/components/footer/footer5/footer5.component'

@Component({
  selector: 'app-seoagency',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    ServicesComponent,
    HorizontalMenuComponent,
    HeroComponent,
    AboutComponent,
    TestimonialComponent,
    CaseStudiesComponent,
    ApprochesComponent,
    TeamComponent,
    CtaComponent,
    Footer5Component,
  ],
  templateUrl: './seoagency.component.html',
  styles: ``,
})
export class SEOAgencyComponent {}
