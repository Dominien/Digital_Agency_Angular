import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { BannerComponent } from './components/banner/banner.component'
import { ContentComponent } from './components/content/content.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { LocationComponent } from './components/location/location.component'
import { FaqsComponent } from './components/faqs/faqs.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'

@Component({
  selector: 'app-about-v2',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BannerComponent,
    ContentComponent,
    TestimonialsComponent,
    LocationComponent,
    FaqsComponent,
    Footer2Component,
  ],
  templateUrl: './about-v2.component.html',
  styles: ``,
})
export class AboutV2Component {}
