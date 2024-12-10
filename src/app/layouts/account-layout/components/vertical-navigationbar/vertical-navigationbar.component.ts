import { Component, inject } from '@angular/core'
import { NavigationStart, Router, RouterLink } from '@angular/router'
import {
  NgbActiveOffcanvas,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { ACCOUNT_VERTICAL_MENU_ITEMS } from '@public/assets/data/menu-items'

@Component({
  selector: 'account-vertical-navigationbar',
  standalone: true,
  imports: [RouterLink, NgbTooltipModule],
  templateUrl: './vertical-navigationbar.component.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class VerticalNavigationbarComponent {
  currentPath!: string
  menuItems = ACCOUNT_VERTICAL_MENU_ITEMS

  activeOffcanvas = inject(NgbActiveOffcanvas)
  private router = inject(Router)

  ngOnInit(): void {
    this.currentPath = window.location.pathname

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentPath = event.url
      }
    })
  }
}
