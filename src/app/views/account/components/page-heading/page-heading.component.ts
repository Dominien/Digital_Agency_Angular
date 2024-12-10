import { VerticalNavigationbarComponent } from '@/app/layouts/account-layout/components/vertical-navigationbar/vertical-navigationbar.component'
import { Component, inject, Input } from '@angular/core'
import {
  NgbActiveOffcanvas,
  NgbOffcanvas,
  NgbOffcanvasModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'account-page-heading',
  standalone: true,
  imports: [VerticalNavigationbarComponent, NgbOffcanvasModule],
  templateUrl: './page-heading.component.html',
})
export class PageHeadingComponent {
  @Input() heading: string = ''

  offcanvasService = inject(NgbOffcanvas)

  openMenu() {
    this.offcanvasService.open(VerticalNavigationbarComponent)
  }
}
