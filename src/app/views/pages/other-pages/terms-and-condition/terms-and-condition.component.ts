import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { DetailsComponent } from './components/details/details.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-terms-and-condition',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    DetailsComponent,
    CtaComponent,
    Footer1Component,
  ],
  templateUrl: './terms-and-condition.component.html',
  styles: ``,
})
export class TermsAndConditionComponent {}
