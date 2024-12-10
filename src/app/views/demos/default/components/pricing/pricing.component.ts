import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'default-pricing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  currency = currency
}
