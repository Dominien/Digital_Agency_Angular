import { Component } from '@angular/core'
import { teamMembers } from '../../data'

@Component({
  selector: 'seo-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styles: ``,
})
export class TeamComponent {
  teamMembersData = teamMembers
}
