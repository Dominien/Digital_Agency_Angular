import { Component } from '@angular/core'
import { approachSteps } from '../../data'

@Component({
  selector: 'seo-approches',
  standalone: true,
  imports: [],
  templateUrl: './approches.component.html',
  styles: ``,
})
export class ApprochesComponent {
  approachStepsData = approachSteps
}
