import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
  selector: 'saas-v3-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  currency = currency
}
