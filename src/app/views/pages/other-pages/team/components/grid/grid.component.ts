import { Component } from '@angular/core'
import { teamMembers } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'team-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class GridComponent {
  memberList = teamMembers
}
