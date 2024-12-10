import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    HorizontalMenuComponent,
    StickyHeaderComponent,
    NgbPaginationModule,
    Footer1Component,
    RouterLink,
  ],
  templateUrl: './showcase.component.html',
  styles: ``,
})
export class ShowcaseComponent {
  page = 1
}
