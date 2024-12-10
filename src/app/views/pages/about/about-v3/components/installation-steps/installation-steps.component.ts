import { Component } from '@angular/core'
import { installationSteps } from '../../data'

@Component({
  selector: 'aboutV3-installation-steps',
  standalone: true,
  imports: [],
  templateUrl: './installation-steps.component.html',
  styles: ``,
})
export class InstallationStepsComponent {
  installation = installationSteps
}
