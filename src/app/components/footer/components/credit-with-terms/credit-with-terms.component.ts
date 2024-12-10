import { credits, currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
  selector: 'footer-credit-with-terms',
  standalone: true,
  imports: [],
  templateUrl: './credit-with-terms.component.html',
  styles: ``,
})
export class CreditWithTermsComponent {
  currentYear = currentYear
  creditsTo = credits
}
