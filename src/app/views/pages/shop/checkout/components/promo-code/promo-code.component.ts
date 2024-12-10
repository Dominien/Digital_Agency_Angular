import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
  selector: 'checkout-promo-code',
  standalone: true,
  imports: [],
  templateUrl: './promo-code.component.html',
  styles: ``,
})
export class PromoCodeComponent {
  currency = currency
}
