import { Component } from '@angular/core'
import { features } from '../../data'

@Component({
  selector: 'pricing-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styles: ``,
})
export class FeatureComponent {
  featureList = features
}
