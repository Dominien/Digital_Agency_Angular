import { currency } from '@/app/common/constants'
import { Component, inject } from '@angular/core'
import {
  NgbAccordionModule,
  NgbActiveOffcanvas,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'product-filter-sidebar',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './filter-sidebar.component.html',
  styles: `
    :host {
      display: contents !important;
    }
  `,
})
export class FilterSidebarComponent {
  currency = currency
  activeOffcanvas = inject(NgbActiveOffcanvas)
}
