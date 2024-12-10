import { Component } from '@angular/core'
import { integrations } from '../../data'

@Component({
  selector: 'integration-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {
  integrationList = integrations
}
