import { Component } from '@angular/core'
import { LogoBoxComponent } from '../../logo-box/logo-box.component'
import { quickLinks, socialMediaLinks } from '@public/assets/data/footer-items'
import { credits, currentYear } from '@/app/common/constants'

@Component({
  selector: 'app-footer7',
  standalone: true,
  imports: [LogoBoxComponent],
  templateUrl: './footer7.component.html',
  styles: ``,
})
export class Footer7Component {
  quickLinks = quickLinks
  socialMediaLinks = socialMediaLinks
  currentYear = currentYear
  creditsTo = credits
}
