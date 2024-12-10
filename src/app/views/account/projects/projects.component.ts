import { Component } from '@angular/core'
import { PageHeadingComponent } from '../components/page-heading/page-heading.component'
import { projectsData } from './data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PageHeadingComponent, CommonModule],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  projectsList = projectsData
}
