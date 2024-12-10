import { Component } from '@angular/core'
import { features } from '../../data'

@Component({
  selector: 'saas-v5-features1',
  standalone: true,
  imports: [],
  templateUrl: './features1.component.html',
  styles: ``,
})
export class Features1Component {
  featuresData = features
}
