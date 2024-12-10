import { Component } from '@angular/core'
import { supportLinks } from '../../data'

@Component({
  selector: 'center-detail-support-link',
  standalone: true,
  imports: [],
  templateUrl: './support-link.component.html',
  styles: ``,
})
export class SupportLinkComponent {
  supportList = supportLinks
}
