import { Component } from '@angular/core'
import { supportLinks } from '../../data'

@Component({
  selector: 'help-support-link',
  standalone: true,
  imports: [],
  templateUrl: './support-link.component.html',
  styles: ``,
})
export class SupportLinkComponent {
  supportList = supportLinks
}
