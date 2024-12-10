import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  communityLinks,
  communityLinks2,
  contactDetails2,
  quickLinks2,
  quickLinks4,
} from '@public/assets/data/footer-items'
import { CreditWithSocialIconsComponent } from '../components/credit-with-social-icons/credit-with-social-icons.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-footer3',
  standalone: true,
  imports: [CommonModule, CreditWithSocialIconsComponent, RouterModule],
  templateUrl: './footer3.component.html',
  styles: ``,
})
export class Footer3Component {
  quickLinks = quickLinks2
  quickLinks4 = quickLinks4
  communityLinks = communityLinks
  communityLinks2 = communityLinks2
  contactDetails2 = contactDetails2
}
