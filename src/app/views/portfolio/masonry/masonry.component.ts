import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { categoriesData, portfolioMasonryData } from './data'
import { IsotopeDirective } from '@/app/components/isotope-directive '
import { CommonModule } from '@angular/common'
import Isotope from 'isotope-layout'
import { BreadcrumbComponent } from '@/app/components/breadcrumb/breadcrumb.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [
    HorizontalMenuComponent,
    StickyHeaderComponent,
    IsotopeDirective,
    CommonModule,
    BreadcrumbComponent,
    Footer2Component,
    RouterLink,
  ],
  templateUrl: './masonry.component.html',
  styles: ``,
})
export class MasonryComponent {
  private isotope!: Isotope
  categoriesData = categoriesData
  portfolioMasonryData = portfolioMasonryData
  AllportfolioMasonryData = portfolioMasonryData
  activeFilter: string = '*'
  @ViewChild(IsotopeDirective) isotopeDirective!: IsotopeDirective

  filterItems(filter: string): void {
    if (this.isotopeDirective) {
      this.activeFilter = filter
      this.isotopeDirective.arrangeIsotope(filter)
    }
  }
}
