import { AppMenuComponent } from '@/app/components/app-menu/app-menu.component'
import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'

@Component({
  selector: 'creative-agency-topbar',
  standalone: true,
  imports: [StickyHeaderComponent, AppMenuComponent, HorizontalMenuComponent],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {}
