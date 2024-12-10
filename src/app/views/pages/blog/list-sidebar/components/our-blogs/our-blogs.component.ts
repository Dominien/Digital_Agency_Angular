import { Component } from '@angular/core'
import { blogs } from '../../data'
import { RouterModule } from '@angular/router'
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'our-blogs',
  standalone: true,
  imports: [RouterModule, NgbPopoverModule],
  templateUrl: './our-blogs.component.html',
  styles: ``,
})
export class OurBlogsComponent {
  blogList = blogs
}
