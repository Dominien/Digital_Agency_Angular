import { HorizontalMenuComponent } from '@/app/components/app-menu/components/horizontal-menu/horizontal-menu.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { DetailComponent } from './components/detail/detail.component'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'

@Component({
  selector: 'app-integrations-single',
  standalone: true,
  imports: [
    StickyHeaderComponent,
    HorizontalMenuComponent,
    DetailComponent,
    Footer1Component,
  ],
  templateUrl: './integrations-single.component.html',
  styles: ``,
})
export class IntegrationsSingleComponent {}
