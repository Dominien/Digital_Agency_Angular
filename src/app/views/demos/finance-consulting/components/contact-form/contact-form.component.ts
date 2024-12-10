import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
  selector: 'finance-consulting-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styles: ``,
})
export class ContactFormComponent {
  currency = currency
}
