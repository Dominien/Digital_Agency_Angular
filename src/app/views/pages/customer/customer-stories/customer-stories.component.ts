import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { BannerComponent } from './components/banner/banner.component'
import { StoriesComponent } from './components/stories/stories.component'
import { Stories2Component } from './components/stories2/stories2.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-customer-stories',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BannerComponent,
    StoriesComponent,
    Stories2Component,
    CtaComponent,
    Footer1Component,
  ],
  templateUrl: './customer-stories.component.html',
  styles: ``,
})
export class CustomerStoriesComponent {}
