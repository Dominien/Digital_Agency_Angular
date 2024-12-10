import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { RatingComponent } from './components/rating/rating.component'
import { ServiceCardComponent } from './components/service-card/service-card.component'
import { WorkFlowComponent } from './components/work-flow/work-flow.component'
import { NewsLetterComponent } from './components/news-letter/news-letter.component'
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { ClientsComponent } from './components/clients/clients.component'
import { AboutComponent } from './components/about/about.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-finance-consulting',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    RatingComponent,
    ServiceCardComponent,
    WorkFlowComponent,
    NewsLetterComponent,
    ContactFormComponent,
    ClientsComponent,
    AboutComponent,
    Footer1Component,
  ],
  templateUrl: './finance-consulting.component.html',
  styles: ``,
})
export class FinanceConsultingComponent {}
