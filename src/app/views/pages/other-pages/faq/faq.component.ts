import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { FaqsComponent } from './components/faqs/faqs.component'
import { ActionboxComponent } from './components/actionbox/actionbox.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    FaqsComponent,
    ActionboxComponent,
    Footer1Component,
  ],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {}
