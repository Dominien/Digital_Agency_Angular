import { Component } from '@angular/core'
import { brands } from '../../data'

@Component({
  selector: 'shop-brand-collection',
  standalone: true,
  imports: [],
  templateUrl: './brand-collection.component.html',
  styles: ``,
})
export class BrandCollectionComponent {
  brandsData = brands
}
