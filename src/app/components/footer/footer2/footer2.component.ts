import { Component, Input } from '@angular/core'
import { GetStartedJourneyComponent } from '../components/get-started-journey/get-started-journey.component'
import {
  communityLinks,
  contactDetail,
  quickLinks,
  socialMediaLinks,
} from '@public/assets/data/footer-items'
import { CommonModule } from '@angular/common'
import { CreditWithLogoComponent } from '../components/credit-with-logo/credit-with-logo.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-footer2',
  standalone: true,
  imports: [
    CommonModule,
    GetStartedJourneyComponent,
    CreditWithLogoComponent,
    RouterLink,
  ],
  templateUrl: './footer2.component.html',
  styles: ``,
})
export class Footer2Component {
  @Input() theme: string = ''

  quickLink = quickLinks
  communityList = communityLinks
  socialLinks = socialMediaLinks
  contactDetail = contactDetail
}
