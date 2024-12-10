import { Component } from '@angular/core'
import { features } from '../../data'

@Component({
  selector: 'career-value',
  standalone: true,
  imports: [],
  templateUrl: './value.component.html',
  styles: ``,
})
export class ValueComponent {
  featureList = features
}
