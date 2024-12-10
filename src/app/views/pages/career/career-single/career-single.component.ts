import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { CareerDetailComponent } from './components/career-detail/career-detail.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-career-single',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    CareerDetailComponent,
    CtaComponent,
    Footer1Component,
  ],
  templateUrl: './career-single.component.html',
  styles: ``,
})
export class CareerSingleComponent {}
