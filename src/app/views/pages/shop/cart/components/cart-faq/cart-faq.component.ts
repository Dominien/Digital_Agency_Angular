import { Component } from '@angular/core'
import { faqs } from '../../data'

@Component({
  selector: 'cart-faq',
  standalone: true,
  imports: [],
  templateUrl: './cart-faq.component.html',
  styles: ``,
})
export class CartFaqComponent {
  faqList = faqs
}
