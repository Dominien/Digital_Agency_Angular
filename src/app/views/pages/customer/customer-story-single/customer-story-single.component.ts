import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { ContentComponent } from './components/content/content.component'
import { RelatedStoriesComponent } from './components/related-stories/related-stories.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-customer-story-single',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    ContentComponent,
    RelatedStoriesComponent,
    Footer1Component,
  ],
  templateUrl: './customer-story-single.component.html',
  styles: ``,
})
export class CustomerStorySingleComponent {}
