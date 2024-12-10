import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer8Component } from '@/app/components/footer/footer8/footer8.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-shop-layout',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    RouterModule,
    Footer8Component,
  ],
  template: `
    <sticky-header-component headerClass="header-sticky header-absolute">
      <app-horizontal-menu
        ulClassName="ms-xl-5"
        [showSearchInput]="true"
        [showShoppingCart]="true"
      />
    </sticky-header-component>

    <main>
      <router-outlet />
    </main>

    <app-footer8 />
  `,
  styles: ``,
})
export class ShopLayoutComponent {}
