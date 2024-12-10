import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component, inject } from '@angular/core'
import { productGrid } from '@public/assets/data/products'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component'
import {
  NgbActiveOffcanvas,
  NgbOffcanvas,
  NgbOffcanvasConfig,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    ProductCardComponent,
    FilterSidebarComponent,
    NgbPaginationModule,
  ],
  templateUrl: './grid.component.html',
  styles: ``,
  providers: [NgbActiveOffcanvas],
})
export class GridComponent {
  productGridList = productGrid

  public offCanvas = inject(NgbOffcanvas)
  openFilter() {
    this.offCanvas.open(FilterSidebarComponent, { position: 'end' })
  }
}
