import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { CounterComponent } from './components/counter/counter.component'
import { JobListComponent } from './components/job-list/job-list.component'
import { ValueComponent } from './components/value/value.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    HeroComponent,
    CounterComponent,
    JobListComponent,
    ValueComponent,
    CtaComponent,
    Footer1Component,
  ],
  templateUrl: './career.component.html',
  styles: ``,
})
export class CareerComponent {}
