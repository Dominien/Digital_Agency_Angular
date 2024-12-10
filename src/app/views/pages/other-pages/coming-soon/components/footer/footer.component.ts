import { credits, currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'
import { socialMediaLinks } from '@public/assets/data/footer-items'

@Component({
  selector: 'coming-soon-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  socialMediaLinks = socialMediaLinks
  currentYear = currentYear
  creditsTo = credits
}
