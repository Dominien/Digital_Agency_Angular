import { Component } from '@angular/core'
import { pricingData1, pricingData2 } from '../../data'
import { currency } from '@/app/common/constants'

@Component({
  selector: 'saas-v2-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  currency = currency
  pricingData1 = pricingData1
  pricingData2 = pricingData2
  planDuration: string = 'month'

  handleChange() {
    if (this.planDuration === 'month') {
      this.planDuration = 'year'
    } else {
      this.planDuration = 'month'
    }
  }
}
