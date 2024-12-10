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
  selector: 'app-footer8',
  standalone: true,
  imports: [CommonModule, CreditWithLogoComponent, RouterModule],
  templateUrl: './footer8.component.html',
  styles: ``,
})
export class Footer8Component {
  quickLinks = quickLinks
  communityLinks = communityLinks
  contactDetail = contactDetail
  socialMediaLinks = socialMediaLinks
}
