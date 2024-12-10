import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { IntegrationsComponent } from './components/integrations/integrations.component'
import { TourVideoComponent } from './components/tour-video/tour-video.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { BlogsComponent } from './components/blogs/blogs.component'
import { StepsComponent } from './components/steps/steps.component'
import { FeaturesComponent } from './components/features/features.component'
import { TabFeatureComponent } from './components/tab-feature/tab-feature.component'
import { Footer6Component } from '@/app/components/footer/footer6/footer6.component'

@Component({
  selector: 'app-saas-v4',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    IntegrationsComponent,
    TourVideoComponent,
    TestimonialsComponent,
    BlogsComponent,
    StepsComponent,
    FeaturesComponent,
    TabFeatureComponent,
    Footer6Component,
  ],
  templateUrl: './saas-v4.component.html',
  styles: ``,
})
export class SaasV4Component {}
