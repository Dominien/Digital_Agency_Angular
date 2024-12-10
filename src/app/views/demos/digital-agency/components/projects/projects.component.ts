import { Component } from '@angular/core'
import { projects } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'digital-agency-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  projectsData = projects
}
