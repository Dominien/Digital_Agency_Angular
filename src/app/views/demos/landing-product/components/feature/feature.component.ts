import { Component } from '@angular/core'
import { features } from '../../data'

@Component({
  selector: 'landing-product-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styles: ``,
})
export class FeatureComponent {
  featuresData = features
}
