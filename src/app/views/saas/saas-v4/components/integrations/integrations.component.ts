import { Component } from '@angular/core'
import { integrations } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'saas-v4-integrations',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './integrations.component.html',
  styles: ``,
})
export class IntegrationsComponent {
  integrationsData = integrations
}
