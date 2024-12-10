import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { translationLanguages } from '@public/assets/data/footer-items'

@Component({
  selector: 'footer-language-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './language-dropdown.component.html',
  styles: ``,
})
export class LanguageDropdownComponent {
  languages = translationLanguages
}
