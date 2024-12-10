import { Component } from '@angular/core'
import { pricingData } from '../../data'
import { currency } from '@/app/common/constants'

@Component({
  selector: 'mobile-show-case-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  currency = currency
  pricingData = pricingData
  planDuration: string = 'month'

  handleChange(): void {
    if (this.planDuration === 'month') {
      this.planDuration = 'year'
    } else {
      this.planDuration = 'month'
    }
  }
}
