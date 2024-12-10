import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  communityLinks,
  contactDetail,
  quickLinks,
  socialMediaLinks,
} from '@public/assets/data/footer-items'
import { CreditWithLogoComponent } from '../components/credit-with-logo/credit-with-logo.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-footer4',
  standalone: true,
  imports: [CommonModule, CreditWithLogoComponent, RouterModule],
  templateUrl: './footer4.component.html',
  styles: ``,
})
export class Footer4Component {
  quickLinks = quickLinks
  communityLinks = communityLinks
  contactDetail = contactDetail
  socialMediaLinks = socialMediaLinks
}
