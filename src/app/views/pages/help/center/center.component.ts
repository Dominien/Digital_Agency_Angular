import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FaqsComponent } from './components/faqs/faqs.component'
import { HelpTopicComponent } from './components/help-topic/help-topic.component'
import { SupportLinkComponent } from './components/support-link/support-link.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    FaqsComponent,
    HelpTopicComponent,
    SupportLinkComponent,
    Footer1Component,
  ],
  templateUrl: './center.component.html',
  styles: ``,
})
export class CenterComponent {}
