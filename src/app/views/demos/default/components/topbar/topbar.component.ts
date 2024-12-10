import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'

@Component({
  selector: 'default-topbar',
  standalone: true,
  imports: [AppMenuComponent, StickyHeaderComponent, HorizontalMenuComponent],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {}
