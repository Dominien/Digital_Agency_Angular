import { Component } from '@angular/core'
import { features } from '../../data'

@Component({
  selector: 'servicev1-core-feature',
  standalone: true,
  imports: [],
  templateUrl: './core-feature.component.html',
  styles: ``,
})
export class CoreFeatureComponent {
  featuresList = features
}
