import { credits, currentYear } from '@/app/common/constants'
import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { Component } from '@angular/core'

@Component({
  selector: 'footer-credit-with-logo',
  standalone: true,
  imports: [LogoBoxComponent],
  templateUrl: './credit-with-logo.component.html',
  styles: ``,
})
export class CreditWithLogoComponent {
  currentYear = currentYear
  creditsTo = credits
}
