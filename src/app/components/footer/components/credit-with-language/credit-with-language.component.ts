import { Component } from '@angular/core'
import { LanguageDropdownComponent } from '../language-dropdown/language-dropdown.component'
import { credits, currentYear } from '@/app/common/constants'

@Component({
  selector: 'footer-credit-with-language',
  standalone: true,
  imports: [LanguageDropdownComponent],
  templateUrl: './credit-with-language.component.html',
  styles: ``,
})
export class CreditWithLanguageComponent {
  currentYear = currentYear
  creditsTo = credits
}
