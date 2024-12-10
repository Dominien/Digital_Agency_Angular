import { Component } from '@angular/core'
import { projects } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'design-agency-showcase',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './showcase.component.html',
  styles: ``,
})
export class ShowcaseComponent {
  projectsData = projects
}
