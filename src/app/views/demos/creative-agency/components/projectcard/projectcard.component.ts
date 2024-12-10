import { Component, ViewChild } from '@angular/core'
import { projects } from '../../data'
import { RouterModule } from '@angular/router'
import { IsotopeDirective } from '@/app/components/isotope-directive '
import { CommonModule } from '@angular/common'

@Component({
  selector: 'creative-agency-projectcard',
  standalone: true,
  imports: [RouterModule, IsotopeDirective, CommonModule],
  templateUrl: './projectcard.component.html',
  styles: ``,
})
export class ProjectcardComponent {
  projectsData = projects
  activeFilter: string = '*'
  @ViewChild(IsotopeDirective) isotopeDirective!: IsotopeDirective

  filterItems(filter: string): void {
    if (this.isotopeDirective) {
      this.activeFilter = filter
      this.isotopeDirective.arrangeIsotope(filter)
    }
  }
}
