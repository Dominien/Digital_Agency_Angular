import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    Footer1Component,
    RouterLink,
  ],
  templateUrl: './error-404.component.html',
  styles: ``,
})
export class Error404Component {}
