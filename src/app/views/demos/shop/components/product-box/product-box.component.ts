import { currency } from '@/app/common/constants'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'shop-product-box',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-box.component.html',
  styles: ``,
})
export class ProductBoxComponent {
  currency = currency
}
