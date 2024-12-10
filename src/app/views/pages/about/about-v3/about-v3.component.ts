import { Component } from '@angular/core'
import { BannerComponent } from './components/banner/banner.component'
import { AboutContentComponent } from './components/about-content/about-content.component'
import { TeamComponent } from './components/team/team.component'
import { InstallationStepsComponent } from './components/installation-steps/installation-steps.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { CtaComponent } from './components/cta/cta.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer8Component } from '@/app/components/footer/footer8/footer8.component'

@Component({
  selector: 'app-about-v3',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BannerComponent,
    AboutContentComponent,
    TeamComponent,
    InstallationStepsComponent,
    TestimonialsComponent,
    CtaComponent,
    Footer8Component,
  ],
  templateUrl: './about-v3.component.html',
  styles: ``,
})
export class AboutV3Component {}
