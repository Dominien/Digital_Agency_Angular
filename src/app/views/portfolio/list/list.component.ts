import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { portfolioLists } from './data'
import { CommonModule } from '@angular/common'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    CommonModule,
    NgbPaginationModule,
    Footer1Component,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  portfolioLists = portfolioLists

  page = 2
}
