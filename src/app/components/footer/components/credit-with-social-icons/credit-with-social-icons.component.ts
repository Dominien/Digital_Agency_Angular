import { credits, currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'
import { socialMediaLinks } from '@public/assets/data/footer-items'

@Component({
  selector: 'footer-credit-with-social-icons',
  standalone: true,
  imports: [],
  templateUrl: './credit-with-social-icons.component.html',
  styles: ``,
})
export class CreditWithSocialIconsComponent {
  currentYear = currentYear
  socialMediaLinks = socialMediaLinks
  creditsTo = credits
}
