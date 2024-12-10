import { Component } from '@angular/core'
import { integrations } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'integrations-grid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {
  integrationList = integrations
}
