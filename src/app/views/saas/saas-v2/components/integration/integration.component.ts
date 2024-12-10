import { Component } from '@angular/core'
import { integrations } from '../../data'

@Component({
  selector: 'saas-v2-integration',
  standalone: true,
  imports: [],
  templateUrl: './integration.component.html',
  styles: ``,
})
export class IntegrationComponent {
  integrationsData = integrations
}
