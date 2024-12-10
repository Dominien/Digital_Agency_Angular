import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    RouterModule,
    Footer1Component,
  ],
  template: `
    <sticky-header-component headerClass="header-sticky header-absolute">
      <app-horizontal-menu
        ulClassName="mx-auto"
        [docShow]="true"
        [showSignUp]="true"
        [showBuyNow]="true"
      />
    </sticky-header-component>

    <main>
      <router-outlet />
    </main>
    <app-footer1 />
  `,
  styles: ``,
})
export class BlogLayoutComponent {}
