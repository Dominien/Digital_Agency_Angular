import { Component } from '@angular/core'
import { allJobs } from '../../data'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/common/constants'

@Component({
  selector: 'career-job-list',
  standalone: true,
  imports: [NgbNavModule, RouterModule],
  templateUrl: './job-list.component.html',
  styles: ``,
})
export class JobListComponent {
  currency = currency
  jobList = allJobs
}
