import { Component } from '@angular/core'
import { shopFeatures } from '../../data'

@Component({
  selector: 'shop-shop-features',
  standalone: true,
  imports: [],
  templateUrl: './shop-features.component.html',
  styles: ``,
})
export class ShopFeaturesComponent {
  shopFeaturesData = shopFeatures
}
