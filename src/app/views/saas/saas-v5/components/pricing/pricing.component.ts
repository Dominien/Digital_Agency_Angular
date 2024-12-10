import { Component } from '@angular/core'
import { pricingData } from '../../data'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/common/constants'

@Component({
  selector: 'saas-v5-pricing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  currency = currency
  pricingData = pricingData
}
